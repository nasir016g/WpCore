using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Wp.Core.Security;
using Wp.Web.WebApi.Models;

namespace Wp.Web.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {        
        private readonly UserManager<ApplicationUser> _userManager;
        public RoleManager<IdentityRole> _roleManager;

        public SecurityController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        //#region Roles
        //public ActionResult RoleIndex()
        //{
        //    var model = _identityService.GetRoles().Select(x => new RoleModel { Name = x });
        //    return View(model);
        //}

        //public ActionResult CreateRole(RoleModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        if (!RoleManager.RoleExists(model.Name))
        //        {
        //            var result = RoleManager.Create(new IdentityRole(model.Name));
        //            if (result.Succeeded)
        //            {
        //                SuccessNotification("The role was created successfuly.", true);
        //            }
        //            else
        //            {
        //                foreach (var error in result.Errors)
        //                {
        //                    ErrorNotification(error, true);
        //                }
        //                return View();
        //            }
        //        }
        //    }

        //    return RedirectToAction("RoleIndex");
        //}

        //public ActionResult DeleteRole(string roleName)
        //{
        //    _identityService.DeleteRole(roleName);
        //    return RedirectToAction("RoleIndex");
        //}
        //#endregion

        #region Users
        [HttpGet("Users")]
        public ObjectResult UserIndex()
        {
            var model = _userManager.Users.Select(x => new UserModel { Name = x.UserName });
            return Ok(model);
        }


        [HttpPost]
        public async Task<IActionResult> CreateUser(UserModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser { UserName = model.Name, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                return NoContent();
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        //public ActionResult EditUser(string userName)
        //{
        //    var user = UserManager.FindByName(userName);

        //    var model = new UserModel { Name = userName };

        //    model.Roles = _identityService.GetRoles().Select(x => new RoleModel { Name = x }).ToList();

        //    //is user in role? (IsChecked)
        //    foreach (var roleId in user.Roles.Select(x => x.RoleId))
        //    {
        //        var role = RoleManager.Roles.First(x => x.Id == roleId);
        //        model.Roles.First(x => x.Name == role.Name).IsChecked = true;
        //    }

        //    return View(model);
        //}

        //[HttpPost]
        //public ActionResult EditUser(UserModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View(model);
        //    }

        //    ApplicationUser user = UserManager.FindByName(model.Name);

        //    // remove user from (old) roles 
        //    foreach (var oldRole in UserManager.GetRoles(user.Id))
        //    {
        //        if (model.SelectedRoles == null || !model.SelectedRoles.Contains(oldRole))
        //        {
        //            if (oldRole == RoleNames.Administrators.ToString() && _identityService.UsersWithAdminRoleCount() < 2)
        //            {
        //                ErrorNotification("Last administrator can't be deleted.", true);
        //                return RedirectToAction("EditUser", new { userName = model.Name });
        //            }
        //            else
        //            {
        //                UserManager.RemoveFromRole(user.Id, oldRole);
        //            }
        //        }
        //    }

        //    // add user to (new) roles
        //    if (model.SelectedRoles != null)
        //    {
        //        foreach (var selectedRole in model.SelectedRoles)
        //        {
        //            if (!UserManager.GetRoles(user.Id).Contains(selectedRole))
        //            {
        //                UserManager.AddToRole(user.Id, selectedRole);
        //            }
        //        }
        //    }

        //    SuccessNotification("User updated successfully.");

        //    return RedirectToAction("EditUser", new { userName = model.Name });
        //}

        //public ActionResult DeleteUser(string userName)
        //{
        //    ApplicationUser user = UserManager.FindByName(userName);

        //    if (UserManager.GetRoles(user.Id).Contains(RoleNames.Administrators.ToString()))
        //    {
        //        // at least one user must remain in Administrators Role
        //        // therefore check if the deleting user is the last user 
        //        if (_identityService.UsersWithAdminRoleCount() < 2)
        //        {
        //            ErrorNotification("Last administrator can't be deleted.", true);
        //            return RedirectToAction("UserIndex");
        //        }
        //    }

        //    _identityService.DeleteUser(user);

        //    return RedirectToAction("UserIndex");
        //}
        #endregion
    }
}