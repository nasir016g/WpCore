(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/expense/expense.module": [
		"./src/app/admin/expense/expense.module.ts",
		"admin-expense-expense-module"
	],
	"./admin/webpage/webpage.module": [
		"./src/app/admin/webpage/webpage.module.ts",
		"admin-webpage-webpage-module"
	],
	"./configuration/configuration.module": [
		"./src/app/configuration/configuration.module.ts",
		"configuration-configuration-module"
	],
	"./security/security.module": [
		"./src/app/security/security.module.ts",
		"security-security-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/account/login.component.ts");




var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/account/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenService;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(url, { Email: username, Password: password }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            var token = user && user.token;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/account/login.component.html":
/*!**********************************************!*\
  !*** ./src/app/account/login.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-4 offset-sm-4 text-center\">\r\n\t\t<img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n\t\t<h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n\t\t<select class=\"form-control\" (change)= \"onChange($event.target.value)\">\r\n\t\t\t<option>Select a tenant</option>\t\t\t\r\n\t\t\t<option *ngFor=\"let tenant of tenants\" [selected]=\"tenantName == tenant.tenantName\"  value={{tenant.tenantName}}>{{tenant.tenantName}}</option>\r\n\t\t</select>\r\n\r\n\t\t<form (submit)=\"loginUser()\" class=\"form-signin\">\r\n\r\n\t\t\t<label for=\"username\" class=\"sr-only\">User name</label>\r\n\t\t\t<input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User name\"\r\n\t\t\t\trequired autofocus>\r\n\t\t\t<label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n\t\t\t\trequired>\r\n\t\t\t<div class=\"checkbox mb-3\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/login.component.ts":
/*!********************************************!*\
  !*** ./src/app/account/login.component.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/account/authentication.service.ts");
/* harmony import */ var _admin_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/tenant/tenant.service */ "./src/app/admin/tenant/tenant.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auhenticationService, tenantService, alertService) {
        this.router = router;
        this.auhenticationService = auhenticationService;
        this.tenantService = tenantService;
        this.alertService = alertService;
        this.tenants = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantName = localStorage.getItem('tenantName');
        this.tenantService.getAll().subscribe(function (data) { return _this.tenants = data; }, function (err) {
            _this.alertService.danger(err);
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log(this.tenants);
        this.auhenticationService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result === true) {
                //window.location.href = "#";
                _this.router.navigate(['admin/webpage/list']);
            }
            else {
                // login failed
                _this.alertService.danger('Username or password is incorrect');
            }
        });
    };
    LoginComponent.prototype.onChange = function (tenantName) {
        localStorage.setItem('tenantName', tenantName);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/account/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _admin_tenant_tenant_service__WEBPACK_IMPORTED_MODULE_4__["TenantService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/tenant/tenant.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/tenant/tenant.service.ts ***!
  \************************************************/
/*! exports provided: TenantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantService", function() { return TenantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_serviceBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/serviceBase */ "./src/app/shared/services/serviceBase.ts");





var TenantService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TenantService, _super);
    function TenantService(http) {
        var _this = _super.call(this, 'admin/tenant/') || this;
        _this.http = http;
        return _this;
    }
    TenantService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_super.prototype.errorHandler));
    };
    TenantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TenantService);
    return TenantService;
}(_shared_services_serviceBase__WEBPACK_IMPORTED_MODULE_4__["ServiceBase"]));



/***/ }),

/***/ "./src/app/admin/webpage/webpage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/webpage/webpage.service.ts ***!
  \**************************************************/
/*! exports provided: WebpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpageService", function() { return WebpageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_serviceBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/serviceBase */ "./src/app/shared/services/serviceBase.ts");





var WebpageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebpageService, _super);
    function WebpageService(http) {
        var _this = _super.call(this, 'admin/webpage/') || this;
        _this.http = http;
        return _this;
    }
    WebpageService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    WebpageService.prototype.getPageById = function (id) {
        return this.http.get(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    WebpageService.prototype.delete = function (id) {
        return this.http.delete(this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    WebpageService.prototype.save = function (t) {
        var model = t;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-type', 'application/json');
        if (model.id > 0) {
            //edit
            return this.http.put(this.url + model.id, JSON.stringify(model), {
                headers: headers,
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
        else {
            // new      
            return this.http.post(this.url, JSON.stringify(model), {
                headers: headers,
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
    };
    WebpageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebpageService);
    return WebpageService;
}(_shared_services_serviceBase__WEBPACK_IMPORTED_MODULE_4__["ServiceBase"]));



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _shared_interceptors_tenant_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/interceptors/tenant.interceptor */ "./src/app/shared/interceptors/tenant.interceptor.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/interceptors/authorization.interceptor */ "./src/app/shared/interceptors/authorization.interceptor.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_14__["AccountModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000 }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true, },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_tenant_interceptor__WEBPACK_IMPORTED_MODULE_11__["TenantInterceptor"], multi: true, },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthorizationInterceptor"], multi: true, }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _account_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/login.component */ "./src/app/account/login.component.ts");



var ROUTES = [
    { path: 'login', component: _account_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'admin/webpage', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], loadChildren: './admin/webpage/webpage.module#WebpageModule' },
    { path: 'admin/expense', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], loadChildren: './admin/expense/expense.module#ExpenseModule' },
    { path: 'security', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], loadChildren: './security/security.module#SecurityModule' },
    { path: 'config', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], loadChildren: './configuration/configuration.module#ConfigurationModule' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['']\">WpCore </a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\r\n      aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- admin -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['admin/webpage/list']\"><i class=\"fa fa-bars\"></i> webpages</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['admin/expense/list']\"><i class=\"fa fa-money\"></i> expenses</a>\r\n        </li>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-link\" aria-controls=\"dropdown-basic\">\r\n            <i class=\"fa fa-lock\"></i> Security <span class=\"caret\"></span>\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['security/roles']\">Roles</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['security/users']\">Users</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-link\" aria-controls=\"dropdown-basic\">\r\n            <i class=\"fa fa-cogs\"></i> Configuration <span class=\"caret\"></span>\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['config/acl']\">Access control list</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['config/install']\">Install</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">About</a>\r\n        </li> -->\r\n      </ul>\r\n      <!-- <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"https://github.com/nasir016g\">\r\n              <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form> -->\r\n    </div>\r\n\r\n    <a class=\"ml-auto\" href=\"http://localhost:9000\">Go to website</a>\r\n\r\n    <!-- login -->\r\n    <div *ngIf=\"isAuthenticated\">\r\n      <a [routerLink]=\"\" class=\"nav-link m-2\" (click)=\"logout($event)\">Logout</a>\r\n    </div>\r\n    <div *ngIf=\"!isAuthenticated\">\r\n      <a [routerLink]=\"['login']\" class=\" nav-link m-2\">Login</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/authentication.service */ "./src/app/account/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_webpage_webpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/webpage/webpage.service */ "./src/app/admin/webpage/webpage.service.ts");





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
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_webpage_webpage_service__WEBPACK_IMPORTED_MODULE_4__["WebpageService"], _account_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
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

/***/ "./src/app/shared/components/modals/confirm-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/modals/confirm-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n  <h4 class=\"modal-title\">Delete</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div> -->\n  <div class=\"modal-body text-center\">\n    <p>Are you sure you want to delet?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/shared/components/modals/confirm-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/modals/confirm-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



//import { EventEmitter } from 'events';
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.confirm = function () {
        this.confirmEvent.emit(true);
        this.bsModalRef.hide();
    };
    ConfirmModalComponent.prototype.decline = function () {
        this.confirmEvent.emit(false);
        this.bsModalRef.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ConfirmModalComponent.prototype, "confirmEvent", void 0);
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/components/modals/confirm-modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/authorization.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/interceptors/authorization.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: AuthorizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationInterceptor", function() { return AuthorizationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/authentication.service */ "./src/app/account/authentication.service.ts");



var AuthorizationInterceptor = /** @class */ (function () {
    function AuthorizationInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AuthorizationInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.authenticationService.token
            }
        });
        return next.handle(req);
    };
    AuthorizationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_account_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthorizationInterceptor);
    return AuthorizationInterceptor;
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
/* harmony import */ var _account_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../account/authentication.service */ "./src/app/account/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");







var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, alertService, router) {
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authenticationService.logout();
                _this.router.navigate(['/login']);
                //   location.reload(true);
            }
            // const error = err.error || err.statusText;
            if (typeof err.error === 'string' || err.error instanceof String) {
                _this.alertService.danger(err.error);
            }
            else {
                for (var fieldName in err.error) {
                    _this.alertService.danger(err.error[fieldName]);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_account_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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
        var tenantName = localStorage.getItem('tenantName');
        if (tenantName) {
            req = req.clone({
                setHeaders: {
                    'Tenant': tenantName
                }
            });
        }
        return next.handle(req);
    };
    TenantInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TenantInterceptor);
    return TenantInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/serviceBase.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/serviceBase.ts ***!
  \************************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


var ServiceBase = /** @class */ (function () {
    /**
     *
     */
    function ServiceBase(urlPath) {
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + urlPath;
    }
    ServiceBase.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error || 'Internal server error');
    };
    return ServiceBase;
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
/* harmony import */ var _components_control_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/control-messages.component */ "./src/app/shared/components/control-messages.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _components_modals_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/confirm-modal.component */ "./src/app/shared/components/modals/confirm-modal.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ],
            declarations: [
                _components_control_messages_component__WEBPACK_IMPORTED_MODULE_2__["ControlMessagesComponent"],
                _components_modals_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"]
            ],
            entryComponents: [
                _components_modals_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _components_control_messages_component__WEBPACK_IMPORTED_MODULE_2__["ControlMessagesComponent"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            ]
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

module.exports = __webpack_require__(/*! C:\Git\WpCore\wp-be\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map