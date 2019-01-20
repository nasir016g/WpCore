﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Wp.Core.Domain.WebPages;
using Wp.Services.Sections;
using Wp.Services.WebPages;
using Wp.Web.Api.Areas.Admin.Extensions.Mapper;
using Wp.Web.Api.Areas.Admin.Models;
using Wp.Web.Api.Controllers;
using Wp.Web.Api.Extensions.Mapper;

namespace Wp.Web.Api.Areas.Admin.Controllers
{
    [Produces("application/json")]
   [Route("api/admin/[controller]")]
    [ValidateModel]
    public class WebPageController : ControllerBase
    {
        private readonly IWebPageService _webPageService;
        private readonly ISectionService _sectionService;

        public WebPageController(IWebPageService webPageService, ISectionService sectionService)
        {
            _webPageService = webPageService;
            _sectionService = sectionService;
        }

        #region Utitlites

        private void PrepareModels(WebPage entity, WebPageModel model)
        {
            var roles = _webPageService.GetRolesByPageId(entity.Id).ToList();
            var roleModelList = new List<WebPageModel.WebPageRoleModel>();
            roles.ForEach(x =>
            {
                roleModelList.Add(new WebPageModel.WebPageRoleModel { Id = x.Id, Name = x.Name });
            });
            model.Roles = roleModelList;
        }

        #endregion
        // GET: api/Page
        [HttpGet]       
        public ObjectResult Get()
        {
            var entities = _webPageService.GetAll();
            var models = entities.ToModels();
            //return BadRequest("Something bad happened.");
            return Ok(models);
        }

        // GET: api/Page/5
        [HttpGet("{id}", Name = "Get")]
        public ObjectResult Get(int id)
        {
            var entity = _webPageService.GetById(id);
            var model = entity.ToModel();

            PrepareModels(entity, model);
            return Ok(model);
        }       

        // POST: api/Page
        [HttpPost]
        public IActionResult Post([FromBody]WebPageModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var entity = model.ToEntity();
            entity.Id = 0;
            _webPageService.Insert(entity);
            return NoContent();
        }

        // PUT: api/Page/5
        [HttpPut("{id}")]
        public NoContentResult Put(int id, [FromBody]WebPageModel model)
        {
            var entity =_webPageService.GetById(id);
            entity = model.ToEntity(entity);
            _webPageService.Update(entity);
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
           var entity = _webPageService.GetById(id);
            _webPageService.Delete(entity);
        }

        #region Sections

        public IActionResult GetAvailableSections()
        {
           var sections = _sectionService.GetAvailableSections();
            return Ok(sections);
        }
        
        [HttpGet("{pageId}/sections", Name = "Sections")]
        public IActionResult GetSections(int pageId)
        {
           var entities = _webPageService.GetSectionsByPageId(pageId).ToList();
            return Ok(entities);

        }

        #endregion

    }

}