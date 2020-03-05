
using Wp.Core;
using Wp.Core.Domain.Expenses;
using Wp.Core.Interfaces.Repositories;
using Wp.Data;
using System.Linq;
using System;
using System.Linq.Expressions;
using Wp.Services.Models;

namespace Wp.Services.Expenses
{
    public class ExpenseService : EntityService<Expense>, IExpenseService
    {
        private readonly IUnitOfWork unitOfWork;
        private IExpenseRepository _expenseRepo;
        private readonly IBaseRepository<ExpenseExpenseTagMapping> _expenseExpenseTagRepository;

        public ExpenseService(IUnitOfWork unitOfWork, 
            IExpenseRepository expenseRepo, 
            IBaseRepository<ExpenseExpenseTagMapping> expenseExpenseTagRepository): base(unitOfWork, expenseRepo)
        {
            this.unitOfWork = unitOfWork;
            _expenseRepo = expenseRepo;
            _expenseExpenseTagRepository = expenseExpenseTagRepository;
        }

        public bool ExpenseTagExists(Expense expense, int expenseTagId)
        {
            if (expense == null)
                throw new ArgumentNullException(nameof(expense));

          return  expense.ExpenseExpenseTagMappings.Any(x => x.ExpenseTagId == expenseTagId);
        }

        public IPagedList<Expense> GetAll(ExpenseSearchModel search = null)
        {
            var query = _expenseRepo.Table;

            if(!string.IsNullOrEmpty(search.Name))
            {
                query = query.Where(x => x.Name.ToLower().Contains(search.Name.ToLower()));
            }

            if(!string.IsNullOrEmpty(search.Description))
            {
                query = query.Where(x => x.Description.ToLower().Contains(search.Description.ToLower()));
            }

            if(!string.IsNullOrEmpty(search.ExpenseTags))
            {
              var ets = search.ExpenseTags.ParseExpenseTags();
                query = from e in query
                        join et in _expenseExpenseTagRepository.Table on e.Id equals et.ExpenseId
                        where ets.Contains(et.ExpenseTag.Name)
                        select e;
            }

            if(search.ExpenseCategories.Count() > 0)
            {
                query = from e in query
                        where search.ExpenseCategories.Contains(e.ExpenseCategory.Name)
                        select e;
            }
           

            if (search.SortField != null)
            {
                //// Sort based on descending or not
                //query = searchModel.SortDescending ? query.OrderByDescending(ExpressionHelper.GetSortProperty<Expense>(searchModel.SortField)) :
                //    query.OrderBy(ExpressionHelper.GetSortProperty<Expense>(searchModel.SortField));

                query = query.OrderBy(search.SortField, search.SortDescending);
            }

            return new PagedList<Expense>(query, search.PageIndex, search.PageSize);
        }

        public Expense GetByDescription(string description, DateTime dateTime)
        {
           return _expenseRepo.Table.SingleOrDefault(x => x.Description == description && x.Date.Date == dateTime.Date);
        }

        
    }
}
