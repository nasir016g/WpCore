﻿using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NJsonSchema;
using NSwag.AspNetCore;
using System;
using System.Text;
using Wp.Core;
using Wp.Core.Caching;
using Wp.Core.Domain.Common;
using Wp.Core.Security;
using Wp.Data;
using Wp.Data.Repositories;
using Wp.Services.Configuration;
using Wp.Services.Installation;
using Wp.Services.Localization;
using Wp.Services.Sections;
using Wp.Services.WebPages;
using Wp.Web.Api.Infrastructure.Mapper;
using Wp.Web.Framework;

namespace Wp.Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<WpContext>(options =>
                    options.UseLazyLoadingProxies()
             .UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("Wp.Web.WebApi")));

            services.AddDefaultIdentity<ApplicationUser>(options =>
            {
                options.Password.RequiredLength = 6;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;

            })
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<WpContext>();

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
                   ValidIssuer = Configuration["Token:Issuer"],
                   ValidAudience = Configuration["Token:Audience"],
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes
                                                      (Configuration["Token:Key"]))
               };
           });

            services
                .AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });

            services.AddSwagger();
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


            // autoMapper
            services.AddAutoMapper();
            AutoMapperConfiguration.Init();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            Console.WriteLine($"env:{env.EnvironmentName}");

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseAuthentication();

            app.UseSwaggerUi3WithApiExplorer(settings =>
            {
                settings.GeneratorSettings.DefaultPropertyNameHandling =
                    PropertyNameHandling.CamelCase;
            });
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                  name: "areas",
                  template: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
                );
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
