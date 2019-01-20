
using Wp.Core.Domain.Expenses;
using System.Linq;
using Wp.Data;

namespace Wp.Services.Expenses
{
    public class ExpenseAccountService : EntityService<ExpenseAccount>, IExpenseAccountService
    {
        private IEntityBaseRepository<ExpenseAccount> _expenseAccountRepo;

        public ExpenseAccountService(IEntityBaseRepository<ExpenseAccount> expenseAccountRepo)
            : base(expenseAccountRepo)
        {
            this._expenseAccountRepo = expenseAccountRepo;
        }

        public ExpenseAccount GetById(int id)
        {
            return _expenseAccountRepo.GetById(id);
        }

        public ExpenseAccount GetByName(string name)
        {
            return _expenseAccountRepo.Table.Where(x => x.Name.ToLower() == name.ToLower()).FirstOrDefault();
        }
    }
}
