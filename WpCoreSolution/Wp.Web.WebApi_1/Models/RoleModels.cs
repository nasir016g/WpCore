using System.ComponentModel.DataAnnotations;

namespace Wp.Web.WebApi.Models
{
    public class RoleModel
    {
        [Required()]
        public string Name { get; set; }

        public bool IsChecked { get; set; }
    }
}
