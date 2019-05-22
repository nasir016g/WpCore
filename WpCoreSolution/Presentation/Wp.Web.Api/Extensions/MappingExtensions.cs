using System.Security.Claims;
using Wp.Core.Domain.Sections;
using Wp.Core.Domain.Security;
using Wp.Core.Domain.WebPages;
using Wp.Services.Localization;
using Wp.Services.Sections;
using Wp.Services.WebPages;
using Wp.Web.Models.Sections;
using Wp.Web.Api.Infrastructure.Mapper;
using Wp.Web.Api.Models;

namespace Wp.Web.Api.Extensions.Mapper
{
    public static class MappingExtensions
    {
        public static TDestination MapTo<TSource, TDestination>(this TSource source)
        {
            return AutoMapperConfiguration.Mapper.Map<TSource, TDestination>(source);
        }

        public static TDestination MapTo<TSource, TDestination>(this TSource source, TDestination destination)
        {
            return AutoMapperConfiguration.Mapper.Map(source, destination);
        }

        #region Sections

        #region HtmlContentSection

        public static HtmlContentSectionModel ToModel(this HtmlContentSection entity)
        {
            return entity.MapTo<HtmlContentSection, HtmlContentSectionModel>();
        }

        public static HtmlContentSection ToEntity(this HtmlContentSectionModel model)
        {
            return model.MapTo<HtmlContentSectionModel, HtmlContentSection>();
        }

        public static HtmlContentSection ToEntity(this HtmlContentSectionModel model, HtmlContentSection destination)
        {
            return model.MapTo(destination);
        }

        #endregion

        #region ContactFormSection

        public static ContactFormSectionModel ToModel(this ContactFormSection entity)
        {
            return entity.MapTo<ContactFormSection, ContactFormSectionModel>();
        }

        public static ContactFormSection ToEntity(this ContactFormSectionModel model)
        {
            return model.MapTo<ContactFormSectionModel, ContactFormSection>();
        }

        public static ContactFormSection ToEntity(this ContactFormSectionModel model, ContactFormSection destination)
        {
            return model.MapTo(destination);
        }

        #endregion


        #region ResumeSection

        public static ResumeSectionModel ToModel(this ResumeSection entity)
        {
            return entity.MapTo<ResumeSection, ResumeSectionModel>();
        }

        public static ResumeSection ToEntity(this ResumeSectionModel model)
        {
            return model.MapTo<ResumeSectionModel, ResumeSection>();
        }

        public static ResumeSection ToEntity(this ResumeSectionModel model, ResumeSection destination)
        {
            return model.MapTo(destination);
        }

        #endregion

        #endregion

        //webpage
        public static WebPageModel ToModel(this WebPage entity, IWebPageService webPageService, ISectionService sectionService, ClaimsPrincipal user, int languageId, ILocalizedEntityService leService)
        {
            if (entity == null)
                return null;

            bool userIsAdmin = user.IsInRole(SystemRoleNames.Administrators);
            bool userHasEditRights = webPageService.HasEditRights(entity.Id);
            bool userHasCreateRights = webPageService.HasCreateRights(entity.Id);

            var model = new WebPageModel()
            {
                Id = entity.Id,
                VirtualPath = entity.VirtualPath,
                UserHasCreateRights = userHasCreateRights,
                AvailableSections = sectionService.GetAvailableSections()
            };

            foreach (var sectionEntity in entity.Sections)
            {
                var sm = GetSectionModel(sectionEntity, languageId, leService);
                sm.Id = sectionEntity.Id;
                //sm.WebPage = sectionEntity.WebPage;
                sm.UserHasEditRights = userHasEditRights;
                sm.UserIsAdmin = userIsAdmin;
                model.Sections.Add(sm);
            }
            return model;
        }

        private static BaseReadOnlyModel GetSectionModel(Section entity, int languageId, ILocalizedEntityService leService)
        {
            if (entity is HtmlContentSection)
            {
                var htmlContent = new HtmlContentSectionReadOnlyModel();
                htmlContent.Html = ((HtmlContentSection)entity).GetLocalized(x => x.Html, languageId, leService);
                htmlContent.Controller = "HtmlContent";
                return htmlContent;
            }
            else if (entity is ContactFormSection)
            {
                var contactForm = new ContactFormSectionReadOnlyModel();
                contactForm.IntroText = ((ContactFormSection)entity).IntroText;
                contactForm.NameEnabled = ((ContactFormSection)entity).NameEnabled;
                contactForm.ExtendedEnabled = ((ContactFormSection)entity).ExtendedEnabled;
                contactForm.Controller = "ContactForm";
                return contactForm;
            }
            else if (entity is ResumeSection)
            {
                var resume = new ResumeSectionReadOnlyModel();
                resume.ApplicationUserName = ((ResumeSection)entity).ApplicationUserName;
                resume.Controller = "Resume";
                return resume;
            }
            return null;
        }



    }
}
