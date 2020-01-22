(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"],{

/***/ "./src/app/configuration/access-control-list/access-control-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/configuration/access-control-list/access-control-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table *ngIf=\"claims\" class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"text-sm-left\">Claim</th>\r\n            <th *ngFor=\"let role of claims.availableRoles\">{{role.name}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let claim of claims.availableClaims\">\r\n            <td class=\"text-sm-left\">{{claim.claimValue}}</td>\r\n            <td *ngFor=\"let r of claims.availableRoles\">\r\n                <input type=\"checkbox\"\r\n                    [(ngModel)]=\"claims.allowed[toLowerFirstChar(claim.claimValue)][toLowerFirstChar(r.name)]\">\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<div class=\"col text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Save</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/configuration/access-control-list/access-control-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/configuration/access-control-list/access-control-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: AccessControlListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlListComponent", function() { return AccessControlListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-control.service */ "./src/app/configuration/access-control-list/access-control.service.ts");
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
            template: __webpack_require__(/*! ./access-control-list.component.html */ "./src/app/configuration/access-control-list/access-control-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AccessControlListComponent);
    return AccessControlListComponent;
}());



/***/ }),

/***/ "./src/app/configuration/access-control-list/access-control.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/configuration/access-control-list/access-control.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AccessControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlService", function() { return AccessControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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

/***/ "./src/app/configuration/configuration-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuration/configuration-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function() { return ConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-control-list/access-control-list.component */ "./src/app/configuration/access-control-list/access-control-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./install/install.component */ "./src/app/configuration/install/install.component.ts");





var routes = [
    { path: 'acl', component: _access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_2__["AccessControlListComponent"] },
    { path: 'install', component: _install_install_component__WEBPACK_IMPORTED_MODULE_4__["InstallComponent"] }
];
var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration-routing.module */ "./src/app/configuration/configuration-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-control-list/access-control-list.component */ "./src/app/configuration/access-control-list/access-control-list.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./install/install.component */ "./src/app/configuration/install/install.component.ts");






var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _access_control_list_access_control_list_component__WEBPACK_IMPORTED_MODULE_4__["AccessControlListComponent"],
                _install_install_component__WEBPACK_IMPORTED_MODULE_5__["InstallComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigurationRoutingModule"]
            ]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ }),

/***/ "./src/app/configuration/install/install.component.html":
/*!**************************************************************!*\
  !*** ./src/app/configuration/install/install.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  install works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/configuration/install/install.component.ts":
/*!************************************************************!*\
  !*** ./src/app/configuration/install/install.component.ts ***!
  \************************************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _install_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install.service */ "./src/app/configuration/install/install.service.ts");



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
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/configuration/install/install.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_install_service__WEBPACK_IMPORTED_MODULE_2__["InstallService"]])
    ], InstallComponent);
    return InstallComponent;
}());



/***/ }),

/***/ "./src/app/configuration/install/install.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuration/install/install.service.ts ***!
  \**********************************************************/
/*! exports provided: InstallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallService", function() { return InstallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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



/***/ })

}]);
//# sourceMappingURL=configuration-configuration-module.js.map