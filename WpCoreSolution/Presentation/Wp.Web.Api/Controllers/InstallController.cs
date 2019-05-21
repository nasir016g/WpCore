using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wp.Services.Installation;

namespace Wp.Web.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Install")]
    public class InstallController : Controller
    {
        private readonly IInstallationService _installationService;
        public InstallController(IInstallationService installationService)
        {
            _installationService = installationService;
        }
        // GET: api/Install
        [HttpGet]
        public string Data()
        {
            _installationService.InstallData();
            return "installed successfully.";
        }

        [HttpGet("Tenants")]
        public string Tenants()
        {
            _installationService.InstallTenants();
            return "installed tenants successfully.";
        }

       
    }
}
