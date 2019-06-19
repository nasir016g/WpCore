(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/install/install.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/install/install.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  install works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/install/install.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/install/install.component.ts ***!
  \****************************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_install_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/install.service */ "./src/app/admin/install/shared/install.service.ts");



var InstallComponent = /** @class */ (function () {
    function InstallComponent(installService) {
        this.installService = installService;
    }
    InstallComponent.prototype.ngOnInit = function () {
        this.installData();
    };
    InstallComponent.prototype.installData = function () {
        this.installService.installData().subscribe(function () { return console.log("data installed."); });
    };
    InstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install',
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/admin/install/install.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_install_service__WEBPACK_IMPORTED_MODULE_2__["InstallService"]])
    ], InstallComponent);
    return InstallComponent;
}());



/***/ }),

/***/ "./src/app/admin/install/shared/install.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/install/shared/install.service.ts ***!
  \*********************************************************/
/*! exports provided: InstallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallService", function() { return InstallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var InstallService = /** @class */ (function () {
    function InstallService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'install';
    }
    InstallService.prototype.installData = function () {
        return this.http.get(this.url);
    };
    InstallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], InstallService);
    return InstallService;
}());



/***/ }),

/***/ "./src/app/admin/nav/nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/admin/nav/nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['']\">WpCore </a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\r\n      aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- admin -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['admin/webpage/list']\"><i class=\"fa fa-bars\"></i> webpages</a>\r\n        </li>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-link\" aria-controls=\"dropdown-basic\">\r\n            <i class=\"fa fa-lock\"></i> Security <span class=\"caret\"></span>\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['security/roles']\">Roles</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['security/users']\">Users</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-link\" aria-controls=\"dropdown-basic\">\r\n            <i class=\"fa fa-cogs\"></i> Configuration <span class=\"caret\"></span>\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['config/acl']\">Access control list</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">About</a>\r\n        </li> -->\r\n      </ul>\r\n      <!-- <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"https://github.com/nasir016g\">\r\n              <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form> -->\r\n    </div>\r\n\r\n    <a class=\"ml-auto\" href=\"http://localhost:9000\">Go to website</a>\r\n\r\n    <!-- login -->\r\n    <div *ngIf=\"isAuthenticated\">\r\n      <a [routerLink]=\"\" class=\"nav-link m-2\" (click)=\"logout($event)\">Logout</a>\r\n    </div>\r\n    <div *ngIf=\"!isAuthenticated\">\r\n      <a [routerLink]=\"['login']\" class=\" nav-link m-2\">Login</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br>"

/***/ }),

/***/ "./src/app/admin/nav/nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/admin/nav/nav.component.ts ***!
  \********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_account_shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../security/account/shared/authentication.service */ "./src/app/security/account/shared/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _webpage_shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webpage/shared/admin-webpage.service */ "./src/app/admin/webpage/shared/admin-webpage.service.ts");





var NavComponent = /** @class */ (function () {
    function NavComponent(pageService, authenticationService, router) {
        this.pageService = pageService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.webpages = [];
        this.isCollapsed = true;
        this.isAuthenticated = authenticationService.isAuthenticated();
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getNavigations();
    };
    NavComponent.prototype.getNavigations = function () {
        var _this = this;
        this.pageService.getAll().subscribe(function (res) { return _this.webpages = res; }, function (err) {
            _this.errorMessage = err.error;
        });
    };
    NavComponent.prototype.logout = function (event) {
        event.preventDefault;
        this.authenticationService.logout();
        window.location.href = "login";
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/admin/nav/nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_webpage_shared_admin_webpage_service__WEBPACK_IMPORTED_MODULE_4__["AdminWebpageService"], _security_account_shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
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

/***/ "./src/app/admin/webpage/shared/admin-webpage.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/webpage/shared/admin-webpage.service.ts ***!
  \***************************************************************/
/*! exports provided: AdminWebpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWebpageService", function() { return AdminWebpageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var AdminWebpageService = /** @class */ (function () {
    function AdminWebpageService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'admin/webpage/';
    }
    AdminWebpageService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    AdminWebpageService.prototype.getPageById = function (id) {
        return this.http.get(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    AdminWebpageService.prototype.delete = function (id) {
        return this.http.delete(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    AdminWebpageService.prototype.save = function (t) {
        var model = t;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-type', 'application/json');
        if (model.id > 0) {
            //edit
            return this.http.put(this.url + model.id, JSON.stringify(model), {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
        else {
            // new      
            return this.http.post(this.url, JSON.stringify(model), {
                headers: headers,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        }
    };
    AdminWebpageService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error || 'Internal server error');
    };
    AdminWebpageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminWebpageService);
    return AdminWebpageService;
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
/* harmony import */ var _shared_services_excelService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/excelService */ "./src/app/shared/services/excelService.ts");





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
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _shared_services_excelService__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]])
    ], WebPageListComponent);
    return WebPageListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    <!-- To show this line of text remove fixed-top from nav component -->\r\n    Welcome to {{title}}!\r\n  </h1>\r\n\r\n  <ngx-alerts></ngx-alerts>\r\n  <app-nav></app-nav>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <nav class=\"navbar fixed-bottom navbar-expand navbar-light bg-light\">\r\n    <div class=\"navbar-text m-auto\">\r\n      Made by Nasir\r\n    </div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/nav/nav.component */ "./src/app/admin/nav/nav.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");
/* harmony import */ var _security_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/role/role-list/role-list.component */ "./src/app/security/role/role-list/role-list.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_interceptors_tenant_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/tenant.interceptor */ "./src/app/shared/interceptors/tenant.interceptor.ts");
/* harmony import */ var _security_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./security/user/user-list/user-list.component */ "./src/app/security/user/user-list/user-list.component.ts");
/* harmony import */ var _security_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./security/user/user-details/user-details.component */ "./src/app/security/user/user-details/user-details.component.ts");
/* harmony import */ var _security_user_shared_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./security/user/shared/user.service */ "./src/app/security/user/shared/user.service.ts");
/* harmony import */ var _security_configuration_access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./security/configuration/access-control-list/access-control-list.component */ "./src/app/security/configuration/access-control-list/access-control-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/webpage/webpage-list/webpage-list.component */ "./src/app/admin/webpage/webpage-list/webpage-list.component.ts");
/* harmony import */ var _admin_webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/webpage/webpage-detail/webpage-detail.component */ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts");
/* harmony import */ var _admin_install_install_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/install/install.component */ "./src/app/admin/install/install.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _security_account_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./security/account/login/login.component */ "./src/app/security/account/login/login.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                //AdminModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000 }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__["TabsModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _admin_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _security_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_11__["RoleListComponent"],
                _security_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"],
                _security_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
                _security_configuration_access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_18__["AccessControlListComponent"],
                _admin_webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_20__["WebPageListComponent"],
                _admin_webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_21__["WebPageDetailComponent"],
                _admin_install_install_component__WEBPACK_IMPORTED_MODULE_22__["InstallComponent"],
                _security_account_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"]
            ],
            providers: [
                _security_user_shared_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["BaseRequestOptions"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true, },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_tenant_interceptor__WEBPACK_IMPORTED_MODULE_14__["TenantInterceptor"], multi: true, }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_account_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security/account/login/login.component */ "./src/app/security/account/login/login.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _security_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/role/role-list/role-list.component */ "./src/app/security/role/role-list/role-list.component.ts");
/* harmony import */ var _security_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/user/user-list/user-list.component */ "./src/app/security/user/user-list/user-list.component.ts");
/* harmony import */ var _security_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security/user/user-details/user-details.component */ "./src/app/security/user/user-details/user-details.component.ts");
/* harmony import */ var _security_configuration_access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security/configuration/access-control-list/access-control-list.component */ "./src/app/security/configuration/access-control-list/access-control-list.component.ts");
/* harmony import */ var _admin_webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/webpage/webpage-list/webpage-list.component */ "./src/app/admin/webpage/webpage-list/webpage-list.component.ts");
/* harmony import */ var _admin_webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/webpage/webpage-detail/webpage-detail.component */ "./src/app/admin/webpage/webpage-detail/webpage-detail.component.ts");
/* harmony import */ var _admin_install_install_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/install/install.component */ "./src/app/admin/install/install.component.ts");










var ROUTES = [
    { path: 'login', component: _security_account_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    // { path: 'admin', canActivate: [AuthGuard],  loadChildren: './admin/admin.module#AdminModule' },
    { path: 'security/roles', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], component: _security_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"] },
    { path: 'security/users', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], component: _security_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: 'security/users/edit/:userName', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], component: _security_user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"] },
    { path: 'config/acl', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], component: _security_configuration_access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_6__["AccessControlListComponent"] },
    {
        path: 'admin/webpage',
        children: [
            { path: 'list', component: _admin_webpage_webpage_list_webpage_list_component__WEBPACK_IMPORTED_MODULE_7__["WebPageListComponent"] },
            { path: 'add', component: _admin_webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_8__["WebPageDetailComponent"] },
            { path: 'edit/:id', component: _admin_webpage_webpage_detail_webpage_detail_component__WEBPACK_IMPORTED_MODULE_8__["WebPageDetailComponent"] },
        ],
    },
    { path: 'install', component: _admin_install_install_component__WEBPACK_IMPORTED_MODULE_9__["InstallComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/security/account/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/security/account/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-sm-4 offset-sm-4 text-center\">\r\n<form (submit)=\"loginUser()\" class=\"form-signin\">\r\n\t\t<img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n\t\t<h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n\t\t<label for=\"username\" class=\"sr-only\">User name</label>\r\n\t\t<input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User name\" required autofocus>\r\n\t\t<label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n\t\t<div class=\"checkbox mb-3\">\r\n\t\t  <label>\r\n\t\t\t<input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n\t\t  </label>\r\n\t\t</div>\r\n\t\t<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n\t  </form>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/security/account/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/security/account/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/authentication.service */ "./src/app/security/account/shared/authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auhenticationService) {
        this.router = router;
        this.auhenticationService = auhenticationService;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.auhenticationService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result === true) {
                window.location.href = "#";
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/account/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/account/shared/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/security/account/shared/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].tokenService;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(url, { Email: username, Password: password }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
        //use sessionStorage to logout when browser closes
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/configuration/access-control-list/access-control-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/security/configuration/access-control-list/access-control-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    access-control-list works!\r\n</p>\r\n\r\n<table *ngIf=\"claims\" class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"text-sm-left\">Claim</th>\r\n            <th *ngFor=\"let role of claims.availableRoles\">{{role.name}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let claim of claims.availableClaims\">\r\n            <td class=\"text-sm-left\">{{claim.claimValue}}</td>\r\n            <td *ngFor=\"let r of claims.availableRoles\">\r\n                <input type=\"checkbox\"\r\n                    [(ngModel)]=\"claims.allowed[toLowerFirstChar(claim.claimValue)][toLowerFirstChar(r.name)]\">\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Save</button>"

/***/ }),

/***/ "./src/app/security/configuration/access-control-list/access-control-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/security/configuration/access-control-list/access-control-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AccessControlListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlListComponent", function() { return AccessControlListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/access-control.service */ "./src/app/security/configuration/shared/access-control.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");




var AccessControlListComponent = /** @class */ (function () {
    function AccessControlListComponent(accessControlService, alertService) {
        this.accessControlService = accessControlService;
        this.alertService = alertService;
    }
    AccessControlListComponent.prototype.ngOnInit = function () {
        this.getClaims();
    };
    AccessControlListComponent.prototype.getClaims = function () {
        var _this = this;
        this.accessControlService.getClaims().subscribe(function (rez) {
            _this.claims = rez;
        });
    };
    AccessControlListComponent.prototype.update = function () {
        var _this = this;
        this.accessControlService.update(this.claims).subscribe(function (rez) {
            console.log(rez);
            _this.alertService.success('Updated successfully.');
        });
    };
    AccessControlListComponent.prototype.toLowerFirstChar = function (value) {
        return value.replace(/^\w/, function (c) { return c.toLowerCase(); });
    };
    AccessControlListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-control-list',
            template: __webpack_require__(/*! ./access-control-list.component.html */ "./src/app/security/configuration/access-control-list/access-control-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AccessControlListComponent);
    return AccessControlListComponent;
}());



/***/ }),

/***/ "./src/app/security/configuration/shared/access-control.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/security/configuration/shared/access-control.service.ts ***!
  \*************************************************************************/
/*! exports provided: AccessControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlService", function() { return AccessControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AccessControlService = /** @class */ (function () {
    function AccessControlService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'admin/security/claims';
    }
    AccessControlService.prototype.getClaims = function () {
        return this.http.get(this.url);
    };
    AccessControlService.prototype.update = function (model) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-type', 'application/json');
        return this.http.put(this.url, JSON.stringify(model), { headers: headers });
    };
    AccessControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AccessControlService);
    return AccessControlService;
}());



/***/ }),

/***/ "./src/app/security/role/role-list/role-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/security/role/role-list/role-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card card-body bg-light\" *ngIf=\"roles\">\r\n<form [formGroup]=\"newRoleForm\" (ngSubmit)=\"createRole()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <!-- <label class=\"control-label\" for=\"roleName\">Create new role</label> -->\r\n      <input formControlName=\"roleName\" placeholder=\"Role name\" class=\"form-control\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-secondary\">Create New Role</button>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-6\">    \r\n      \r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th class=\"text-left\">Existing Roles\r\n          </th>\r\n          <th>\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let role of roles\">\r\n          <td class=\"text-left\">\r\n            {{role}}\r\n          </td>\r\n          <td *ngIf=\"role !== 'Admin'\" class=\"float-right\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"deleteRole(role)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/role/role-list/role-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/security/role/role-list/role-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/role.service */ "./src/app/security/role/shared/role.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(roleService) {
        this.roleService = roleService;
    }
    RoleListComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RoleListComponent.prototype.buildForm = function () {
        this.newRoleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    RoleListComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles().subscribe(function (rez) {
            _this.roles = rez;
            _this.buildForm();
        }, function (err) {
            console.log(err.error);
        });
    };
    RoleListComponent.prototype.deleteRole = function (role) {
        var _this = this;
        this.roleService.delete(role).subscribe(function () {
            _this.getRoles();
        });
    };
    RoleListComponent.prototype.createRole = function () {
        var _this = this;
        if (!this.newRoleForm.valid) {
            return;
        }
        var postedRole = this.newRoleForm.controls['roleName'].value;
        this.roleService.create(postedRole).subscribe(function (rez) {
            _this.roles.push(postedRole);
            _this.buildForm();
        });
    };
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/security/role/role-list/role-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/security/role/shared/role.service.ts":
/*!******************************************************!*\
  !*** ./src/app/security/role/shared/role.service.ts ***!
  \******************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'admin/security/roles';
    }
    RoleService.prototype.getRoles = function () {
        return this.http.get(this.url);
    };
    RoleService.prototype.delete = function (role) {
        return this.http.delete(this.url + '/' + role);
    };
    RoleService.prototype.create = function (roleName) {
        return this.http.post(this.url + '/' + roleName, null);
        // const headers = new HttpHeaders().set('Content-type', 'application/json');
        // return this.http.post(this.url, JSON.stringify(roleName)
        //   , {headers: headers  }
        //  )
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/security/user/shared/user.model.ts":
/*!****************************************************!*\
  !*** ./src/app/security/user/shared/user.model.ts ***!
  \****************************************************/
/*! exports provided: UserModel, RoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());

var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    return RoleModel;
}());



/***/ }),

/***/ "./src/app/security/user/shared/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/security/user/shared/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'admin/security/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.getUserByName = function (userName) {
        return this.http.get(this.url + '/' + userName);
    };
    UserService.prototype.delete = function (userName) {
        return this.http.delete(this.url + '/' + userName);
    };
    UserService.prototype.create = function (userModel) {
        //return this.http.post(this.url + '/' + roleName, null);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-type', 'application/json');
        return this.http.post(this.url, JSON.stringify(userModel), { headers: headers });
    };
    UserService.prototype.update = function (userModel) {
        //return this.http.post(this.url + '/' + roleName, null);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-type', 'application/json');
        return this.http.post(this.url, JSON.stringify(userModel), { headers: headers });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/security/user/user-details/user-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/security/user/user-details/user-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-details works!\r\n</p>\r\n\r\n<div class=\"col-md-6\">\r\n  <form>\r\n    <div class=\"form-group row\">\r\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" readonly class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"roles\" class=\"col-sm-2 col-form-label\">Roles</label>\r\n      <div class=\"col-sm-4\" >\r\n        <div class=\"form-check float-left\" *ngFor=\"let role of model.roles\">\r\n            <label class=\"form-check-label\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"role.isChecked\" (change)=\"role.isChecked = !role.isChecked\" >{{role.name}}\r\n              </label>\r\n          <!-- <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" class=\"form-check-input\"  [(checked)]=\"role.isChecked\" >{{role.name}}\r\n          </label> -->\r\n        </div>        \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-4 offset-sm-2\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/security/user/user-details/user-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/security/user/user-details/user-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.model */ "./src/app/security/user/shared/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/security/user/shared/user.service.ts");





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.model = new _shared_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        if (this.activatedRoute.snapshot.params['userName']) {
            this.model.name = this.activatedRoute.snapshot.params['userName'];
        }
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailsComponent.prototype.getUser = function () {
        var _this = this;
        if (this.model.name != null) {
            // edit
            this.userService.getUserByName(this.model.name)
                .subscribe(function (rez) {
                _this.model = rez;
            }, function (error) { return console.log(error); });
        }
    };
    UserDetailsComponent.prototype.update = function () {
        var _this = this;
        console.log(this.model);
        this.userService.update(this.model).subscribe(function (rez) {
            _this.getUser();
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/security/user/user-details/user-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/security/user/user-list/user-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/security/user/user-list/user-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body bg-light\" *ngIf=\"users\">\r\n  <form [formGroup]=\"newUserForm\" (ngSubmit)=\"createUser()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <!-- <label class=\"control-label\" for=\"roleName\">Create new role</label> -->\r\n      <input formControlName=\"userName\" placeholder=\"User name\" class=\"form-control\">\r\n      <input formControlName=\"password\" placeholder=\"Password\" class=\"form-control\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-secondary\">Create New Account</button>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-6\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th class=\"text-left\">Name\r\n          </th>\r\n          <th>\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let user of users\">\r\n          <td class=\"text-left\">\r\n            {{user.name}}\r\n          </td>\r\n          <td class=\"float-right\">\r\n              <a [routerLink]=\"['/security/users/edit', user.name]\"> Edit</a>    \r\n            <button class=\"btn btn-link\" (click)=\"deleteUser(user)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/user/user-list/user-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/security/user/user-list/user-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/security/user/shared/user.service.ts");
/* harmony import */ var _shared_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user.model */ "./src/app/security/user/shared/user.model.ts");





var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.buildForm = function () {
        this.newUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (rez) {
            _this.users = rez;
            _this.buildForm();
        }, function (err) {
            console.log(err.error);
        });
    };
    UserListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.delete(user.name).subscribe(function () {
            _this.getUsers();
        });
    };
    UserListComponent.prototype.createUser = function () {
        var _this = this;
        if (!this.newUserForm.valid) {
            return;
        }
        var postedUser = new _shared_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        postedUser.name = this.newUserForm.controls['userName'].value;
        postedUser.password = this.newUserForm.controls['password'].value;
        this.userService.create(postedUser).subscribe(function (rez) {
            _this.users.push(postedUser);
            _this.buildForm();
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/security/user/user-list/user-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/control-messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/control-messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validation.service */ "./src/app/shared/services/validation.service.ts");




var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var validatorName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(validatorName) && this.control.touched) {
                    return _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'control-messages',
            template: "<div class=\"error float-left\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _security_account_shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/account/shared/authentication.service */ "./src/app/security/account/shared/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_account_shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/tenant.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/tenant.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: TenantInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantInterceptor", function() { return TenantInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TenantInterceptor = /** @class */ (function () {
    function TenantInterceptor() {
    }
    TenantInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                'Tenant': 'WpCore2'
            }
        });
        return next.handle(req);
    };
    TenantInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TenantInterceptor);
    return TenantInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/excelService.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/excelService.ts ***!
  \*************************************************/
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

/***/ "./src/app/shared/services/validation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/validation.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': "Required",
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Please enter atleast " + validatorValue.requiredLength + " characters"
        };
        return config[validatorName];
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _services_excelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/excelService */ "./src/app/shared/services/excelService.ts");
/* harmony import */ var _components_control_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/control-messages.component */ "./src/app/shared/components/control-messages.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
            declarations: [_components_control_messages_component__WEBPACK_IMPORTED_MODULE_4__["ControlMessagesComponent"],],
            providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_excelService__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]],
            exports: [_components_control_messages_component__WEBPACK_IMPORTED_MODULE_4__["ControlMessagesComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // apiUrl: 'http://localhost:59734/api/',
    apiUrl: 'https://localhost:5001/api/',
    // apiUrl: 'http://wpcorelocal/api/',
    tokenService: 'token'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Tutorials\_git\WpCore\wp-be\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map