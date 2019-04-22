(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["website-website-module"],{

/***/ "./src/app/website/page/page.component.html":
/*!**************************************************!*\
  !*** ./src/app/website/page/page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page {{webPage.virtualPath}}!\n</p>\n\n<!-- <div *ngFor=\"let section in webPage.sections\">\n  \n</div> -->\n\n\n"

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
    //#region ctor
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
    //#endregion
    PageComponent.prototype.getWebPage = function (virtualPath) {
        var _this = this;
        this.webPageService.getPageByVirtualPath(virtualPath).subscribe(function (x) {
            console.log(x);
            _this.webPage = x;
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/website/page/page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AdminWebPageService"]])
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

/***/ "./src/app/website/sections/html-content/html-content.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/website/sections/html-content/html-content.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvc2VjdGlvbnMvaHRtbC1jb250ZW50L2h0bWwtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/sections/html-content/html-content.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/website/sections/html-content/html-content.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  html-content works!\n</p>\n"

/***/ }),

/***/ "./src/app/website/sections/html-content/html-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/website/sections/html-content/html-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: HtmlContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlContentComponent", function() { return HtmlContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HtmlContentComponent = /** @class */ (function () {
    function HtmlContentComponent() {
    }
    HtmlContentComponent.prototype.ngOnInit = function () {
    };
    HtmlContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-html-content',
            template: __webpack_require__(/*! ./html-content.component.html */ "./src/app/website/sections/html-content/html-content.component.html"),
            styles: [__webpack_require__(/*! ./html-content.component.css */ "./src/app/website/sections/html-content/html-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HtmlContentComponent);
    return HtmlContentComponent;
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
/* harmony import */ var _sections_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/html-content/html-content.component */ "./src/app/website/sections/html-content/html-content.component.ts");






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
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"], _sections_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_5__["HtmlContentComponent"]],
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