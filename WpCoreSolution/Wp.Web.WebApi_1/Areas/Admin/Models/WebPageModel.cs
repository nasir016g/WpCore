﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Wp.Web.WebApi.Areas.Admin.Models
{
    public class WebPageModel
    {
        public int Id { get; set; }
        public int ParentId { get; set; }       
        public string VirtualPath { get; set; }       
        public string NavigationName { get; set; }
        public int DisplayOrder { get; set; }       
        public bool Visible { get; set; }
        public bool AllowAnonymousAccess { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public string MetaTitle { get; set; }
        
        public IEnumerable<WebPageRoleModel> Roles { get; set; }
        
        // nested classes

        public class WebPageRoleModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }


    }
}