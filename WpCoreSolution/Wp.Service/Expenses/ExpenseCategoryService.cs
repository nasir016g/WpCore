
using Wp.Core.Domain.Expenses;
using System.Linq;
using Wp.Data;

namespace Wp.Services.Expenses
{
    public class ExpenseCategoryService : EntityService<ExpenseCategory>, IExpenseCategoryService
    {
        private IEntityBaseRepository<ExpenseCategory> _expenseCategoryRepo;

        public ExpenseCategoryService(IEntityBaseRepository<ExpenseCategory> expenseCategoryRepo) : base(expenseCategoryRepo)
        {
            this._expenseCategoryRepo = expenseCategoryRepo;
        }

        public ExpenseCategory GetById(int id)
        {
            return _expenseCategoryRepo.GetById(id);
        }

        public ExpenseCategory GetByName(string name)
        {
            return _expenseCategoryRepo.Table.Where(x => x.Name.ToLower() == name.ToLower()).FirstOrDefault();
        }
    }
}
