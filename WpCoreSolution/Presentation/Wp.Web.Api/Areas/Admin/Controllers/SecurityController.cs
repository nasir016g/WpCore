using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Wp.Core.Domain.Security;
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
            //var roles = _roleManager.Roles.Select(x => new RoleModel { Name = x.Name});
            var roles = _roleManager.Roles;

            foreach (var role in roles)
            {
                var roleModel = new RoleModel {Name = role.Name };
                roleModel.IsChecked = await _userManager.IsInRoleAsync(user, role.Name);
                model.Roles.Add(roleModel); 
            }

            return Ok(model);
        }

        [HttpPost("users")]
        public async Task<IActionResult> PostUser([FromBody]UserModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByNameAsync(model.Name);
            foreach (var role in model.Roles)
            {
                if(role.IsChecked)
                {
                    //add
                   if(!await _userManager.IsInRoleAsync(user, role.Name))
                    {
                       await _userManager.AddToRoleAsync(user, role.Name);
                    }
                }
                else
                {
                    //remove
                    if (await _userManager.IsInRoleAsync(user, role.Name))
                    {
                        // there must remain at least one admin in system
                        if(role.Name == SystemRoleNames.Administrators)
                        {
                            var adminUsers = await _userManager.GetUsersInRoleAsync(SystemRoleNames.Administrators);
                            if (adminUsers.Count() < 2) continue;
                        }                        
                        
                        await _userManager.RemoveFromRoleAsync(user, role.Name);
                    }
                }
            }

            return NoContent();
        }

        //[HttpPut("users")]
        //public IActionResult PutUser(UserModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    return NoContent();
        //}
        #endregion
    }
}
