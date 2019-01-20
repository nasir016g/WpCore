using System.Collections.Generic;
using System.Linq;
using Wp.Core.Domain.Career;
using Wp.Data;

namespace Wp.Services.Career
{
    

    public class EducationService : EntityService<Education>, IEducationService
    {
        private IEntityBaseRepository<Education> _educationRepo;
        private IEntityBaseRepository<EducationItem> _educationItemRepo;

        public EducationService(IEntityBaseRepository<Education> educationRepo, IEntityBaseRepository<EducationItem> educationItemRepo)
        :base(educationRepo)
        {
            this._educationRepo = educationRepo;
            this._educationItemRepo = educationItemRepo;
        }

        #region Edu
        public IList<Education> GetAll(int ResumeId)
        {
            return _educationRepo.Table.Where(x => x.ResumeId == ResumeId).ToList();
        }

        public Education GetById(int id)
        {
            return _educationRepo.GetById(id);
        }

        #endregion

        #region Item
        public IList<EducationItem> GetEducationItemsByEducationId(int educationId)
        {
           return _educationItemRepo.Table.Where(x => x.EducationId == educationId).ToList();
        }

        public EducationItem GetEducationItemById(int id)
        {
            return _educationItemRepo.GetById(id);
        }

        public void InsertEducationItem(EducationItem t)
        {
            _educationItemRepo.Save(t);
        }

        public void UpdateEducationItem(EducationItem t)
        {
            _educationItemRepo.Save(t);
        }

        public void DeleteEducationItem(EducationItem t)
        {
            _educationItemRepo.Delete(t);
        }
        #endregion
    }
}
