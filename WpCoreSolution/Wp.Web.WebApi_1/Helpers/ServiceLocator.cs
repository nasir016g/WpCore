﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wp.Web.WebApi.Helpers
{
    public static class ServiceLocator
    {
        public static IServiceProvider Instance { get; set; }
    }
}
