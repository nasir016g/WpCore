using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wp.Core;
using Wp.Core.Caching;
using Wp.Core.Domain.Common;
using Wp.Data;
using Wp.Data.Repositories;
using Wp.Service.Tenants;
using Wp.Services.Configuration;
using Wp.Services.Installation;
using Wp.Services.Localization;
using Wp.Services.Sections;
using Wp.Services.WebPages;
using Wp.Web.Framework;

namespace Wp.Web.Api.Extensions
{
    public static class ServiceCollectionExtensions
    {

        public static IServiceCollection AddTenantCatalogDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            var defaultConnection = configuration.GetConnectionString("DefaultConnection");
            var tenantCatalogConnection = configuration.GetConnectionString("TenantCatalogConnection");
            services.AddEntityFrameworkSqlServer();
            //services.AddDbContext<DigiversDbContext>(options => options.UseSqlServer(defaultConnection, b => b.MigrationsAssembly("Digivers.Data")));
            //services.AddDbContext<TenantCatalogDbContext>(options => options.UseSqlServer(tenantCatalogConnection, b => b.MigrationsAssembly("Digivers.Data")));
            services.AddDbContext<WpContext>(options =>
            {
                options.UseSqlServer(defaultConnection,
                sqlServerOptionsAction: sqlOptions =>
                {
                    sqlOptions.MigrationsAssembly("Wp.Data");
                    sqlOptions.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                });
            });
            services.AddDbContext<TenantsDbContext>(options =>
            {
                options.UseSqlServer(tenantCatalogConnection,
                sqlServerOptionsAction: sqlOptions =>
                {
                    sqlOptions.MigrationsAssembly("Wp.Data");
                    sqlOptions.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                });
            });

            services.AddScoped<ITenantUnitOfWork, TenantUnitOfWork>();
            services.AddScoped<ITenantService, TenantService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            return services;
        }

        public static void ApplyMigrations(IApplicationBuilder app, ITenantService tenantService)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                using (TenantsDbContext context = serviceScope.ServiceProvider.GetService<TenantsDbContext>())
                {
                    context.Database.Migrate();
                }
                using (WpContext context = serviceScope.ServiceProvider.GetService<WpContext>())
                {
                    context.Database.Migrate();

                    var tenants = tenantService.GetAll();
                    foreach (var t in tenants)
                    {
                        WpContext wpContext = new WpContext(new DbContextOptions<WpContext>(), t.ConnectionString);
                        wpContext.Database.Migrate();
                    }
                }
            }
        }

        public static IServiceCollection AddWp(this IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // repositories
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped(typeof(ITenantsBaseRepository<>), typeof(TenantsBaseRepository<>));
            //services.AddScoped<IWebPageRepository, WebPageRepository>();
            //services.AddScoped<IWebPageRoleRepository, WebPageRoleRepository>();
            //services.AddScoped<ISectionRepository, SectionRepository>();

            // services
            services.AddScoped<ITenantUnitOfWork, TenantUnitOfWork>();
            services.AddScoped<ITenantService, TenantService>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();            
            //services.AddScoped(typeof(IEntityService<>), typeof(EntityService<>));
            services.AddScoped<IWebPageService, WebPageService>();
            services.AddScoped<ISectionService, SectionService>();
            services.AddScoped<ISettingService, SettingService>();
            services.AddScoped<ILanguageService, LanguageService>();
            services.AddScoped<ILocalizedEntityService, LocalizedEntityService>();
            services.AddScoped<ICacheManager, PerRequestCacheManager>();
            services.AddScoped<IInstallationService, CodeFirstInstallationService>();
            services.AddScoped(x =>
            {
                return x.GetService<ISettingService>().LoadSetting<WebsiteSettings>();
            });

            services.AddSingleton<IWorkContext, WorkContext>();
            return services;
        }

        public static IServiceCollection AddJwt(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
          .AddCookie()
          .AddJwtBearer(jwtBearerOptions =>
          {
              jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters()
              {
                  ValidateActor = false,
                  ValidateAudience = false,
                  ValidateLifetime = true,
                  ValidateIssuerSigningKey = true,
                  ValidIssuer = configuration["Token:Issuer"],
                  ValidAudience = configuration["Token:Audience"],
                  IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes
                                                     (configuration["Token:Key"]))
              };
          });
            return services;
        }

        public static void AddLogger()
        {
            Log.Logger = new LoggerConfiguration()
              .MinimumLevel.Debug()
              .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
              .MinimumLevel.Override("System", LogEventLevel.Warning)
              .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
              .Enrich.FromLogContext()
              .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Literate)
              .WriteTo.File(@"C:\home\LogFiles\Application\myapp.txt", fileSizeLimitBytes: 1_000_000, rollOnFileSizeLimit: true, shared: true, flushToDiskInterval: TimeSpan.FromSeconds(1))
              .CreateLogger();
        }
    }
}
