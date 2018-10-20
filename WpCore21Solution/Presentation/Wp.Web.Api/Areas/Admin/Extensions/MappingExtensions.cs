using System.Collections.Generic;
using Wp.Core.Domain.Sections;
using Wp.Core.Domain.WebPages;
using Wp.Web.Models.Sections;
using Wp.Web.Api.Areas.Admin.Models;
using Wp.Web.Api.Infrastructure.Mapper;


namespace Wp.Web.Api.Areas.Admin.Extensions.Mapper
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
       

        #region WebPage

        public static IEnumerable<WebPageModel> ToModels(this IEnumerable<WebPage> entities)
        {
            return entities.MapTo<IEnumerable<WebPage>, IEnumerable<WebPageModel>>();
        }

        public static WebPageModel ToModel(this WebPage entity)
        {
            return entity.MapTo<WebPage, WebPageModel>();
        }

        public static WebPage ToEntity(this WebPageModel model)
        {
            return model.MapTo<WebPageModel, WebPage>();
        }

        public static WebPage ToEntity(this WebPageModel model, WebPage destination)
        {
            return model.MapTo(destination);
        }        

        #endregion

    }
}
