using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;
using Wp.Core;
using Wp.Core.Domain.Tenants;
using Wp.Core.Mapping.WebPages;
using Wp.Core.Security;
using Wp.Data.Mappings;

namespace Wp.Data
{
    public class WpContext : IdentityDbContext<ApplicationUser>, IDbContext
    {
        private readonly string _connectionString;
        private readonly Tenant _tenant;

        //public DbSet<WebPage> WebPages { get; set; }
        public new DbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }

        public WpContext(DbContextOptions<WpContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public WpContext(DbContextOptions<WpContext> options, string connectionString) : base(options)
        {
            _connectionString = connectionString;
        }

        public WpContext(DbContextOptions<WpContext> options, string connectionString, ITenantService tenantService) : base(options)
        {
            _connectionString = connectionString;
            _tenant = tenantService.GetTenant();
        }

        public WpContext(DbContextOptions<WpContext> options, ITenantService tenantService) : base(options)
        {
            _tenant = tenantService.GetTenant();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (_tenant != null)
            {
                optionsBuilder.UseSqlServer(_tenant.ConnectionString);
            }
            else if (_connectionString != null)
            {
                optionsBuilder.UseSqlServer(_connectionString, b => b.MigrationsAssembly("Wp.Data"));
            }
            base.OnConfiguring(optionsBuilder);
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
