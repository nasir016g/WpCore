using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wp.Services.Expenses;
using Wp.Web.Api.Extensions.Mapper;

namespace Wp.Web.Api.Areas.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpenseService _expenseService;

        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }
        // GET: api/Expense
        [HttpGet]
        public IActionResult Get()
        {
            var entities = _expenseService.GetAll();
            var models = entities.ToModels();
            return Ok(models);
        }

        // GET: api/Expense/5
        [HttpGet("{id}", Name = "GetExpense")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Expense
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Expense/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
