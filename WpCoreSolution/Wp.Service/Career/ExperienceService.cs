using System.Collections.Generic;
using System.Linq;
using Wp.Core.Domain.Career;
using Wp.Data;

namespace Wp.Services.Career
{
    public class ExperienceService : EntityService<Experience>, IExperienceService
    {
        private IEntityBaseRepository<Experience> _workExperienceRepo;
        private IEntityBaseRepository<Project> _projectRepo;

        public ExperienceService(IEntityBaseRepository<Experience> workExperienceRepo, IEntityBaseRepository<Project> projectRepo)
        : base(workExperienceRepo)
        {
            this._workExperienceRepo = workExperienceRepo;
            this._projectRepo = projectRepo;
        }

        #region WE
        public IList<Experience> GetAll(int ResumeId)
        {
            return _workExperienceRepo.Table.Where(x => x.ResumeId == ResumeId).OrderByDescending(x => x.DisplayOrder).ToList();
        }

        public Experience GetById(int id)
        {
            return _workExperienceRepo.GetById(id);
        }

        #endregion

        #region Item
        public IList<Project> GetProjectsByExperienceId(int experienceId)
        {
            return _projectRepo.Table.Where(x => x.ExperienceId == experienceId).ToList();
        }

        public Project GetProjectById(int id)
        {
            return _projectRepo.GetById(id);
        }

        public void InsertProject(Project t)
        {
            _projectRepo.Save(t);
        }

        public void UpdateProject(Project t)
        {
            _projectRepo.Save(t);
        }

        public void DeleteProject(Project t)
        {
            _projectRepo.Delete(t);
        }
        #endregion
    }
}
