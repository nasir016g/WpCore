using System.Collections.Generic;
using System.Linq;
using Wp.Core.Domain.Career;
using Wp.Data;

namespace Wp.Services.Career
{
   

    public class SkillService : EntityService<Skill>, ISkillService
    {
        private IEntityBaseRepository<Skill> _skillRepo;
        private IEntityBaseRepository<SkillItem> _skillItemRepo;

        public SkillService(IEntityBaseRepository<Skill> skillRepo, IEntityBaseRepository<SkillItem> skillItemRepo)
        :base(skillRepo)
        {
            this._skillRepo = skillRepo;
            this._skillItemRepo = skillItemRepo;
        }

        #region Ski
        public IList<Skill> GetAll(int ResumeId)
        {
            return _skillRepo.Table.Where(x => x.ResumeId == ResumeId).ToList();
        }

        public Skill GetById(int id)
        {
            return _skillRepo.GetById(id);
        }

        #endregion

        #region Item

        public IList<SkillItem> GetSkillItemsBySkillId(int skillId)
        {
            return _skillItemRepo.Table.Where(x => x.SkillId == skillId).ToList();
        }

        public SkillItem GetSkillItemById(int id)
        {
            return _skillItemRepo.GetById(id);
        }

        public void InsertSkillItem(SkillItem t)
        {
            _skillItemRepo.Save(t);
        }

        public void UpdateSkillItem(SkillItem t)
        {
            _skillItemRepo.Save(t);
        }

        public void DeleteSkillItem(SkillItem t)
        {
            _skillItemRepo.Delete(t);
        }

        #endregion
    }
}
