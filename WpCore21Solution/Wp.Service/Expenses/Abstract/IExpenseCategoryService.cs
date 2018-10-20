using Wp.Core.Domain.Expenses;

namespace Wp.Services.Expenses
{
    public interface IExpenseCategoryService : IEntityService<ExpenseCategory>
    {
        ExpenseCategory GetById(int id);
        ExpenseCategory GetByName(string name);
    }
}