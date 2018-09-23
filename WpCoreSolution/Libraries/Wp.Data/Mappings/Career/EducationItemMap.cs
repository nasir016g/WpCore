using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wp.Core.Domain.Career;
using Wp.Data.Mappings;

namespace Wp.Core.Mappings.Career
{
    public class EducationItemMap : EntityBaseConfiguration<EducationItem>
    {
        public EducationItemMap()
        {
            this.ToTable("Resume_EducationItem");            
            this.Property(ei => ei.Name).IsRequired().HasMaxLength(200);
            this.HasRequired(ei => ei.Education)
                .WithMany(e => e.EducationItems)
                .HasForeignKey(ei => ei.EducationId);
        }
    }
}
