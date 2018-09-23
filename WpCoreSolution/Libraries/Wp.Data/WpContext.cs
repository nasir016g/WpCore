using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;
using Wp.Core.Mapping.WebPages;
using Wp.Core.Security;
using Wp.Data.Mappings;

namespace Wp.Data
{
    public class WpContext : IdentityDbContext<ApplicationUser>, IDbContext
    {
        //public DbSet<Setting> Settings { get; set; }
        //public DbSet<Language> Languages { get; set; }
        //public DbSet<LocaleStringResource> LocaleStringResources { get; set; }
        //public DbSet<LocalizedProperty> LocalizedPropertys { get; set; }
        //public DbSet<Log> Logs { get; set; }
        //public DbSet<Photo> Photos { get; set; }
        //public DbSet<Section> Sections { get; set; }
        //public DbSet<UrlRecord> UrlRecords { get; set; }
        //public DbSet<WebPage> WebPages { get; set; }
        //public DbSet<WebPageRole> WebPageRoles { get; set; }
        public new DbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }

        public WpContext(DbContextOptions<WpContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // new SettingMap(builder.Entity<Setting>()); // digivers style (not recommanded)

            // dynamically 
            System.Type configType = typeof(WebPageMap);
            var typesToRegister = Assembly.GetAssembly(configType).GetTypes()
                .Where(t => !string.IsNullOrEmpty(t.Namespace))
                .Where(t => t.BaseType != null && t.BaseType.IsGenericType && t.BaseType.GetGenericTypeDefinition() == typeof(EntityBaseConfiguration<>));

            foreach(var t in typesToRegister)
            {
                dynamic configInstance = Activator.CreateInstance(t);
                builder.ApplyConfiguration(configInstance);
            }

            // manaully
            //builder.ApplyConfiguration(new SettingMap());
          
        }
    }
}
