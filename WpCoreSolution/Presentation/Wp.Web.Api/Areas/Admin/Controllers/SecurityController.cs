using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Wp.Core.Security;

namespace Wp.Web.Api.Areas.Admin.Controllers
{
    [Route("api/admin/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public SecurityController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }
        // GET: api/Security
        [HttpGet("Roles", Name = "Roles")]
        public IEnumerable<string> Roles()
        {
           var roles = _roleManager.Roles.Select(x => x.Name).ToList();
           return roles;
        }

        

        // POST: api/Security
        [HttpPost("Roles/{roleName}")]
        public async Task<IActionResult> Post(string roleName)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _roleManager.RoleExistsAsync(roleName))
            {
                return BadRequest("Role already exists.");
            }

            var result = await _roleManager.CreateAsync(new IdentityRole(roleName));
            return Ok(result);
        }

        // PUT: api/Security/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("Roles/{roleName}")]
        public async Task<IActionResult> Delete(string roleName)
        {
           var role = await _roleManager.FindByNameAsync(roleName);
           var result = await _roleManager.DeleteAsync(role);
           return NoContent();
        }
    }
}
