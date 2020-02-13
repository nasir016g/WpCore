using System.Collections.Generic;

namespace Wp.Web.Api.Models.Admin
{
    public class ExpenseCategoryModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }

        public ICollection<ExpenseModel> Expenses { get; set; }
    }
}
