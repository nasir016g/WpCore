using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wp.Core;
using Wp.Core.Domain.Tenants;

namespace Wp.Service.Tenants
{
    public class TenantService : TenantEntityService, ITenantService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ITenantsBaseRepository _tenantRepo;
        private List<Tenant> _tenants;
        private Tenant _currentTenant;

        public TenantService(
            IHttpContextAccessor httpContextAccessor,
            ITenantUnitOfWork unitOfWork,
            ITenantsBaseRepository repository) : base(unitOfWork, repository)
        {
            
            _httpContextAccessor = httpContextAccessor;
            _tenantRepo = repository;
            _tenants = _tenantRepo.Table.ToList();

            if (_httpContextAccessor.HttpContext != null)
            {
                _currentTenant = GetTenantByName();
            }
            else
            {
                var tenantid = new Guid("10DEE2B7-DCBA-45E6-8E03-380D27772944"); // default
                _currentTenant = GetTenantByTenantId(tenantid);
            }

        }

        private Tenant GetTenantByName()
        {
            if (_tenants == null)
            {
                _tenants = _tenantRepo.Table.ToList();
            }

            Tenant tenant = null;

            var path = _httpContextAccessor.HttpContext.Request.Path;

            if (path.HasValue)
            {
                string alias = _httpContextAccessor.HttpContext.Request.Query["Name"];
                if (alias == null)
                    alias = "Demo1";

                tenant = _tenants.FirstOrDefault(t => t.TenantName.ToLowerInvariant() == alias.ToLowerInvariant());

            }

            return tenant;
        }

        private Tenant GetTenantByTenantId(Guid TenantId)
        {
            if (_tenants == null)
            {
                _tenants = _tenantRepo.Table.ToList();
            }
            var tenant = _tenants.FirstOrDefault(t => t.TenantId == TenantId);
            return tenant;
        }

        

        public Tenant GetTenant()
        {
            return _currentTenant;
        }          
    }
}
