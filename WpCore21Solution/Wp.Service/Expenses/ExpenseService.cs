
using Wp.Core.Domain.Expenses;
using Wp.Data;

namespace Wp.Services.Expenses
{
    public class ExpenseService : EntityService<Expense>, IExpenseService
    {
        private IEntityBaseRepository<Expense> _expenseRepo;

        public ExpenseService(IEntityBaseRepository<Expense> expenseRepo): base(expenseRepo)
        {
            this._expenseRepo = expenseRepo;
        }

        public Expense GetById(int id)
        {
            return _expenseRepo.GetById(id);
        }
    }
}
