using System.Threading.Tasks;
using Wp.Core;

namespace Wp.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WpContext _context;

        //public ISettingRepository Settings { get; private set; }
        //public ILanguageRepository Languages { get; private set; }
        //public ILocaleStringResourceRepository LocaleStringResources { get; private set; }
        //public ILocalizedPropertyRepository LocalizedPropertys { get; private set; }
        //public ILogRepository Logs { get; private set; }
        //public IPhotoRepository Photos { get; private set; }
        //public ISectionRepository Sections { get; private set; }
        //public IUrlRecordRepository UrlRecords { get; private set; }
        //public IWebPageRepository WebPages { get; private set; }
        //public IWebPageRoleRepository WebPageRoles { get; private set; }

        public UnitOfWork(WpContext context)
        {
            _context = context;
            //Settings = new SettingRepository(_context);
            //LocaleStringResources = new LocaleStringResourceRepository(_context);
            //LocalizedPropertys = new LocalizedPropertyRepository(_context);
            //Logs = new LogRepository(_context);
            //Photos = new PhotoRepository(_context);
            //Sections = new SectionRepository(_context);
            //UrlRecords = new UrlRecordRepository(_context);
            //WebPages = new WebPageRepository(_context);
            //WebPageRoles = new WebPageRoleRepository(_context);


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
