using System.Threading.Tasks;
using Wp.Core;

namespace Wp.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WpContext _context;

        public UnitOfWork(WpContext context)
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

        public void Dispose()
        {
            //_context.Dispose();
        }
    }
}
