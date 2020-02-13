using System;

namespace Wp.Web.Api.Models.Admin
{
    public class ExpenseModel 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Value { get; set; }
        public DateTime Date { get; set; }

        public int ExpenseCategoryId { get; set; }
        public ExpenseCategoryModel ExpenseCategory { get; set; }

        public int ExpenseAccountId { get; set; }
        public ExpenseAccountModel ExpenseAccount { get; set; }      
    }   
}
