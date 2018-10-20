using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Wp.Core;
using Wp.Core.Domain.Common;
using Wp.Core.Domain.Localization;
using Wp.Core.Domain.Sections;
using Wp.Core.Domain.Security;
using Wp.Core.Domain.Seo;
using Wp.Core.Domain.WebPages;
using Wp.Core.Security;
using Wp.Data;
using Wp.Service.Helpers;
using Wp.Services.Configuration;
using Wp.Services.Localization;

namespace Wp.Services.Installation
{
    public partial interface IInstallationService
    {
        void InstallData();
        void InstallExpenses();
    }

    public class CodeFirstInstallationService : IInstallationService
    {
        #region Fields
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISettingService _settingService;

        private readonly IBaseRepository<WebPage> _webPageRepo;
        private readonly IBaseRepository<WebPageRole> _webPageRoleRepo;
        private readonly IBaseRepository<UrlRecord> _urlRecordRepo;
        private readonly IBaseRepository<Language> _languageRepo;
        private readonly IBaseRepository<Section> _sectionRepo;

        public UserManager<ApplicationUser> _userManager;
        public RoleManager<IdentityRole> _roleManager;
        public IHostingEnvironment _hostingEnvironment;

        
        #endregion

        #region Ctor

        public CodeFirstInstallationService(IUnitOfWork unitOfWork, 
            ISettingService settingService,  
            IBaseRepository<WebPage> webPageRepo, 
            IBaseRepository<WebPageRole> webPageRoleRepo, 
            IBaseRepository<UrlRecord> urlRecordRepo, 
            IBaseRepository<Language> languageRepo, 
            IBaseRepository<Section> sectionRepo,
            UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IHostingEnvironment hostingEnvironment)
        {
            _unitOfWork = unitOfWork;
            this._webPageRepo = webPageRepo;
            this._webPageRoleRepo = webPageRoleRepo;
            this._urlRecordRepo = urlRecordRepo;
            this._languageRepo = languageRepo;
            this._sectionRepo = sectionRepo;
            _settingService = settingService;

            _userManager = userManager;
            _roleManager = roleManager;
            _hostingEnvironment = hostingEnvironment;
           
        }

        #endregion

        #region Utilities

        private void InstallWebPages()
        {
           
            var sections = new List<Section>
            {
                new HtmlContentSection { Html = "test html section" }
            };
            var pages = new List<WebPage>
            {
                new WebPage { ParentId = 0, MetaTitle = "Home", NavigationName = "Home", VirtualPath = "Home" ,DisplayOrder = 1, Sections = sections },
                new WebPage { ParentId = 0, MetaTitle = "Contact", NavigationName = "Contact", VirtualPath = "Contact",  DisplayOrder = 2 },
                new WebPage { ParentId = 2, MetaTitle = "About", NavigationName = "About", VirtualPath = "Contact-About",  DisplayOrder = 7 }
            };

            foreach (var page in pages)
            {
                var p = _webPageRepo.Table.Where(x => x.VirtualPath == page.VirtualPath).FirstOrDefault();
                if (p == null)
                {
                    _webPageRepo.Add(page);
                    var urlRecord = new UrlRecord()
                    {
                        EntityId = page.Id,
                        EntityName = "WebPage",
                        Slug = page.VirtualPath,
                        LanguageId = 0,
                        IsActive = true,
                    };
                    _urlRecordRepo.Add(urlRecord);
                }
            }
            //_unitOfWork.Complete();

        }

        private void InstallLanguages()
        {
            if(_languageRepo.Table.Count() == 0)
            { 
                var languages = new List<Language>()
                {
                    new Language { Name = "English", LanguageCulture = "en-Us", UniqueSeoCode = "en", FlagImageFileName = "us.png", Published = true },
                    new Language { Name = "Nederlands", LanguageCulture = "nl-NL", UniqueSeoCode = "nl", FlagImageFileName = "nl.png", Published = true }
                };
            
                languages.ForEach(l => _languageRepo.Add(l));
                //_unitOfWork.Complete();

                //InstallLocaleResources();
            }
        }

        private void InstallLocaleResources()
        {
            var webRoot = _hostingEnvironment.WebRootPath;
            //var file = System.IO.Path.Combine(webRoot, "test.txt");
            foreach (var language in _languageRepo.Table.ToList())
            {
                foreach (var filePath in System.IO.Directory.EnumerateFiles(Path.Combine(webRoot, "App_Data/Localization/"), string.Format("*.{0}.res.xml", language.UniqueSeoCode), SearchOption.TopDirectoryOnly))
                {
                    // 
                    string xmlText = File.ReadAllText(filePath);
                    var localizationService = ServiceLocator.Instance.GetService<ILocalizationService>();
                    localizationService.ImportResourcesFromXml(language, xmlText);
                }
            }           
        }

        private void InstallUsersAndRoles()
        {
            // Add Users and Roles
           
            //Create Role Administrators if it does not exist
           var admin = _roleManager.FindByNameAsync(RoleNames.Administrators.ToString());
            if (admin != null)
                _roleManager.CreateAsync(new IdentityRole(RoleNames.Administrators.ToString())).Wait();

            //Create Role Users if it does not exist
            var fUser = _roleManager.FindByNameAsync(RoleNames.Users.ToString());
            if (fUser != null)
                _roleManager.CreateAsync(new IdentityRole(RoleNames.Users.ToString())).Wait();

            //Create User=test with password=test
            if (_userManager.FindByNameAsync("test").Result == null)
            {
                var user = new ApplicationUser { UserName = "test", Email = "test@test.nl" };
                var userResult = _userManager.CreateAsync(user, "test12").Result;

                // Add User test to Role Administrators
                if (userResult.Succeeded)
                {
                    _userManager.AddToRoleAsync(user, RoleNames.Administrators.ToString()).Wait();
                }
                else
                {
                    throw new Exception(userResult.Errors.First().ToString());
                }
            }
        }

        private void InstallRolesAtAPage()
        {
             _unitOfWork.Complete();
           var firstPage = _webPageRepo.Table.First();
            var roles = _roleManager.Roles;

            List<WebPageRole> wrList = new List<WebPageRole>();
            foreach(var role in roles)
            {
                WebPageRole pr = new WebPageRole();
                pr.WebPage = firstPage;
                pr.Name = role.Name;

                wrList.Add(pr);              

            }
            _webPageRoleRepo.AddRange(wrList);

            _unitOfWork.Complete();
        }

        private void InstallSettings()
        {
            if(_settingService.GetAll().Count() == 0)
            {            
                _settingService.SaveSetting(new WebsiteSettings()
                {
                   WebsiteName = "Default",
                   Theme = "Grey",
                });

                _settingService.SaveSetting(new LocalizationSettings()
                    {
                        DefaultAdminLanguageId = _languageRepo.Table.Single(x => x.Name == "English").Id,
                        UseImagesForLanguageSelection = false,
                    });
            }
        }      

        #endregion

        public void InstallData()
        {
            InstallWebPages();
            InstallLanguages();
            InstallUsersAndRoles();
            InstallRolesAtAPage();
            //InstallSettings();
        }

        public void InstallExpenses()
        {
            throw new NotImplementedException();
        }

        //public void InstallExpenses()
        //{
        //    // create categories
        //    if (_expenseCategoryService.GetAll().Count() == 0)
        //    {
        //        var categories = new List<ExpenseCategory>()
        //        {
        //            new ExpenseCategory { Name = "ATM", Color = "#4E3475", Description = "ATM" },
        //            new ExpenseCategory { Name = "Bills", Color = "#D11717", Description = "Bills" },
        //            new ExpenseCategory { Name = "Car", Color = "#FFBF00", Description = "Car" },
        //            new ExpenseCategory { Name = "Clothes", Color = "#B45F04", Description = "Clothes" },
        //            new ExpenseCategory { Name = "Education", Color = "#8A0808", Description = "Education" },
        //            new ExpenseCategory { Name = "Food", Color = "#03872a", Description = "Food" },
        //            new ExpenseCategory { Name = "Go out", Color = "#5e94ff", Description = "Go out" },
        //            new ExpenseCategory { Name = "Income", Color = "#2abd42", Description = "Income" },
        //            new ExpenseCategory { Name = "Insurance", Color = "#351fff", Description = "Insurance" },
        //            new ExpenseCategory { Name = "Sports", Color = "#8da246", Description = "Sports" },
        //            new ExpenseCategory { Name = "Travel", Color = "#230180", Description = "Travel" },
        //            new ExpenseCategory { Name = "Others", Color = "#8ef9d9", Description = "Others" }
        //          };

        //        categories.ForEach(category => _expenseCategoryService.Insert(category));
        //    }

        //    // create accounts
        //    if (_expenseAccountService.GetAll().Count() == 0)
        //    {
        //        var accounts = new List<ExpenseAccount>()
        //        {
        //            new ExpenseAccount { Name = "Bank (Nasir private)" },
        //            new ExpenseAccount { Name = "Bank (Zarghona private)" },
        //        };

        //        accounts.ForEach(account => _expenseAccountService.Insert(account));
        //    }

        //    var nasirAccount = _expenseAccountService.GetByName("Bank (Nasir private)");

        //    Random r = new Random();
        //    for (int i = 0; i < 3; i++)
        //    {
        //        Expense expense = new Expense
        //        {
        //            Name = "expense " + i.ToString(),
        //            Value = r.Next(5, 20),
        //            Date = DateTime.Now,
        //            ExpenseCategory = _expenseCategoryService.GetAll()[i],
        //            ExpenseAccount = nasirAccount
        //        };
        //        _expenseService.Insert(expense);
        //    }            
        //}       
    }
}
