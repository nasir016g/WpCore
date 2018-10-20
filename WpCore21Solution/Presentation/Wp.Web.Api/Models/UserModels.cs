using System.Collections.Generic;

namespace Wp.Web.Api.Models
{
    public class UserModel
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        //public string Comment { get; set; }
        //public DateTime LastLoginDate { get; set; }


        public IEnumerable<RoleModel> Roles { get; set; }
        public IEnumerable<string> SelectedRoles { get; set; }
    }
}
