using Wp.Core;
using Wp.Core.Domain.Expenses;

namespace Wp.Services.Expenses
{
    public interface IExpenseService : IEntityService<Expense>
    {
        Expense GetByNotifications(string notifications);
        bool ExpenseTagExists(Expense expense, int expenseTagId);
    }
}