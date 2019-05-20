using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wp.Core;
using Wp.Core.Domain.Tenants;

namespace Wp.Service.Tenants
{
    public class TenantService : TenantEntityService<Tenant>, ITenantService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ITenantsBaseRepository<Tenant> _tenantRepo;
        private List<Tenant> _tenants;
        private Tenant _currentTenant;

        public TenantService(
            IHttpContextAccessor httpContextAccessor,
            ITenantUnitOfWork unitOfWork,
            ITenantsBaseRepository<Tenant> repository) : base(unitOfWork, repository)
        {
            _httpContextAccessor = httpContextAccessor;
            _tenantRepo = repository;

            if (_httpContextAccessor.HttpContext != null)
            {
                _currentTenant = GetTenantByName();
            }
            else
            {
                var tenantid = new Guid("01E1A03D-334E-4E49-844A-28153FB02BCA");
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
