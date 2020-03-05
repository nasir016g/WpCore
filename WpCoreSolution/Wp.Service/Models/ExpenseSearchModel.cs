using System;
using System.Collections.Generic;
using System.Text;

namespace Wp.Services.Models
{
    public class ExpenseSearchModel : BaseSearchModel
    {
       public string Name { get; set; }
       public string Description { get; set; }
       public string ExpenseTags { get; set; }
       public string[] ExpenseCategories { get; set; }
    }
}
