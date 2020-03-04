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
/* harmony import */ var _main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/not-found-page/not-found-page.component */ "./src/app/main/not-found-page/not-found-page.component.ts");








const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'forget', component: _forget_pssword_forget_pssword_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPsswordComponent"] },
    { path: 'main', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("common"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/main/main.module.ts")).then(m => m.MainModule) },
    { path: 'user', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/user/user.module.ts")).then(m => m.UserModule) },
    { path: 'reviewer', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | reviewer-reviewer-module */[__webpack_require__.e("common"), __webpack_require__.e("reviewer-reviewer-module")]).then(__webpack_require__.bind(null, /*! ./reviewer/reviewer.module */ "./src/app/reviewer/reviewer.module.ts")).then(m => m.ReviewerModule) },
    { path: 'approver', canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuard"]], loadChildren: () => Promise.all(/*! import() | approver-approver-module */[__webpack_require__.e("common"), __webpack_require__.e("approver-approver-module")]).then(__webpack_require__.bind(null, /*! ./approver/approver.module */ "./src/app/approver/approver.module.ts")).then(m => m.ApproverModule) },
    { path: '**', component: _main_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"] },
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
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.userid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.Cnfpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  color: #999;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background-color: #fafafa;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/img/password_background.jpg);\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  margin: 0 auto;\n  padding: 30px 0;\n  text-align: center;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-top: 30px;\n  color: #999;\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin: -30px -30px 20px;\n  padding: 30px 30px 10px;\n  text-align: center;\n  background: #639bcb !important;\n  color: #fff;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 0 10px;\n  font-family: \"Pacifico\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 15px;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btttn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  background: #3491e2 !important;\n  opacity: inherit;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btttn[_ngcontent-%COMP%]:hover {\n  background: #0e6cbd !important;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1b6dd3;\n  border-color: #2873cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBzc3dvcmQvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXGZvcmdldC1wc3N3b3JkXFxmb3JnZXQtcHNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ2V0LXBzc3dvcmQvZm9yZ2V0LXBzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBEQUFBO0FDRUo7O0FEREk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR047O0FERlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0FDSVo7O0FESFk7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNLaEI7O0FESmdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ01wQjs7QURIWTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDS2hCOztBREpnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ01wQjs7QURKZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ01wQjs7QURMb0I7RUFDSSw4QkFBQTtBQ094Qjs7QURKZ0I7RUFDSSxxQkFBQTtBQ01wQjs7QURIZ0I7RUFDSSx1QkFBQTtBQ0twQjs7QURIZ0I7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNLcEI7O0FESm9CO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNNeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQtcHNzd29yZC9mb3JnZXQtcHNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3Bhc3N3b3JkX2JhY2tncm91bmQuanBnKTtcclxuICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIC5mb3JtLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0zMHB4IC0zMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MzliY2IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0dHRuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0OTFlMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNmRkMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjg3M2NmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJib2R5IHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0ge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMjBweDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzYzOWJjYiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCIsIHNhbnMtc2VyaWY7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCAuc2lnbnVwLWZvcm0gZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5idHR0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMzNDkxZTIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0dHRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBlNmNiZCAhaW1wb3J0YW50O1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5idG4tb3V0bGluZS1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1vdXRsaW5lLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZGQzO1xuICBib3JkZXItY29sb3I6ICMyODczY2Y7XG59Il19 */"] });
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
            window.localStorage.setItem('UserId', userId);
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
        else if (userId == 'approval' && password == '12345') {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserId or email required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
} }
class LoginComponent {
    constructor(_loginService, router, route) {
        this._loginService = _loginService;
        this.router = router;
        this.route = route;
        this.loginModel = {};
        this.loader = false;
    }
    ngOnInit() {
        this.AdminreturnUrl = this.route.snapshot.queryParams['AdminreturnUrl'] || '/main';
        this.UserreturnUrl = this.route.snapshot.queryParams['UserreturnUrl'] || '/user';
        this.ResolverreturnUrl = this.route.snapshot.queryParams['ResolverreturnUrl'] || '/reviewer';
        this.ApproverReturnUsrl = this.route.snapshot.queryParams['ReviewerUserreturnUrl'] || '/approver';
        //  Reactive Form-
        this.myLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        this.credentials = this.myLoginForm.value; // Credential where we store the formarray value
        this.userid = this.credentials.userName; // get UserId from form
        this.password = this.credentials.password; // get Password from form
        var output = this._loginService.Login(this.userid, this.password);
        this.loader = true; // this - is in component object context
        setTimeout(() => {
            this.loader = false;
        }, 300);
        if (output === 'admin') {
            this.router.navigate([this.AdminreturnUrl]);
        }
        else if (output === 'user') {
            this.router.navigate([this.UserreturnUrl]);
        }
        else if (output === 'reviewer') {
            this.router.navigate([this.ResolverreturnUrl]);
        }
        else if (output === 'approver') {
            this.router.navigate([this.ApproverReturnUsrl]);
        }
        else {
            this.msg = "Invalid credentials !";
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 6, consts: [[1, "password_change_forget"], [1, "signup-form"], [3, "formGroup", "ngSubmit"], [1, "form-header"], [1, "form-group"], ["type", "text", "formControlName", "userName", "name", "User Name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "minlength", "5", "formControlName", "password", "name", "password", 1, "form-control"], ["routerLink", "/forget"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-sm", 3, "disabled"], ["class", "spinner-border spinner-border-sm ml-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "ml-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_small_12_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forget password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 1, 0, "span", 11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.myLoginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  color: #999;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background-color: #fafafa;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/img/password_background.jpg);\n  height: 100vh;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  margin: 0 auto;\n  padding: 30px 0;\n  text-align: center;\n  height: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-top: 60px;\n  color: #999;\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin: -30px -30px 20px;\n  padding: 30px 30px 10px;\n  text-align: center;\n  background: #639bcb !important;\n  color: #fff;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  font-family: \"Pacifico\", sans-serif;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: inline-block;\n  width: 100%;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 15px;\n  width: 100%;\n  border: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  box-shadow: none;\n  width: 100%;\n  border: 1px solid #e1e1e1;\n  font-size: 14px;\n  display: inline-block;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  background: #1e85de !important;\n  border: none;\n  min-width: 150px;\n  border-radius: 3px;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #0e6cbd !important;\n  box-shadow: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #0e6cbd;\n  font-size: 13px;\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.password_change_forget[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBEQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFUjs7QUREUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7QUNHWjs7QURGWTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0loQjs7QURIZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDS3BCOztBREZZO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNJaEI7O0FESGdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0twQjs7QURIZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDS3BCOztBREhnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLcEI7O0FESm9CO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBQ014Qjs7QURIZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNLcEI7O0FESGdCO0VBQ0kscUJBQUE7QUNLcEI7O0FESGdCO0VBQ0ksdUJBQUE7QUNLcEI7O0FESUE7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTMwcHggLTMwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzOWJjYiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWU4NWRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGU2Y2JkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBMb2FkZXJcclxuXHJcbi8qXHJcblRoZSBsb2FkZXJzIHVzZSBDU1MgY3VzdG9tIHByb3BlcnRpZXMgKHZhcmlhYmxlcykgdG8gY29udHJvbCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgbG9hZGVyc1xyXG4qL1xyXG4iLCJib2R5IHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFzc3dvcmRfY2hhbmdlX2ZvcmdldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL3Bhc3N3b3JkX2JhY2tncm91bmQuanBnKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0ge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMjBweDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzYzOWJjYiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIiwgc2Fucy1zZXJpZjtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjMWU4NWRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnBhc3N3b3JkX2NoYW5nZV9mb3JnZXQgLnNpZ251cC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwZTZjYmQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHNtYWxsIHtcbiAgY29sb3I6ICMwZTZjYmQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbi5wYXNzd29yZF9jaGFuZ2VfZm9yZ2V0IC5zaWdudXAtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG59XG5cbi8qXG5UaGUgbG9hZGVycyB1c2UgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzICh2YXJpYWJsZXMpIHRvIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGxvYWRlcnNcbiovIl19 */"] });
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





const _c0 = function () { return { exact: true }; };
function MainComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Update Licence Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Renew Licence Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main"]], decls: 37, vars: 3, consts: [["id", "wrapper"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "", 1, "logo"], [1, "list-group", "list-group-flush"], ["routerLink", "/main/users", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", 3, "routerLinkActiveOptions"], ["routerLink", "/main/projectDetail", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "fa", "fa-chevron-down"], [4, "ngIf"], ["routerLink", "/main/logs", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLink", "/main/changePsw", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["id", "page-content-wrapper"], [1, "header_main"], [1, "Toggle_button"], ["id", "menu-toggle"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "manu"], ["src", "assets/img/admin.jpg", "alt", "", 1, "img-fluid", "userImage", 2, "width", "50px", "height", "50px"], ["href", "#", 2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], [1, "container-fluid"], [1, "middle-content"], [1, "dropdown_sidebar"], ["routerLinkActive", "check_menu", "routerLink", "/main/licence", 3, "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["routerLinkActive", "check_menu", "routerLink", "/main/updateLicence"], ["routerLinkActive", "check_menu", "routerLink", "/main/renewLicence"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_div_14_Template, 12, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Licence Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Manoj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_a_click_31_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #17a2b8;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.home[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 0.8;\n}\n\nh6[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  background: #17a2b8 !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #17a2b8 !important;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n    position: fixed;\n    z-index: 33;\n    margin-top: 0;\n    width: 250px;\n    height: 100%;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    width: calc(100% - 250px);\n    position: relative;\n    float: right;\n    display: inline-block;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -15rem;\n  }\n}\n\n.submenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.active1[_ngcontent-%COMP%] {\n  background: #ada8a8;\n  box-shadow: none;\n}\n\n.ml-6[_ngcontent-%COMP%] {\n  margin-left: 7rem !important;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding-bottom: 20px;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #333;\n}\n\ndiv#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white !important;\n  background: #333 !important;\n}\n\n.middle-content[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  box-shadow: 0 0 5px #ddd;\n  padding: 20px;\n}\n\n.toggled[_ngcontent-%COMP%]   #page-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXElmY29uXFxJZmNvbi9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUdBLGlDQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ0ROOztFREdFO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQ0FOOztFREVFO0lBQ0ksbUJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKOztBRElJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNEUjs7QURFUTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQ0FaOztBREVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtBQ0FaOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNGSjs7QURNSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxN2EyYjg7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuaDY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlckltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjghaW1wb3J0YW50O1xyXG4gICAgO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAzMztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJtZW51IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUxIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNzMsIDE2OCwgMTY4KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tbC02IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2I3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udG9nZ2xlZCB7XHJcbiAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxufSIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxN2EyYjg7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ob21lIHtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmg2OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VySW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuI3NpZGViYXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAzMztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gIH1cbn1cbi5zdWJtZW51IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYWN0aXZlMSB7XG4gIGJhY2tncm91bmQ6ICNhZGE4YTg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tbC02IHtcbiAgbWFyZ2luLWxlZnQ6IDdyZW0gIWltcG9ydGFudDtcbn1cblxuZGl2I3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuZGl2I3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuZGl2I3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMzMzMgIWltcG9ydGFudDtcbn1cblxuLm1pZGRsZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZGRkO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/not-found-page/not-found-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/not-found-page/not-found-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "text-center"], ["src", "assets/img/notFound.jpg", "alt", "", 1, "img-fluid"], ["routerLink", "/users", 1, "btn", "btn-outline-info"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
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

module.exports = __webpack_require__(/*! C:\Users\Jamshed Ahmad\Desktop\Ifcon\Ifcon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map