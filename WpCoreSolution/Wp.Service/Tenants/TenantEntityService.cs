using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wp.Core;
using Wp.Core.Domain.Tenants;
using Wp.Services;

namespace Wp.Service.Tenants
{
    public abstract class TenantEntityService : IEntityService<Tenant> 
    {
        protected ITenantUnitOfWork _unitOfWork;
        ITenantsBaseRepository _repository;

        public TenantEntityService(ITenantUnitOfWork unitOfWork, ITenantsBaseRepository repository)
        {
            _unitOfWork = unitOfWork;
            _repository = repository;
        }

        public virtual Tenant GetById(int id)
        {
            return _repository.GetById(id);
        }

        public virtual void Insert(Tenant entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            _repository.Add(entity);
            _unitOfWork.Complete();
        }


        public virtual void Update(Tenant entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
            _unitOfWork.Complete();
        }

        public virtual void Delete(Tenant entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
            _repository.Remove(entity);
            _unitOfWork.Complete();
        }

        public virtual IList<Tenant> GetAll()
        {
            return _repository.Table.ToList();
        }
    }
}
