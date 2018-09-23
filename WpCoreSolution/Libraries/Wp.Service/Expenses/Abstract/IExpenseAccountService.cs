using Wp.Core.Domain.Expenses;

namespace Wp.Services.Expenses
{
    public interface IExpenseAccountService : IEntityService<ExpenseAccount>
    {
        ExpenseAccount GetById(int id);
        ExpenseAccount GetByName(string name);
    }
}