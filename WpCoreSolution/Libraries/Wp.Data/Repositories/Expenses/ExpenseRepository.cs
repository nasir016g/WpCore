﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Wp.Core.Domain.Expenses;
using Wp.Core.Interfaces.Repositories;

namespace Wp.Data.Repositories
{
    public class ExpenseRepository : BaseRepository<Expense>, IExpenseRepository
    {
        public ExpenseRepository(WpDbContext context) : base(context)
        {
        }

        public override Expense GetById(int id)
        {
            return base.GetById(id);
        }

        public override IQueryable<Expense> Table
        {
            get
            {
                var query = Context.Set<Expense>().Include(x => x.ExpenseAccount);
                return query;
            }
        }

        public WpDbContext ApplicationContext
        {
            get { return Context as WpDbContext; }
        }
    }


}