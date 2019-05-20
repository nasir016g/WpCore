using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wp.Core;
using Wp.Services;

namespace Wp.Service.Tenants
{
    public abstract class TenantEntityService<T> : IEntityService<T> where T : Entity
    {
        protected ITenantUnitOfWork _unitOfWork;
        ITenantsBaseRepository<T> _repository;

        public TenantEntityService(ITenantUnitOfWork unitOfWork, ITenantsBaseRepository<T> repository)
        {
            _unitOfWork = unitOfWork;
            _repository = repository;
        }

        public virtual T GetById(int id)
        {
            return _repository.GetById(id);
        }

        public virtual void Insert(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            _repository.Add(entity);
            _unitOfWork.Complete();
        }


        public virtual void Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
            _unitOfWork.Complete();
        }

        public virtual void Delete(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
            _repository.Remove(entity);
            _unitOfWork.Complete();
        }

        public virtual IList<T> GetAll()
        {
            return _repository.Table.ToList();
        }
    }
}
