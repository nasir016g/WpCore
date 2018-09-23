using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Wp.Web.WebApi.Extensions.Mapper;

namespace Wp.Web.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        public IHostingEnvironment _hostingEnvironment;
        public IConfiguration _configuration;

        public ValuesController(IHostingEnvironment hostingEnvironment, IConfiguration configuration)
        {
            _hostingEnvironment = hostingEnvironment;
            _configuration = configuration;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2", _hostingEnvironment.EnvironmentName, _configuration["AppSettings:Hello"] };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ObjectResult Get(int id)
        {

            return Ok("Value1");
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
