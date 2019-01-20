(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["webpage-webpage-module"],{

/***/ "./src/app/admin/webpage/shared/webpage.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/webpage/shared/webpage.model.ts ***!
  \*******************************************************/
/*! exports provided: BaseModel, WebPage, WebPageRoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPage", function() { return WebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageRoleModel", function() { return WebPageRoleModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.id = -1;
    }
    return BaseModel;
}());

var WebPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebPage, _super);
    function WebPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebPage;
}(BaseModel));

var WebPageRoleModel = /** @class */ (function () {
    function WebPageRoleModel() {
    }
    return WebPageRoleModel;
}());



/***/ }),

/***/ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/webpage/webpage-detail/webpage-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page details</h1>\r\n<hr>\r\n\r\n\r\n<form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit()\">\r\n    <tabset>\r\n        <tab heading=\"General\">\r\n            <div class=\"form-group row \">\r\n                <label for=\"virtualPath\" class=\"col-md-2 col-form-label\">Virtual path</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"virtualPath\" id=\"virtualPath\">\r\n\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <control-messages [control]=\"form.controls.virtualPath\"></control-messages>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-2 col-form-label\">Navigation Name</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"navigationName\">\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <control-messages [control]=\"form.controls.navigationName\"></control-messages>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"visible\" class=\"col-md-2 col-form-label\">displayOrder</label>\r\n                <div class=\"col-md-2\">\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"displayOrder\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"visible\" class=\"col-md-2 col-form-label\">Visible</label>\r\n                <div class=\"col-md-4 pt-3\">\r\n                    <input type=\"checkbox\" class=\"float-left\" formControlName=\"visible\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"allowAnonymousAccess\" class=\"col-md-2 col-form-label\">AllowAnonymousAccess</label>\r\n                <div class=\"col-md-4 pt-3\">\r\n                    <input type=\"checkbox\" class=\"float-left\" formControlName=\"allowAnonymousAccess\">\r\n                </div>\r\n            </div>\r\n        </tab>\r\n        <tab heading=\"Meta's\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-2 col-form-label\">Meta Title</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"metaTitle\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-2 col-form-label\">Meta Description</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"metaDescription\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-2 col-form-label\">Meta Keywords</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"metaKeywords\">\r\n                </div>\r\n            </div>\r\n        </tab>\r\n        <tab heading=\"Sections\"></tab>\r\n    </tabset>\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-10 text-left\">\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Back to list\" (click)=\"cancel()\">\r\n\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebPageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageDetailComponent", function() { return WebPageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _shared_webpage_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/webpage.model */ "./src/app/admin/webpage/shared/webpage.model.ts");
/* harmony import */ var _shared_webpage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/webpage.service */ "./src/app/admin/webpage/shared/webpage.service.ts");







var WebPageDetailComponent = /** @class */ (function () {
    function WebPageDetailComponent(formBuilder, activatedRoute, router, alertService, pageService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertService = alertService;
        this.pageService = pageService;
        this.model = new _shared_webpage_model__WEBPACK_IMPORTED_MODULE_5__["WebPage"]();
        if (this.activatedRoute.snapshot.params['id']) {
            this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
        }
        this.buildForm(this.formBuilder);
    }
    WebPageDetailComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            id: this.model.id,
            virtualPath: [this.model.virtualPath, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            navigationName: [this.model.navigationName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            visible: [this.model.visible],
            allowAnonymousAccess: [this.model.allowAnonymousAccess],
            displayOrder: [this.model.displayOrder],
            metaTitle: [this.model.metaTitle],
            metaDescription: [this.model.metaDescription],
            metaKeywords: [this.model.metaKeywords]
        });
    };
    WebPageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model.id > 0) {
            // edit
            this.pageService.getPageById(this.model.id)
                .subscribe(function (resp) {
                _this.model = resp;
                _this.buildForm(_this.formBuilder);
            }, function (error) { return _this.alertService.danger(error.message); });
        }
    };
    WebPageDetailComponent.prototype.cancel = function () {
        this.router.navigate(['admin/webpage/list']);
    };
    WebPageDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.pageService.save(this.form.value)
                .subscribe(function (resp) {
                _this.model = resp;
                _this.alertService.success('Page updated successfully.');
            }, function (error) {
                for (var fieldName in error.error) {
                    _this.alertService.danger(error.error[fieldName]);
                }
                console.log(error.error);
            });
        }
    };
    WebPageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-webpage',
            template: __webpack_require__(/*! ./webpage-detail.component.html */ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _shared_webpage_service__WEBPACK_IMPORTED_MODULE_6__["WebPageService"]])
    ], WebPageDetailComponent);
    return WebPageDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/webpage/webpage-list/webpage-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/webpage/webpage-list/webpage-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Are you sure you want to delet?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"alert-danger\">{{errorMessage}}</div>\r\n\r\n\r\n<table class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>Virtual path</th>\r\n            <th>Navigation name</th>\r\n            <th>  <button class=\"btn btn-success btn-circle\" \r\n                [routerLink]=\"['/admin/webpage/add']\"          \r\n                      title=\"Add Web Page\">\r\n                      <i class=\"fa fa-plus\"></i> \r\n              </button> </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let wp of webpages\">\r\n            <td>{{wp.id}}</td>\r\n            <td>{{wp.virtualPath}}</td>\r\n            <td>{{wp.navigationName}}</td>           \r\n            <td style=\"width: 70px;\">               \r\n                   <a [routerLink]=\"['/admin/webpage/edit', wp.id]\"> <i class=\"fa fa-edit pointer\"></i></a>                  \r\n                  <i class=\"fa fa-trash pointer\"    \r\n                    (click)=\"delete(webpage, template)\" title=\"Delete\"></i>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/admin/webpage/webpage-list/webpage-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/webpage/webpage-list/webpage-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebPageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageListComponent", function() { return WebPageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_webpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/webpage.service */ "./src/app/admin/webpage/shared/webpage.service.ts");





var WebPageListComponent = /** @class */ (function () {
    function WebPageListComponent(pageService, router, modalService) {
        this.pageService = pageService;
        this.router = router;
        this.modalService = modalService;
        this.webpages = [];
    }
    WebPageListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    WebPageListComponent.prototype.getAll = function () {
        var _this = this;
        this.pageService.getAll().subscribe(function (data) { return _this.webpages = data; }, function (err) {
            _this.errorMessage = err.error;
        });
    };
    WebPageListComponent.prototype.delete = function (webpage, template) {
        this.deletingPage = webpage;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    WebPageListComponent.prototype.confirm = function () {
        var _this = this;
        this.pageService.delete(this.deletingPage.id).subscribe(function (resp) {
            _this.getAll();
        });
        this.modalRef.hide();
    };
    WebPageListComponent.prototype.decline = function () {
        this.deletingPage = null;
        this.modalRef.hide();
    };
    WebPageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-webpage-list',
            template: __webpack_require__(/*! ./webpage-list.component.html */ "./src/app/admin/webpage/webpage-list/webpage-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_webpage_service__WEBPACK_IMPORTED_MODULE_4__["WebPageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], WebPageListComponent);
    return WebPageListComponent;
}());



/***/ }),

/***/ "./src/app/admin/webpage/webpage.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/webpage/webpage.module.ts ***!
  \*************************************************/
/*! exports provided: ROUTES, WebPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageModule", function() { return WebPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webpage-list/webpage-list.component */ "./src/app/admin/webpage/webpage-list/webpage-list.component.ts");
/* harmony import */ var _webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webpage-detail/webpage-detail.component */ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts");
/* harmony import */ var _shared_webpage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/webpage.service */ "./src/app/admin/webpage/shared/webpage.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/shared.module */ "./src/app/_shared/shared.module.ts");









var ROUTES = [
    {
        path: '',
        children: [
            { path: 'list', component: _webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_5__["WebPageListComponent"] },
            { path: 'add', component: _webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_6__["WebPageDetailComponent"] },
            { path: 'edit/:id', component: _webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_6__["WebPageDetailComponent"] },
        ],
    },
];
var WebPageModule = /** @class */ (function () {
    function WebPageModule() {
    }
    WebPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)
            ],
            declarations: [
                _webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_5__["WebPageListComponent"],
                _webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_6__["WebPageDetailComponent"]
            ],
            providers: [_shared_webpage_service__WEBPACK_IMPORTED_MODULE_7__["WebPageService"]]
        })
    ], WebPageModule);
    return WebPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=webpage-webpage-module.js.map