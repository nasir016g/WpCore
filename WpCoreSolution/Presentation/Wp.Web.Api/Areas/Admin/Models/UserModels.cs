using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wp.Web.Api.Areas.Admin.Models
{
    public class UserModel
    {
        public string Name { get; set; }
        public string Password { get; set; }

        public IEnumerable<RoleModel> Roles { get; set; }
        public IEnumerable<string> SelectedRoles { get; set; } //
    }
}
