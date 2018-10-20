using Wp.Core.Domain.Expenses;

namespace Wp.Services.Expenses
{
    public interface IExpenseService : IEntityService<Expense>
    {
        Expense GetById(int id);
    }
}