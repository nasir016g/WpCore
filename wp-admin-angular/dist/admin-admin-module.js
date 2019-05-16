(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/app/_services/excelService.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/excelService.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService(httpClient) {
        this.httpClient = httpClient;
    }
    ExcelService.prototype.exportExcel = function (excelFileName) {
        var _this = this;
        this.getExcelFromServer()
            .subscribe(function (blob) {
            _this.saveAsExcelFile(blob, excelFileName);
        }, function (response) {
            console.log("POST in error", response);
        }, function () {
            console.log("POST observable is now completed.");
        });
        ;
    };
    ExcelService.prototype.getExcelFromServer = function () {
        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json'
        // });
        return this.httpClient.get('https://localhost:5001/api/admin/webpage/download', {
            // headers: headers, 
            responseType: 'blob'
        });
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: ROUTES, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webpage/webpage-list/webpage-list.component */ "./src/app/admin/webpage/webpage-list/webpage-list.component.ts");
/* harmony import */ var _webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webpage/webpage-detail/webpage-detail.component */ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _services_excelService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/excelService */ "./src/app/_services/excelService.ts");









var ROUTES = [
    {
        path: 'webpage',
        children: [
            { path: 'list', component: _webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_4__["WebPageListComponent"] },
            { path: 'add', component: _webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_5__["WebPageDetailComponent"] },
            { path: 'edit/:id', component: _webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_5__["WebPageDetailComponent"] },
        ],
    },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
            ],
            declarations: [
                _webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_4__["WebPageListComponent"],
                _webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_5__["WebPageDetailComponent"],
            ],
            providers: [_services_excelService__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/webpage/shared/admin-webpage.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/webpage/shared/admin-webpage.model.ts ***!
  \*************************************************************/
/*! exports provided: BaseModel, AdminWebPage, WebPageRoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWebPage", function() { return AdminWebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageRoleModel", function() { return WebPageRoleModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.id = -1;
    }
    return BaseModel;
}());

var AdminWebPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdminWebPage, _super);
    function AdminWebPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminWebPage;
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

module.exports = "<h1>Page details</h1>\r\n<hr>\r\n\r\n\r\n<form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit()\">\r\n    <tabset>\r\n        <tab heading=\"General\">\r\n            <div class=\"form-group row \">\r\n                <label for=\"virtualPath\" class=\"col-md-2 col-form-label\">Virtual path</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"virtualPath\" id=\"virtualPath\">\r\n                    <control-messages [control]=\"form.controls.virtualPath\"></control-messages>\r\n                </div>\r\n                <div class=\"col-md-2\">       \r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-md-2 col-form-label\">Navigation Name</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"navigationName\">\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <control-messages [control]=\"form.controls.navigationName\"></control-messages>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"visible\" class=\"col-md-2 col-form-label\">displayOrder</label>\r\n                <div class=\"col-md-2\">\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"displayOrder\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"visible\" class=\"col-md-2 col-form-label\">Visible</label>\r\n                <div class=\"col-md-4 pt-3\">\r\n                    <input type=\"checkbox\" class=\"float-left\" formControlName=\"visible\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"allowAnonymousAccess\" class=\"col-md-2 col-form-label\">AllowAnonymousAccess</label>\r\n                <div class=\"col-md-4 pt-3\">\r\n                    <input type=\"checkbox\" class=\"float-left\" formControlName=\"allowAnonymousAccess\">\r\n                </div>\r\n            </div>\r\n        </tab>\r\n        <tab heading=\"Meta's\">\r\n            <div class=\"row\">\r\n                <div calss=\"col-md-6\">\r\n                        <div class=\"form-group row\">\r\n                \r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Title</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaTitle\">\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class=\"form-group row\">\r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Description</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaDescription\">\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class=\"form-group row\">\r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Keywords</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaKeywords\">\r\n                                </div>\r\n                            </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                        <div class=\"form-group row\">\r\n                \r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Title</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaTitle\">\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class=\"form-group row\">\r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Description</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaDescription\">\r\n                                </div>\r\n                            </div>\r\n                \r\n                            <div class=\"form-group row\">\r\n                                <label for=\"\" class=\"col-md-4 col-form-label\">Meta Keywords</label>\r\n                                <div class=\"col-md-8\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"metaKeywords\">\r\n                                </div>\r\n                            </div>\r\n                </div>\r\n\r\n            </div>\r\n           \r\n        </tab>\r\n        <tab heading=\"Sections\"></tab>\r\n    </tabset>\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-10 text-left\">\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Back to list\" (click)=\"cancel()\">\r\n\r\n        </div>\r\n    </div>\r\n</form>"

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
/* harmony import */ var _shared_admin_webpage_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/admin-webpage.model */ "./src/app/admin/webpage/shared/admin-webpage.model.ts");
/* harmony import */ var _shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/admin-webpage.service */ "./src/app/admin/webpage/shared/admin-webpage.service.ts");







var WebPageDetailComponent = /** @class */ (function () {
    function WebPageDetailComponent(formBuilder, activatedRoute, router, alertService, pageService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertService = alertService;
        this.pageService = pageService;
        this.model = new _shared_admin_webpage_model__WEBPACK_IMPORTED_MODULE_5__["AdminWebPage"]();
        if (this.activatedRoute.snapshot.params['id']) {
            this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
        }
        this.buildForm(this.formBuilder);
    }
    WebPageDetailComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            id: this.model.id,
            virtualPath: [this.model.virtualPath, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
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
            }, function (error) { return _this.alertService.danger(error); });
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
            _shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_6__["AdminWebpageService"]])
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

module.exports = "\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Are you sure you want to delet?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <div class=\"alert-danger\">{{errorMessage}}</div> -->\r\n<table class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>Virtual path</th>\r\n            <th>Navigation name</th>\r\n            <th>  <button class=\"btn btn-success btn-circle\" \r\n                [routerLink]=\"['/admin/webpage/add']\"          \r\n                      title=\"Add Web Page\">\r\n                      <i class=\"fa fa-plus\"></i> \r\n              </button> </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let wp of webpages\">\r\n            <td>{{wp.id}}</td>\r\n            <td>{{wp.virtualPath}}</td>\r\n            <td>{{wp.navigationName}}</td>           \r\n            <td style=\"width: 70px;\">               \r\n                   <a [routerLink]=\"['/admin/webpage/edit', wp.id]\"> <i class=\"fa fa-edit pointer\"></i></a>                  \r\n                  <i class=\"fa fa-trash pointer\"    \r\n                    (click)=\"delete(webpage, template)\" title=\"Delete\"></i>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" (click)=\"downloadFile()\"><i class=\"fa fa-file-excel-o\"></i> Download</button>\r\n"

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
/* harmony import */ var _shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/admin-webpage.service */ "./src/app/admin/webpage/shared/admin-webpage.service.ts");
/* harmony import */ var _services_excelService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/excelService */ "./src/app/_services/excelService.ts");





var WebPageListComponent = /** @class */ (function () {
    function WebPageListComponent(pageService, modalService, excelService) {
        this.pageService = pageService;
        this.modalService = modalService;
        this.excelService = excelService;
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
        this.pageService.delete(this.deletingPage.id).subscribe(function () {
            _this.getAll();
        });
        this.modalRef.hide();
    };
    WebPageListComponent.prototype.decline = function () {
        this.deletingPage = null;
        this.modalRef.hide();
    };
    WebPageListComponent.prototype.downloadFile = function () {
        this.excelService.exportExcel('sample-from-server');
    };
    WebPageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-webpage-list',
            template: __webpack_require__(/*! ./webpage-list.component.html */ "./src/app/admin/webpage/webpage-list/webpage-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_3__["AdminWebpageService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _services_excelService__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]])
    ], WebPageListComponent);
    return WebPageListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map