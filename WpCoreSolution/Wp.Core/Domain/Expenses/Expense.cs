using System;
using System.Collections.Generic;

namespace Wp.Core.Domain.Expenses
{
    public class Expense : EntityAuditable
    {
        private ICollection<ExpenseExpenseTagMapping> _expenseExpenseTagMappings;
        
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Notifications { get; set; }
        public bool IsDebit { get; set; }
        public string Code { get; set; }
        public string TransactionType { get; set; }

        public int ExpenseCategoryId { get; set; }
        public virtual ExpenseCategory ExpenseCategory { get; set; }

        public int ExpenseAccountId { get; set; }
        public virtual ExpenseAccount ExpenseAccount { get; set; }  

        public virtual ICollection<ExpenseExpenseTagMapping> ExpenseExpenseTagMappings
        {
            get => _expenseExpenseTagMappings ?? (_expenseExpenseTagMappings = new List<ExpenseExpenseTagMapping>());
            protected set => _expenseExpenseTagMappings = value;
        }
        

    }   
}
