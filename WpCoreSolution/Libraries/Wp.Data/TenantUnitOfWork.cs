using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Wp.Core;

namespace Wp.Data
{
    public class TenantUnitOfWork : ITenantUnitOfWork
    {
        private readonly TenantDbContext _context;

        public TenantUnitOfWork(TenantDbContext context)
        {
            _context = context;
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        //public void Dispose()
        //{
        //    //_context.Dispose();
        //}
    }
}
