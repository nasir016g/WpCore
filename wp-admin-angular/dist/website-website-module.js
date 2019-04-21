(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["website-website-module"],{

/***/ "./src/app/website/page/page.component.html":
/*!**************************************************!*\
  !*** ./src/app/website/page/page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page {{webPage.virtualPath}}!\n</p>\n\n<!-- <div *ngFor=\"let section in webPage\">\n  \n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/website/page/page.component.ts":
/*!************************************************!*\
  !*** ./src/app/website/page/page.component.ts ***!
  \************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _shared_webpage_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/webpage.model */ "./src/app/website/page/shared/webpage.model.ts");





var PageComponent = /** @class */ (function () {
    function PageComponent(activatedRoute, router, webPageService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.webPageService = webPageService;
        this.webPage = new _shared_webpage_model__WEBPACK_IMPORTED_MODULE_4__["WebPage"]();
        // https://stackoverflow.com/questions/49407730/angular-2-constructor-and-ngoninit-not-getting-called-if-route-is-manipulated-u
        this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            _this.ngOnInit();
        });
    }
    PageComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot.params['id']) {
            var virtualPath = this.activatedRoute.snapshot.params['id'];
            this.getWebPage(virtualPath);
        }
    };
    PageComponent.prototype.getWebPage = function (virtualPath) {
        var _this = this;
        this.webPageService.getPageByVirtualPath(virtualPath).subscribe(function (x) {
            _this.webPage = x;
            _this.pageName = x.virtualPath;
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/website/page/page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["WebPageService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/website/page/shared/webpage.model.ts":
/*!******************************************************!*\
  !*** ./src/app/website/page/shared/webpage.model.ts ***!
  \******************************************************/
/*! exports provided: WebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPage", function() { return WebPage; });
var WebPage = /** @class */ (function () {
    function WebPage() {
    }
    return WebPage;
}());



/***/ }),

/***/ "./src/app/website/website.module.ts":
/*!*******************************************!*\
  !*** ./src/app/website/website.module.ts ***!
  \*******************************************/
/*! exports provided: ROUTES, WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/website/page/page.component.ts");





var ROUTES = [
    {
        path: '',
        children: [
            { path: 'page/:id', component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"] }
        ]
    },
];
var WebsiteModule = /** @class */ (function () {
    function WebsiteModule() {
    }
    WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)
            ]
        })
    ], WebsiteModule);
    return WebsiteModule;
}());



/***/ })

}]);
//# sourceMappingURL=website-website-module.js.map