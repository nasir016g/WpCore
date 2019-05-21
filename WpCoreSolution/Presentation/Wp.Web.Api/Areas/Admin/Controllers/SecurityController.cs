using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Wp.Core.Security;
using Wp.Web.Api.Areas.Admin.Models;

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

        #region roles

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

        #endregion

        #region users

        [HttpGet("Users", Name = "Users")]
        public IEnumerable<UserModel> Users()
        {
            var users = _userManager.Users.Select(x => new UserModel { Name = x.UserName }).ToList();
            return users;
        }

        [HttpGet("Users/{userName}")]
        public async Task<IActionResult> GetUser(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);

            var model = new UserModel { Name = userName };
            model.Roles = _roleManager.Roles.Select(x => new RoleModel { Name = x.Name});

            foreach (var role in model.Roles)
            {
                role.IsChecked = await _userManager.IsInRoleAsync(user, role.Name);
            }

            return Ok(model);
        }
        #endregion
    }
}
