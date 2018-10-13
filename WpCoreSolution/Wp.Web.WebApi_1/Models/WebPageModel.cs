using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wp.Web.Models.Sections;

namespace Wp.Web.WebApi.Models
{
    public class WebPageModel
    {
        public WebPageModel()
        {
            Sections = new List<BaseReadOnlyModel>();
        }

        public int Id { get; set; }
        public bool UserHasCreateRights { get; set; }
        public IList<BaseReadOnlyModel> Sections { get; set; }
        public IEnumerable<string> AvailableSections { get; set; }
    }
}
