(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "./src/app/security/role/role-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/security/role/role-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card card-body bg-light\" *ngIf=\"roles\">\r\n<form [formGroup]=\"newRoleForm\" (ngSubmit)=\"createRole()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <!-- <label class=\"control-label\" for=\"roleName\">Create new role</label> -->\r\n      <input formControlName=\"roleName\" placeholder=\"Role name\" class=\"form-control\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-secondary\">Create New Role</button>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-6\">    \r\n      \r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th class=\"text-left\">Existing Roles\r\n          </th>\r\n          <th>\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let role of roles\">\r\n          <td class=\"text-left\">\r\n            {{role.name}}\r\n          </td>\r\n          <td *ngIf=\"!role.isSystemRole\" class=\"float-right\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"deleteRole(role)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/role/role-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/security/role/role-list.component.ts ***!
  \******************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.service */ "./src/app/security/role/role.service.ts");
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
            _this.getRoles();
            _this.buildForm();
        });
    };
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/security/role/role-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/security/role/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/role/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




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

/***/ "./src/app/security/security-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/security-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/security/role/role-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/security/user/user-list.component.ts");
/* harmony import */ var _user_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-details.component */ "./src/app/security/user/user-details.component.ts");







var routes = [
    { path: 'roles', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"] },
    { path: 'users', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"] },
    { path: 'users/edit/:userName', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _user_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"] },
];
var SecurityRoutingModule = /** @class */ (function () {
    function SecurityRoutingModule() {
    }
    SecurityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SecurityRoutingModule);
    return SecurityRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/security/security-routing.module.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/security/role/role-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/security/user/user-list.component.ts");
/* harmony import */ var _user_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-details.component */ "./src/app/security/user/user-details.component.ts");







var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
                _user_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/security/user/user-details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/security/user/user-details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\r\n<div class=\"col-md-6\">\r\n  <form>\r\n    <div class=\"form-group row\">\r\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" readonly class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"roles\" class=\"col-sm-2 col-form-label\">Roles</label>\r\n      <div class=\"col-sm-2\" >\r\n\r\n        <div class=\"form-check float-left\" *ngFor=\"let role of model.roles\">\r\n         \r\n              <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"role.isChecked\" (change)=\"role.isChecked = !role.isChecked\" >{{role.name}}\r\n                </label>        \r\n          </div>  \r\n           \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-sm-4 offset-sm-2\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/security/user/user-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/security/user/user-details.component.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/security/user/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/security/user/user.service.ts");





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.model = new _user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
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
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/security/user/user-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/security/user/user-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/security/user/user-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body bg-light\" *ngIf=\"users\">\r\n  <form [formGroup]=\"newUserForm\" (ngSubmit)=\"createUser()\" class=\"form-inline\">\r\n    <div class=\"form-group\">\r\n      <!-- <label class=\"control-label\" for=\"roleName\">Create new role</label> -->\r\n      <input formControlName=\"userName\" placeholder=\"User name\" class=\"form-control\">\r\n      <input formControlName=\"password\" placeholder=\"Password\" class=\"form-control\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-secondary\">Create New Account</button>\r\n  </form>\r\n</div>\r\n<div class=\"col-md-6\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th class=\"text-left\">Name\r\n          </th>\r\n          <th>\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor=\"let user of users\">\r\n          <td class=\"text-left\">\r\n            {{user.name}}\r\n          </td>\r\n          <td class=\"float-right\">\r\n              <a [routerLink]=\"['/security/users/edit', user.name]\"> Edit</a>    \r\n            <button class=\"btn btn-link\" (click)=\"deleteUser(user)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/user/user-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/security/user/user-list.component.ts ***!
  \******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.model */ "./src/app/security/user/user.model.ts");





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
        var postedUser = new _user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
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
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/security/user/user-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/security/user/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/security/user/user.model.ts ***!
  \*********************************************/
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

/***/ "./src/app/security/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'admin/security/users';
    }
    UserService.prototype.getUsers = function () {
        console.log("get users");
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



/***/ })

}]);
//# sourceMappingURL=security-security-module.js.map