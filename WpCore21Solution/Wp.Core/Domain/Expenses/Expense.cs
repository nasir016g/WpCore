using System;

namespace Wp.Core.Domain.Expenses
{
    public class Expense : EntityAuditable
    {
        
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Value { get; set; }
        public DateTime Date { get; set; }

        public int ExpenseCategoryId { get; set; }
        public virtual ExpenseCategory ExpenseCategory { get; set; }

        public int ExpenseAccountId { get; set; }
        public virtual ExpenseAccount ExpenseAccount { get; set; }      
    }   
}
