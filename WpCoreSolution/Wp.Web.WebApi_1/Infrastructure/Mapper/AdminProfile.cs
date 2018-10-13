using AutoMapper;
using Wp.Core.Domain.WebPages;
using Wp.Web.WebApi.Areas.Admin.Models;

namespace Wp.Web.WebApi.Infrastructure
{
    public class AdminProfile : Profile
    {
        public AdminProfile()
        {
            CreateMap<WebPage, WebPageModel>()
                .ReverseMap()
                .ForMember(dest => dest.Sections, options => options.Ignore())
                .ForMember(dest => dest.UpdatedOn, options => options.Ignore())
                .ForMember(dest => dest.CreatedOn, options => options.Ignore());                            
                
        }
    }
}
