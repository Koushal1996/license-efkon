(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-pssword/forget-pssword.component */ "./src/app/forget-pssword/forget-pssword.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");








const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'forget', component: _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPsswordComponent"] },
    { path: 'main', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("common"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/main/main.module.ts")).then(m => m.MainModule) },
    { path: 'user', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/user/user.module.ts")).then(m => m.UserModule) },
    { path: 'reviewer', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | reviewer-reviewer-module */[__webpack_require__.e("common"), __webpack_require__.e("reviewer-reviewer-module")]).then(__webpack_require__.bind(null, /*! ./reviewer/reviewer.module */ "./src/app/reviewer/reviewer.module.ts")).then(m => m.ReviewerModule) },
    { path: 'approver', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | approver-approver-module */[__webpack_require__.e("common"), __webpack_require__.e("approver-approver-module")]).then(__webpack_require__.bind(null, /*! ./approver/approver.module */ "./src/app/approver/approver.module.ts")).then(m => m.ApproverModule) },
    { path: '**', component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Ifcon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _main_create_project_create_project_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/create-project/create-project-service.service */ "./src/app/main/create-project/create-project-service.service.ts");
/* harmony import */ var _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forget-pssword/forget-pssword.component */ "./src/app/forget-pssword/forget-pssword.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_authguard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthguardGuard"], _main_create_project_create_project_service_service__WEBPACK_IMPORTED_MODULE_8__["CreateProjectServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPsswordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPsswordComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [_authguard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthguardGuard"], _main_create_project_create_project_service_service__WEBPACK_IMPORTED_MODULE_8__["CreateProjectServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authguard.guard.ts":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthguardGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (window.localStorage.getItem('UserId') != null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) { return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardGuard, factory: AuthguardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forget-pssword/forget-pssword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forget-pssword/forget-pssword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgetPsswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPsswordComponent", function() { return ForgetPsswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function ForgetPsswordComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Id required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPsswordComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPsswordComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgetPsswordComponent {
    constructor() {
        this.loginModel = {};
    }
    ngOnInit() {
    }
    onSubmit() {
    }
}
ForgetPsswordComponent.ɵfac = function ForgetPsswordComponent_Factory(t) { return new (t || ForgetPsswordComponent)(); };
ForgetPsswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPsswordComponent, selectors: [["app-forget-pssword"]], decls: 31, vars: 7, consts: [[1, "password_change_forget"], [1, "signup-form"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-header"], [1, "form-group"], [2, "width", "100%"], ["type", "text", "placeholder", "User Id", "name", "User Name", "ngModel", "", "required", "", 1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["userId", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "New Password", "minlength", "5", "name", "password", "ngModel", "", "required", "", 1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["psw", "ngModel"], ["type", "password", "minlength", "5", "placeholder", "Confirm Password", "name", "Cnfpassword", "ngModel", "", "required", "", 1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["Cnfpsw", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "btttn", 3, "disabled"], [1, "form-group", "text-left"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-outline-danger"], [1, "fa", "fa-arrow-left"], [1, "text-danger"]], template: function ForgetPsswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetPsswordComponent_Template_form_ngSubmit_2_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetPsswordComponent_Template_input_ngModelChange_10_listener($event) { return ctx.loginModel.userid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgetPsswordComponent_small_12_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetPsswordComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgetPsswordComponent_small_18_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetPsswordComponent_Template_input_ngModelChange_22_listener($event) { return ctx.loginModel.Cnfpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ForgetPsswordComponent_small_24_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.userid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.Cnfpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r9.valid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  color: #999;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background-color: #fafafa;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/img/password_background.jpg);\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  margin: 0 auto;\n  padding: 30px 0;\n  text-align: center;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-top: 30px;\n  color: #999;\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin: -30px -30px 20px;\n  padding: 30px 30px 10px;\n  text-align: center;\n  background: #639bcb !important;\n  color: #fff;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 0 10px;\n  font-family: \"Pacifico\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 15px;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btttn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  background: #3491e2 !important;\n  opacity: inherit;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btttn[_ngcontent-%COMP%]:hover {\n  background: #0e6cbd !important;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1b6dd3;\n  border-color: #2873cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBzc3dvcmQvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxFZmtvbiBMYXRlc3QyXFxlZmtvbi1saWNlbmNlLWtleS9zcmNcXGFwcFxcZm9yZ2V0LXBzc3dvcmRcXGZvcmdldC1wc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JnZXQtcHNzd29yZC9mb3JnZXQtcHNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMERBQUE7QUNFSjs7QURESTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHTjs7QURGUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7QUNJWjs7QURIWTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0toQjs7QURKZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDTXBCOztBREhZO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNLaEI7O0FESmdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTXBCOztBREpnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTXBCOztBRExvQjtFQUNJLDhCQUFBO0FDT3hCOztBREpnQjtFQUNJLHFCQUFBO0FDTXBCOztBREhnQjtFQUNJLHVCQUFBO0FDS3BCOztBREhnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0twQjs7QURKb0I7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ014QiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC1wc3N3b3JkL2ZvcmdldC1wc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xyXG4gICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTMwcHggLTMwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzOWJjYiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnR0dG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ5MWUyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBlNmNiZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy12YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLW91dGxpbmUtZGFuZ2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZGQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMyODczY2Y7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImJvZHkge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9wYXNzd29yZF9iYWNrZ3JvdW5kLmpwZyk7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNjM5YmNiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIiwgc2Fucy1zZXJpZjtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0dHRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzM0OTFlMiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCAuYnR0dG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGU2Y2JkICFpbXBvcnRhbnQ7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1vdXRsaW5lLWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCAuYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjZkZDM7XG4gIGJvcmRlci1jb2xvcjogIzI4NzNjZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPsswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forget-pssword',
                templateUrl: './forget-pssword.component.html',
                styleUrls: ['./forget-pssword.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/login/login-service.service.ts ***!
  \************************************************/
/*! exports provided: LoginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServiceService", function() { return LoginServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginServiceService {
    constructor() {
    }
    Login(userId, password) {
        if (userId == 'admin' && password == '12345') {
            window.localStorage.setItem('UserId', (userId));
            window.localStorage.setItem('password', password);
            return 'admin';
        }
        else if (userId == 'user' && password == '12345') {
            window.localStorage.setItem('UserId', userId);
            window.localStorage.setItem('password', password);
            return 'user';
        }
        else if (userId == 'reviewer' && password == '12345') {
            window.localStorage.setItem('UserId', userId);
            window.localStorage.setItem('password', password);
            return 'reviewer';
        }
        else if (userId == 'approver' && password == '12345') {
            window.localStorage.setItem('UserId', userId);
            window.localStorage.setItem('password', password);
            return 'approver';
        }
        else {
            return false;
        }
    }
}
LoginServiceService.ɵfac = function LoginServiceService_Factory(t) { return new (t || LoginServiceService)(); };
LoginServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginServiceService, factory: LoginServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-service.service */ "./src/app/login/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserId or email required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.captchaMsg, "");
} }
function LoginComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
} }
class LoginComponent {
    constructor(_loginService, router, route) {
        this._loginService = _loginService;
        this.router = router;
        this.route = route;
        this.loginModel = {};
        this.loader = false;
        this.SignIn = true;
        this.captchaVAlue = false;
        this.captchaMsg = "Invalid Captcha";
        const adminCredentials = window.localStorage.getItem('UserId');
        console.log(adminCredentials);
        if (adminCredentials === 'admin') {
            this.router.navigate(['/main']);
        }
        else if (adminCredentials === 'user') {
            this.router.navigate(['/user']);
        }
        else if (adminCredentials === 'reviewer') {
            this.router.navigate(['/reviewer']);
        }
        else if (adminCredentials === 'approver') {
            this.router.navigate(['/approver']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        this.AdminreturnUrl = this.route.snapshot.queryParams['AdminreturnUrl'] || '/main';
        this.UserreturnUrl = this.route.snapshot.queryParams['UserreturnUrl'] || '/user';
        this.ResolverreturnUrl = this.route.snapshot.queryParams['ResolverreturnUrl'] || '/reviewer';
        this.ApproverReturnUsrl = this.route.snapshot.queryParams['ReviewerUserreturnUrl'] || '/approver';
        //  Reactive Form-
        this.myLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'myCaptchaValue': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.generateCaptcha();
    }
    onSubmit() {
        this.credentials = this.myLoginForm.value; // Credential where we store the formarray value
        this.userid = this.credentials.userName; // get UserId from form
        this.password = this.credentials.password; // get Password from form
        this.loader = true;
        this.SignIn = false;
        setTimeout(() => {
            var output = this._loginService.Login(this.userid, this.password);
            this.loader = false;
            this.SignIn = true;
            if (output === 'admin') {
                if (this.firstVAlue === this.code) {
                    this.router.navigate([this.AdminreturnUrl]);
                }
                else {
                    this.captchaVAlue = true;
                }
            }
            else if (output === 'user') {
                if (this.firstVAlue === this.code) {
                    this.router.navigate([this.UserreturnUrl]);
                }
                else {
                    this.captchaVAlue = true;
                }
            }
            else if (output === 'reviewer') {
                if (this.firstVAlue === this.code) {
                    this.router.navigate([this.ResolverreturnUrl]);
                }
                else {
                    this.captchaVAlue = true;
                }
            }
            else if (output === 'approver') {
                if (this.firstVAlue === this.code) {
                    this.router.navigate([this.ApproverReturnUsrl]);
                }
                else {
                    this.captchaVAlue = true;
                }
            }
            else {
                this.msg = "Invalid credentials !";
            }
        }, 2000);
    }
    // Code For Captcha
    generateCaptcha() {
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        var i;
        for (i = 0; i < 4; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var captcha = a + '' + b + '' + '' + c + '' + d + '' + e;
        this.code = captcha;
    }
    onChangeCaptcha(getCAptchaValue) {
        console.log(getCAptchaValue);
        console.log("On change value" + getCAptchaValue);
        this.firstVAlue = getCAptchaValue;
        if (getCAptchaValue != this.code) {
            this.captchaVAlue = true;
        }
        else {
            this.captchaVAlue = false;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 10, consts: [[1, "password_change_forget"], [1, "signup-form"], [3, "formGroup", "ngSubmit"], [1, "form-header"], [1, "text-danger"], [1, "form-group"], ["type", "text", "formControlName", "userName", "name", "User Name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "minlength", "5", "formControlName", "password", "name", "password", 1, "form-control"], ["src", "assets\\img\\captcha.JPG", "width", "200", "height", "50", "alt", "", 2, "position", "relative"], [2, "position", "absolute", "top", "387px", "left", "315"], ["type", "button", 1, "btn-sm", "btn-info", 2, "margin-left", "12px", 3, "click"], [1, "fa", "fa-refresh"], ["type", "text", "formControlName", "myCaptchaValue", "placeholder", "Input Captcha", 1, "form-control", "mt-2", "mr-5", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf"], ["routerLink", "/forget"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-sm", 3, "disabled"], ["class", "spinner-border spinner-border-sm ml-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "ml-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_small_12_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener($event) { return ctx.generateCaptcha(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.myCaptchaValue = $event; })("change", function LoginComponent_Template_input_change_25_listener($event) { return ctx.onChangeCaptcha(ctx.myCaptchaValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_span_26_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forget password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LoginComponent_span_33_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myLoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myLoginForm.get("userName").valid && ctx.myLoginForm.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myLoginForm.get("password").valid && ctx.myLoginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myCaptchaValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captchaVAlue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myLoginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.SignIn ? "Sign In" : "Please Wait !!!", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  color: #999;\n  font-family: \"Roboto\", sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n  margin-left: 80px;\n}\n\n.password_change_forget[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background-color: #fafafa;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/img/password_background.jpg);\n  height: 100vh;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  margin: 0 auto;\n  padding: 30px 0;\n  text-align: center;\n  height: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-top: 60px;\n  color: #999;\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin: -30px -30px 20px;\n  padding: 30px 30px 10px;\n  text-align: center;\n  background: #639bcb !important;\n  color: #fff;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  font-family: \"Pacifico\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: inline-block;\n  width: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 15px;\n  width: 100%;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  box-shadow: none;\n  width: 100%;\n  border: 1px solid #e1e1e1;\n  font-size: 14px;\n  display: inline-block;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  background: #1e85de !important;\n  border: none;\n  min-width: 150px;\n  border-radius: 3px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #0e6cbd !important;\n  box-shadow: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #0e6cbd;\n  font-size: 13px;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxFZmtvbiBMYXRlc3QyXFxlZmtvbi1saWNlbmNlLWtleS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwREFBQTtFQUNBLGFBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRVI7O0FERFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0FDR1o7O0FERlk7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNJaEI7O0FESGdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQ0twQjs7QURGWTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDSWhCOztBREhnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNLcEI7O0FESGdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0twQjs7QURIZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDS3BCOztBREpvQjtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUNNeEI7O0FESGdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDS3BCOztBREhnQjtFQUNJLHFCQUFBO0FDS3BCOztBREhnQjtFQUNJLHVCQUFBO0FDS3BCOztBRElBOztDQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTMwcHggLTMwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzOWJjYiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWU4NWRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGU2Y2JkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBMb2FkZXJcclxuXHJcbi8qXHJcblRoZSBsb2FkZXJzIHVzZSBDU1MgY3VzdG9tIHByb3BlcnRpZXMgKHZhcmlhYmxlcykgdG8gY29udHJvbCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgbG9hZGVyc1xyXG4qL1xyXG4iLCJib2R5IHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5wIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNjM5YmNiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiLCBzYW5zLXNlcmlmO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMxZTg1ZGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBlNmNiZCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgc21hbGwge1xuICBjb2xvcjogIzBlNmNiZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLypcblRoZSBsb2FkZXJzIHVzZSBDU1MgY3VzdG9tIHByb3BlcnRpZXMgKHZhcmlhYmxlcykgdG8gY29udHJvbCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgbG9hZGVyc1xuKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/create-project/create-project-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/create-project/create-project-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProjectServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectServiceService", function() { return CreateProjectServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CreateProjectServiceService {
    constructor() {
    }
}
CreateProjectServiceService.ɵfac = function CreateProjectServiceService_Factory(t) { return new (t || CreateProjectServiceService)(); };
CreateProjectServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateProjectServiceService, factory: CreateProjectServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProjectServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update Licence Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Renew Licence Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
class MainComponent {
    constructor(roter) {
        this.roter = roter;
        this.submenu = false;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#wrapper").toggleClass("toggled");
        });
    }
    logout() {
        window.localStorage.removeItem('UserId');
        window.localStorage.removeItem('password');
        this.roter.navigate(['/login']);
    }
    subMenu1() {
        this.submenu = !this.submenu;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main"]], decls: 39, vars: 3, consts: [["id", "wrapper"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "", 1, "logo"], [1, "list-group", "list-group-flush"], ["routerLink", "/main/users", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", 3, "routerLinkActiveOptions"], ["routerLink", "/main/projectDetail", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "fa", "fa-chevron-down"], [4, "ngIf"], ["routerLink", "/main/userrequest", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLink", "/main/logs", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLink", "/main/changePsw", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["id", "page-content-wrapper"], [1, "header_main"], [1, "Toggle_button"], ["id", "menu-toggle"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "manu"], ["src", "assets/img/admin.jpg", "alt", "", 1, "img-fluid", "userImage", 2, "width", "50px", "height", "50px"], ["href", "#", 2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], [1, "container-fluid"], [1, "middle-content"], [1, "dropdown_sidebar"], ["routerLinkActive", "check_menu", "routerLink", "/main/licence"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["routerLinkActive", "check_menu", "routerLink", "/main/updateLicence"], ["routerLinkActive", "check_menu", "routerLink", "/main/renewLicence"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_li_click_11_listener($event) { return ctx.subMenu1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Licence ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_div_14_Template, 12, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View Licence Key Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Manoj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_a_click_33_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #17a2b8;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.home[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 0.8;\n}\n\nh6[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  background: #17a2b8 !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #17a2b8 !important;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n    position: fixed;\n    z-index: 33;\n    margin-top: 0;\n    width: 250px;\n    height: 100%;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    width: calc(100% - 250px);\n    position: relative;\n    float: right;\n    display: inline-block;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -16rem;\n  }\n}\n\n.submenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.active1[_ngcontent-%COMP%] {\n  background: #ada8a8;\n  box-shadow: none;\n}\n\n.ml-6[_ngcontent-%COMP%] {\n  margin-left: 7rem !important;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding-bottom: 20px;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #333;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white !important;\n  background: #333 !important;\n}\n\n.middle-content[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  box-shadow: 0 0 5px #ddd;\n  padding: 10px;\n}\n\n.toggled[_ngcontent-%COMP%]   #page-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBR0EsaUNBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDRE47O0VER0U7SUFDSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDQU47O0VERUU7SUFDSSxtQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLDRCQUFBO0FDQUo7O0FESUk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0RSOztBREVRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDQVo7O0FERVE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FDQVo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRE1JO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC44O1xyXG59XHJcblxyXG5oNjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMxN2EyYjggIWltcG9ydGFudDtcclxuICAgIDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VySW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE3YTJiOCFpbXBvcnRhbnQ7XHJcbiAgICA7XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDMzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Ym1lbnUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZTEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3MywgMTY4LCAxNjgpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1sLTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXYjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50b2dnbGVkIHtcclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59IiwiYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmhvbWUge1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuaDY6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzE3YTJiOCAhaW1wb3J0YW50O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDMzO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnJlbTtcbiAgfVxufVxuLnN1Ym1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hY3RpdmUxIHtcbiAgYmFja2dyb3VuZDogI2FkYThhODtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1sLTYge1xuICBtYXJnaW4tbGVmdDogN3JlbSAhaW1wb3J0YW50O1xufVxuXG5kaXYjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG59XG5kaXYjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIC5hY3RpdmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4ubWlkZGxlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 4, vars: 0, consts: [[1, "clear_image"], ["src", "assets/img/notFound2.jpg", "alt", ""], ["routerLink", "/login", 1, "btn", "btn-outline-info"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".clear_image[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background: #ddd;\n  position: relative;\n}\n.clear_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n.clear_image[_ngcontent-%COMP%]   .btn.btn-outline-info[_ngcontent-%COMP%] {\n  float: right;\n  border: 1px solid #fff;\n  color: #fff;\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n}\n.clear_image[_ngcontent-%COMP%]   .btn.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background: #0e6cbd;\n  color: #fff;\n  border: 1px solid #0e6cbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2UvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxFZmtvbiBMYXRlc3QyXFxlZmtvbi1saWNlbmNlLWtleS9zcmNcXGFwcFxcbm90LWZvdW5kLXBhZ2VcXG5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcl9pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5idG4uYnRuLW91dGxpbmUtaW5mbyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBlNmNiZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNsZWFyX2ltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsZWFyX2ltYWdlIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2xlYXJfaW1hZ2UgLmJ0bi5idG4tb3V0bGluZS1pbmZvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmNsZWFyX2ltYWdlIC5idG4uYnRuLW91dGxpbmUtaW5mbzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwZTZjYmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jamshed Ahmad\Desktop\Efkon Latest2\efkon-licence-key\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map