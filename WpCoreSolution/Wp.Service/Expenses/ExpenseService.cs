
using Wp.Core;
using Wp.Core.Domain.Expenses;
using Wp.Core.Interfaces.Repositories;
using Wp.Data;

namespace Wp.Services.Expenses
{
    public class ExpenseService : EntityService<Expense>, IExpenseService
    {
        private readonly IUnitOfWork unitOfWork;
        private IExpenseRepository _expenseRepo;

        public ExpenseService(IUnitOfWork unitOfWork, IExpenseRepository expenseRepo): base(unitOfWork, expenseRepo)
        {
            this.unitOfWork = unitOfWork;
            _expenseRepo = expenseRepo;
        }       
    }
}
