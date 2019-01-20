using System.Collections.Generic;
using System.Linq;
using Wp.Core.Domain.Career;
using Wp.Data;

namespace Wp.Services.Career
{  
    public class ResumeService : EntityService<Resume>, IResumeService
    {
        private IEntityBaseRepository<Resume> _ResumeRepo;

        public ResumeService(IEntityBaseRepository<Resume> ResumeRepo) : base(ResumeRepo)
        {
            this._ResumeRepo = ResumeRepo;
        }

        public Resume GetById(int id)
        {
            return _ResumeRepo.GetById(id);
        }

        public Resume GetByUserName(string userName)
        {
            return _ResumeRepo.Table.Where(x => x.ApplicationUserName == userName).FirstOrDefault();
        }
    }
}
