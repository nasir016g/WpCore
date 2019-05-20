using System.Data.Entity.ModelConfiguration;
using Wp.Core.Domain.Expenses;

namespace Wp.Data.Mappings.Expenses
{
    public class ExpenseMap : EntityBaseConfiguration<Expense>
    {
        public ExpenseMap()
        {
            this.ToTable("Expense");
            //this.HasKey(e => e.EntityId);
            this.Property(e => e.Name).IsRequired().HasMaxLength(200);
            this.Property(e => e.Description).IsMaxLength();
            this.HasRequired(e => e.ExpenseCategory)
                .WithMany(ec => ec.Expenses)
                .HasForeignKey(e => e.ExpenseCategoryId);

            this.HasRequired(e => e.ExpenseAccount)
               .WithMany(ea => ea.Expenses)
               .HasForeignKey(e => e.ExpenseAccountId);

        }
    }
}
