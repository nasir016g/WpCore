﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
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
using Wp.Services.Configuration;
using Wp.Services.Installation;
using Wp.Services.Localization;
using Wp.Services.Sections;
using Wp.Services.WebPages;
using Wp.Web.Framework;

namespace Wp.Web.Api.Extensions
{
    public static class ServiceCollectionExtensions2
    {

        public static IServiceCollection AddWp(this IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // repositories
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            //services.AddScoped<IWebPageRepository, WebPageRepository>();
            //services.AddScoped<IWebPageRoleRepository, WebPageRoleRepository>();
            //services.AddScoped<ISectionRepository, SectionRepository>();

            // services
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