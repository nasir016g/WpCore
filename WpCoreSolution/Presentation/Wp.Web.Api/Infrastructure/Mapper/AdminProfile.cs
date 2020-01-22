using AutoMapper;
using Wp.Core.Domain.Tenants;
using Wp.Core.Domain.WebPages;
using Wp.Web.Api.Models.Admin;

namespace Wp.Web.Api.Infrastructure
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


            CreateMap<Tenant, TenantModel>()
                .ReverseMap();
        }


    }
}
