﻿using System.Collections.Generic;
using Wp.Core.Domain.Career;

namespace Wp.Services.Career
{
    public interface IEducationService : IEntityService<Education>
    {
        IList<Education> GetAll(int ResumeId);
        Education GetById(int id);

        IList<EducationItem> GetEducationItemsByEducationId(int educationId);
        EducationItem GetEducationItemById(int id);
        void InsertEducationItem(EducationItem t);
        void UpdateEducationItem(EducationItem t);
        void DeleteEducationItem(EducationItem t);
    }
}