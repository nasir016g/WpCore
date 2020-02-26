using System;
using System.Collections.Generic;
using System.Text;
using Wp.Core;
using Wp.Core.Domain.Expenses;

namespace Wp.Services.Expenses
{
    public interface IExpenseTagService : IEntityService<ExpenseTag>
    {
        IList<ExpenseTag> GetAllExpenseTagsByExpenseId(int expenseId);

        ExpenseTag GetExpenseTagByName(string name);
        string[] ParseExpenseTags(string productTags);
        void UpdateExpenseTags(Expense expense, string[] expenseTags);
    }
}
