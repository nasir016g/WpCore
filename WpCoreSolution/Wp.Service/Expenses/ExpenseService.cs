
using Wp.Core;
using Wp.Core.Domain.Expenses;
using Wp.Core.Interfaces.Repositories;
using Wp.Data;
using System.Linq;
using System;

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

        public bool ExpenseTagExists(Expense expense, int expenseTagId)
        {
            if (expense == null)
                throw new ArgumentNullException(nameof(expense));

          return  expense.ExpenseExpenseTagMappings.Any(x => x.ExpenseTagId == expenseTagId);
        }

        public Expense GetByNotifications(string notifications)
        {
           return _expenseRepo.Table.SingleOrDefault(x => x.Notifications == notifications);
        }
    }
}
