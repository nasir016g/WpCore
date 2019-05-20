using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Wp.Core
{
    public interface ITenantUnitOfWork : IDisposable
    {
        int Complete();
        Task<int> CompleteAsync();
    }
}