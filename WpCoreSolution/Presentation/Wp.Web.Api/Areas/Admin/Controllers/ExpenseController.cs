using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wp.Services.Expenses;
using Wp.Services.ExportImport;
using Wp.Web.Api.Extensions.Mapper;
using Wp.Web.Api.Models.Admin;

namespace Wp.Web.Api.Areas.Admin.Controllers
{
    [Route("api/admin/[controller]")]
    //[ApiController]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpenseService _expenseService;
        private readonly IExpenseAccountService _expenseAccountService;
        private readonly IExpenseCategoryService _expenseCategoryService;
        private readonly IExpenseTagService _expenseTagService;
        private readonly IImportManager _importManager;

        #region ctor
        public ExpenseController(IExpenseService expenseService, IExpenseAccountService expenseAccountService, IExpenseCategoryService expenseCategoryService, IExpenseTagService expenseTagService, IImportManager importManager)
        {
            _expenseService = expenseService;
            _expenseAccountService = expenseAccountService;
            _expenseCategoryService = expenseCategoryService;
            _expenseTagService = expenseTagService;
            _importManager = importManager;
        }
        #endregion

        #region utilities
        private ExpenseModel PrepareModel(ExpenseModel model)
        {
            model.ExpenseTags = string.Join(", ", _expenseTagService.GetAllExpenseTagsByExpenseId(model.Id).Select(x => x.Name));
            return model;
        }
        #endregion
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
        public IActionResult Get(int id)
        {
            var entity = _expenseService.GetById(id);
            var model = entity.ToModel();
            PrepareModel(model);

            return Ok(model);
        }

        // POST: api/Expense  
        [HttpPost]
        public IActionResult Post([FromBody] ExpenseModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var entity = model.ToEntity();
            entity.Id = 0;
            _expenseService.Insert(entity);
            return NoContent();
        }

        // PUT: api/Expense/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ExpenseModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var entity = _expenseService.GetById(id);
            entity = model.ToEntity(entity);

            var expenseAccount = _expenseAccountService.GetByName(model.ExpenseAccount.Name);

            entity.ExpenseAccount = expenseAccount;
            entity.ExpenseAccountId = expenseAccount.Id;
            _expenseService.Update(entity);
            _expenseTagService.UpdateExpenseTags(entity, _expenseTagService.ParseExpenseTags(model.ExpenseTags));
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var entity = _expenseService.GetById(id);
            _expenseService.Delete(entity);
        }

        [HttpPost("{importexcelfile}", Name = "ImportFromXlsx")]
        public virtual IActionResult ImportFromXlsx(IFormFile importexcelfile)
        {
           
            try
            {
                if (importexcelfile != null && importexcelfile.Length > 0)
                {
                    _importManager.ImportExpensesFromXlsx(importexcelfile.OpenReadStream());
                }
                else
                {
                    return BadRequest("No file.");
                }

                return Ok();
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }
    }
}
