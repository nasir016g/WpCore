using Wp.Core.Domain.Career;

namespace Wp.Services.Career
{
    public interface IResumeService : IEntityService<Resume>
    {
        Resume GetById(int id);
        Resume GetByUserName(string name);
    }
}