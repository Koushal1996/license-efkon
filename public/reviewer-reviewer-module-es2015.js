(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviewer-reviewer-module"],{

/***/ "./src/app/reviewer/change-password-reviwer/change-password-reviwer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/reviewer/change-password-reviwer/change-password-reviwer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePasswordReviwerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordReviwerComponent", function() { return ChangePasswordReviwerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChangePasswordReviwerComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Old Password must be 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordReviwerComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password must be 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordReviwerComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password must be 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordReviwerComponent {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.model.newPsw !== this.model.cnfPsw) {
            alert("wrong pasword");
        }
    }
}
ChangePasswordReviwerComponent.ɵfac = function ChangePasswordReviwerComponent_Factory(t) { return new (t || ChangePasswordReviwerComponent)(); };
ChangePasswordReviwerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordReviwerComponent, selectors: [["app-change-password-reviwer"]], decls: 34, vars: 6, consts: [[1, "container", "padd"], [1, "row"], [1, "col-lg-6"], ["src", "assets/img/login_process.png", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "mt-4"], [1, "text-left"], [1, "txt"], ["action", "", 1, "col-sm", "mt-5", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", ""], ["type", "password", "minlength", "5", "placeholder", "Old Password", "name", "oldPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["OldPsw", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "minlength", "5", "placeholder", "New Password", "name", "newPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NewPsw", "ngModel"], ["type", "password", "minlength", "5", "placeholder", "Confirm Password", "name", "cnfPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CnfPsw", "ngModel"], [1, "form-group", "pull-right"], ["type", "submit", 1, "btn", "btn-info", "mr-3"], ["type", "button", 1, "btn", "btn-danger"], [1, "text-danger"]], template: function ChangePasswordReviwerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please input your old password to reset new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordReviwerComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordReviwerComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.oldPsw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChangePasswordReviwerComponent_small_16_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordReviwerComponent_Template_input_ngModelChange_20_listener($event) { return ctx.model.newPsw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChangePasswordReviwerComponent_small_22_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordReviwerComponent_Template_input_ngModelChange_26_listener($event) { return ctx.model.cnfPsw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChangePasswordReviwerComponent_small_28_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.oldPsw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r153.valid && _r153.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.newPsw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r155.valid && _r155.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.cnfPsw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r157.valid && _r157.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\ninput.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n\n.txt[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvY2hhbmdlLXBhc3N3b3JkLXJldml3ZXIvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXHJldmlld2VyXFxjaGFuZ2UtcGFzc3dvcmQtcmV2aXdlclxcY2hhbmdlLXBhc3N3b3JkLXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jldmlld2VyL2NoYW5nZS1wYXNzd29yZC1yZXZpd2VyL2NoYW5nZS1wYXNzd29yZC1yZXZpd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3ZXIvY2hhbmdlLXBhc3N3b3JkLXJldml3ZXIvY2hhbmdlLXBhc3N3b3JkLXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi50eHQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuIiwiLnBhZGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5pbnB1dC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuXG4udHh0IHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordReviwerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password-reviwer',
                templateUrl: './change-password-reviwer.component.html',
                styleUrls: ['./change-password-reviwer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/reviewer/licence-view-reviwer/licence-view-reviwer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/reviewer/licence-view-reviwer/licence-view-reviwer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LicenceViewReviwerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenceViewReviwerComponent", function() { return LicenceViewReviwerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/main/project-detail/project-detail-service.service */ "./src/app/main/project-detail/project-detail-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LicenceViewReviwerComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r150 = ctx.$implicit;
    const i_r151 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r151 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.uniqueAccessId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.Version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.LicenceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.ExpirationPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.StartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r150.EndDate);
} }
class LicenceViewReviwerComponent {
    constructor(_viewLog) {
        this._viewLog = _viewLog;
    }
    ngOnInit() {
        this.logs = this._viewLog.ViewLog;
    }
}
LicenceViewReviwerComponent.ɵfac = function LicenceViewReviwerComponent_Factory(t) { return new (t || LicenceViewReviwerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"])); };
LicenceViewReviwerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LicenceViewReviwerComponent, selectors: [["app-licence-view-reviwer"]], decls: 25, vars: 1, consts: [[1, "table", "table-hover", "table-stripped", "table-bordered", "table-sm"], [1, "bg-warning"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "pl-2"], [1, "text-center"], [1, "text-dark", "text-center"]], template: function LicenceViewReviwerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unique Access ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Licence Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expiration Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LicenceViewReviwerComponent_tr_24_Template, 21, 10, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #17a2b8;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.home[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 0.8;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\nh6[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  background: #17a2b8 !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #17a2b8 !important;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  min-width: 100vw;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -15rem;\n  }\n}\n\n.submenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.active1[_ngcontent-%COMP%] {\n  background: #ada8a8;\n  box-shadow: none;\n}\n\n.ml-6[_ngcontent-%COMP%] {\n  margin-left: 7rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvbGljZW5jZS12aWV3LXJldml3ZXIvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXHJldmlld2VyXFxsaWNlbmNlLXZpZXctcmV2aXdlclxcbGljZW5jZS12aWV3LXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jldmlld2VyL2xpY2VuY2Utdmlldy1yZXZpd2VyL2xpY2VuY2Utdmlldy1yZXZpd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUdBLGlDQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxjQUFBO0VDRE47O0VER0U7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ0FOOztFREVFO0lBQ0ksbUJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3ZXIvbGljZW5jZS12aWV3LXJldml3ZXIvbGljZW5jZS12aWV3LXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC44O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbmg2OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG4gICAgO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVzZXJJbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTdhMmI4IWltcG9ydGFudDtcclxuICAgIDtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJtZW51IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUxIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxNzMsIDE2OCwgMTY4KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5tbC02IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cmVtIWltcG9ydGFudDtcclxufVxyXG4iLCJib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTdhMmI4O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaG9tZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5oNjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzE3YTJiOCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlckltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTdhMmI4ICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbn1cblxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xuICB3aWR0aDogMTVyZW07XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgfVxufVxuLnN1Ym1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hY3RpdmUxIHtcbiAgYmFja2dyb3VuZDogI2FkYThhODtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1sLTYge1xuICBtYXJnaW4tbGVmdDogN3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LicenceViewReviwerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-licence-view-reviwer',
                templateUrl: './licence-view-reviwer.component.html',
                styleUrls: ['./licence-view-reviwer.component.scss']
            }]
    }], function () { return [{ type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reviewer/project-detail-reviwer/project-detail-reviwer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/reviewer/project-detail-reviwer/project-detail-reviwer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectDetailReviwerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailReviwerComponent", function() { return ProjectDetailReviwerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/main/project-detail/project-detail-service.service */ "./src/app/main/project-detail/project-detail-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function ProjectDetailReviwerComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r143 = ctx.$implicit;
    const i_r144 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r144 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.ProductFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.Version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.Users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.LicenceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.ExpirationPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.StartDate);
} }
class ProjectDetailReviwerComponent {
    constructor(_myServices) {
        this._myServices = _myServices;
        this.myProjectDetail = [];
        this.alerts = false;
    }
    ngOnInit() {
        this.myProjectDetail = this._myServices.projectDetail;
    }
    DeleteProject(i) {
        var date1 = new Date();
        //  var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var date2 = this.myProjectDetail[i].EndDate;
        var date3 = new Date(date2);
        if (+date1 <= +date3) {
            alert('Can not delete');
        }
        else {
            let val = confirm("Are you sure ?");
            if (val) {
                this.myProjectDetail.splice(i, 1);
            }
        }
    }
}
ProjectDetailReviwerComponent.ɵfac = function ProjectDetailReviwerComponent_Factory(t) { return new (t || ProjectDetailReviwerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"])); };
ProjectDetailReviwerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailReviwerComponent, selectors: [["app-project-detail-reviwer"]], decls: 49, vars: 1, consts: [[1, "table", "table-hover", "table-bordered", "table-sm"], [1, "bg-warning"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "container"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], ["action", ""], [1, "form-group"], ["for", ""], ["name", "", "id", "", "cols", "20", "rows", "3", 1, "form-control"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-danger", "pull-right"], [1, "btn", "btn-outline-success", "pull-right", "mr-3"], ["scope", "row", 1, "pl-2"], [1, "text-center"], [1, "text-dark", "text-center"], [1, "btn", "btn-outline-success", "ml-3"], [1, "fa", "fa-check", "text-dark", 2, "cursor", "pointer"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-outline-danger", "ml-3"], [1, "fa", "fa-times", "text-dark", 2, "cursor", "pointer"]], template: function ProjectDetailReviwerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Licence Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Licence Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expiration Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reviewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectDetailReviwerComponent_tr_26_Template, 25, 9, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reason of Rejection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Write the proper reason of rejection !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myProjectDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".fa-trash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.myButton[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvcHJvamVjdC1kZXRhaWwtcmV2aXdlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXElmY29uXFxJZmNvbi9zcmNcXGFwcFxccmV2aWV3ZXJcXHByb2plY3QtZGV0YWlsLXJldml3ZXJcXHByb2plY3QtZGV0YWlsLXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jldmlld2VyL3Byb2plY3QtZGV0YWlsLXJldml3ZXIvcHJvamVjdC1kZXRhaWwtcmV2aXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld2VyL3Byb2plY3QtZGV0YWlsLXJldml3ZXIvcHJvamVjdC1kZXRhaWwtcmV2aXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5teUJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4iLCIuZmEtdHJhc2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5teUJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailReviwerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-detail-reviwer',
                templateUrl: './project-detail-reviwer.component.html',
                styleUrls: ['./project-detail-reviwer.component.scss']
            }]
    }], function () { return [{ type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reviewer/project-logs-reviwer/project-logs-reviwer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/reviewer/project-logs-reviwer/project-logs-reviwer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectLogsReviwerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectLogsReviwerComponent", function() { return ProjectLogsReviwerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/main/project-detail/project-detail-service.service */ "./src/app/main/project-detail/project-detail-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function ProjectLogsReviwerComponent_tr_24_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Know Reason)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectLogsReviwerComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectLogsReviwerComponent_tr_24_span_21_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r146 = ctx.$implicit;
    const i_r147 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r147 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.ProductFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.Version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.Users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.LicenceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.ExpirationPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.StartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r146.ProjectstateReview == "Approved" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r146.ProjectstateReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r146.ProjectstateReview === "Rejected By Approver");
} }
class ProjectLogsReviwerComponent {
    constructor(_myServices) {
        this._myServices = _myServices;
        this.myProjectDetail = [];
        this.alerts = false;
    }
    ngOnInit() {
        this.myProjectDetail = this._myServices.projectDetail;
    }
    DeleteProject(i) {
        var date1 = new Date();
        //  var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var date2 = this.myProjectDetail[i].EndDate;
        var date3 = new Date(date2);
        if (+date1 <= +date3) {
            alert('Can not delete');
        }
        else {
            let val = confirm("Are you sure ?");
            if (val) {
                this.myProjectDetail.splice(i, 1);
            }
        }
    }
}
ProjectLogsReviwerComponent.ɵfac = function ProjectLogsReviwerComponent_Factory(t) { return new (t || ProjectLogsReviwerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"])); };
ProjectLogsReviwerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectLogsReviwerComponent, selectors: [["app-project-logs-reviwer"]], decls: 43, vars: 1, consts: [[1, "table", "table-hover", "table-bordered", "table-stripped", "table-sm"], [1, "bg-warning"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "container"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], ["action", ""], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-danger", "pull-right"], ["scope", "row", 1, "pl-2"], [1, "text-center"], [1, "text-dark", "text-center"], ["data-toggle", "modal", "data-target", "#myModal", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#myModal"]], template: function ProjectLogsReviwerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Licence Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Licence Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expiration Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Approve/Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectLogsReviwerComponent_tr_24_Template, 22, 13, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reason of Rejection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "This project has rejected this project because the given detail is not proper. There is mistakes in many fields. Please reform it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myProjectDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".fa-trash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.myButton[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvcHJvamVjdC1sb2dzLXJldml3ZXIvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXHJldmlld2VyXFxwcm9qZWN0LWxvZ3MtcmV2aXdlclxccHJvamVjdC1sb2dzLXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jldmlld2VyL3Byb2plY3QtbG9ncy1yZXZpd2VyL3Byb2plY3QtbG9ncy1yZXZpd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3ZXIvcHJvamVjdC1sb2dzLXJldml3ZXIvcHJvamVjdC1sb2dzLXJldml3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtdHJhc2gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXlCdXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLmZhLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXlCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectLogsReviwerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-logs-reviwer',
                templateUrl: './project-logs-reviwer.component.html',
                styleUrls: ['./project-logs-reviwer.component.scss']
            }]
    }], function () { return [{ type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reviewer/reviewer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/reviewer/reviewer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReviewerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerRoutingModule", function() { return ReviewerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reviewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewer.component */ "./src/app/reviewer/reviewer.component.ts");
/* harmony import */ var _reviwer_user_reviwer_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviwer-user/reviwer-user.component */ "./src/app/reviewer/reviwer-user/reviwer-user.component.ts");
/* harmony import */ var _project_detail_reviwer_project_detail_reviwer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-detail-reviwer/project-detail-reviwer.component */ "./src/app/reviewer/project-detail-reviwer/project-detail-reviwer.component.ts");
/* harmony import */ var _project_logs_reviwer_project_logs_reviwer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-logs-reviwer/project-logs-reviwer.component */ "./src/app/reviewer/project-logs-reviwer/project-logs-reviwer.component.ts");
/* harmony import */ var _licence_view_reviwer_licence_view_reviwer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./licence-view-reviwer/licence-view-reviwer.component */ "./src/app/reviewer/licence-view-reviwer/licence-view-reviwer.component.ts");
/* harmony import */ var _change_password_reviwer_change_password_reviwer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-password-reviwer/change-password-reviwer.component */ "./src/app/reviewer/change-password-reviwer/change-password-reviwer.component.ts");











const routes = [
    {
        path: '',
        component: _reviewer_component__WEBPACK_IMPORTED_MODULE_3__["ReviewerComponent"],
        children: [
            {
                path: '',
                redirectTo: 'reviewrusers',
                pathMatch: 'full'
            },
            {
                path: 'reviewrusers',
                component: _reviwer_user_reviwer_user_component__WEBPACK_IMPORTED_MODULE_4__["ReviwerUserComponent"]
            },
            {
                path: 'reviewrProjectDeatil',
                component: _project_detail_reviwer_project_detail_reviwer_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailReviwerComponent"]
            },
            {
                path: 'reviewrProjectLog',
                component: _project_logs_reviwer_project_logs_reviwer_component__WEBPACK_IMPORTED_MODULE_6__["ProjectLogsReviwerComponent"]
            },
            {
                path: 'LicenceView',
                component: _licence_view_reviwer_licence_view_reviwer_component__WEBPACK_IMPORTED_MODULE_7__["LicenceViewReviwerComponent"]
            },
            {
                path: 'reviewrChangePassword',
                component: _change_password_reviwer_change_password_reviwer_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordReviwerComponent"]
            },
        ]
    }
];
class ReviewerRoutingModule {
}
ReviewerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReviewerRoutingModule });
ReviewerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReviewerRoutingModule_Factory(t) { return new (t || ReviewerRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReviewerRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/reviewer/reviewer.component.ts":
/*!************************************************!*\
  !*** ./src/app/reviewer/reviewer.component.ts ***!
  \************************************************/
/*! exports provided: ReviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerComponent", function() { return ReviewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return { exact: true }; };
function ReviewerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class ReviewerComponent {
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
ReviewerComponent.ɵfac = function ReviewerComponent_Factory(t) { return new (t || ReviewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReviewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewerComponent, selectors: [["app-reviewer"]], decls: 43, vars: 3, consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-heading"], ["src", "assets/img/images.png", "alt", "", 1, "img-fluid", 2, "width", "200px"], [1, "list-group", "list-group-flush", "mt-3"], ["routerLink", "/reviewer/reviewrusers", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", 3, "routerLinkActiveOptions"], ["routerLink", "/reviewer/reviewrProjectDeatil", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", 3, "click"], [1, "fa", "fa-chevron-down", "ml-6"], [4, "ngIf"], ["routerLink", "/reviewer/reviewrProjectLog", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["routerLink", "/reviewer/reviewrChangePassword", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom"], ["id", "menu-toggle", 1, "btn", "btn-outline"], [1, "fa", "fa-th-list", "text-info"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "navbar-toggler"], [1, "navbar-toggler-icon"], ["routerLink", "/main/users", 1, "nav-link", "home"], [1, "text-success"], [1, "sr-only"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], ["src", "assets/img/avatar.jpeg", "alt", "", 1, "img-fluid", "userImage", 2, "width", "50px", "height", "50px"], [1, "nav-item", "d-flex", "align-items-center"], [1, "nav-link", "text-dark"], [1, "nav-link", "text-dark", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-arrow-right", "text-info"], [1, "container-fluid"], ["routerLinkActive", "active1", "routerLink", "/reviewer/LicenceView", 1, "ml-3", "submenu", 3, "routerLinkActiveOptions"], [1, "fa", "fa-check"]], template: function ReviewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Requested Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewerComponent_Template_h6_click_10_listener($event) { return ctx.subMenu1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Licence ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReviewerComponent_div_13_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Project Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Reviwer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewerComponent_Template_a_click_38_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #17a2b8;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.home[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 0.8;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\nh6[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  background: #17a2b8 !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #17a2b8 !important;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  min-width: 100vw;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -15rem;\n  }\n}\n\n.submenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.active1[_ngcontent-%COMP%] {\n  background: #ada8a8;\n  box-shadow: none;\n}\n\n.ml-6[_ngcontent-%COMP%] {\n  margin-left: 7rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxJZmNvblxcSWZjb24vc3JjXFxhcHBcXHJldmlld2VyXFxyZXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV2aWV3ZXIvcmV2aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBR0EsaUNBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLGNBQUE7RUNETjs7RURHRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VDQU47O0VERUU7SUFDSSxtQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLDRCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdlci9yZXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTdhMmI4O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuaDY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlckltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjghaW1wb3J0YW50O1xyXG4gICAgO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Ym1lbnUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZTEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3MywgMTY4LCAxNjgpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1sLTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdyZW0haW1wb3J0YW50O1xyXG59XHJcbiIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxN2EyYjg7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ob21lIHtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbmg2OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VySW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuI3NpZGViYXItd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxNXJlbTtcbn1cblxuI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiAxMDB2dztcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICB9XG59XG4uc3VibWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFjdGl2ZTEge1xuICBiYWNrZ3JvdW5kOiAjYWRhOGE4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWwtNiB7XG4gIG1hcmdpbi1sZWZ0OiA3cmVtICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviewer',
                templateUrl: './reviewer.component.html',
                styleUrls: ['./reviewer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reviewer/reviewer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/reviewer/reviewer.module.ts ***!
  \*********************************************/
/*! exports provided: ReviewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerModule", function() { return ReviewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reviewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewer.component */ "./src/app/reviewer/reviewer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviewer-routing.module */ "./src/app/reviewer/reviewer-routing.module.ts");
/* harmony import */ var _project_detail_reviwer_project_detail_reviwer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-detail-reviwer/project-detail-reviwer.component */ "./src/app/reviewer/project-detail-reviwer/project-detail-reviwer.component.ts");
/* harmony import */ var _licence_view_reviwer_licence_view_reviwer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./licence-view-reviwer/licence-view-reviwer.component */ "./src/app/reviewer/licence-view-reviwer/licence-view-reviwer.component.ts");
/* harmony import */ var _project_logs_reviwer_project_logs_reviwer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-logs-reviwer/project-logs-reviwer.component */ "./src/app/reviewer/project-logs-reviwer/project-logs-reviwer.component.ts");
/* harmony import */ var _change_password_reviwer_change_password_reviwer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password-reviwer/change-password-reviwer.component */ "./src/app/reviewer/change-password-reviwer/change-password-reviwer.component.ts");











class ReviewerModule {
}
ReviewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReviewerModule });
ReviewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReviewerModule_Factory(t) { return new (t || ReviewerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewerRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReviewerModule, { declarations: [_reviewer_component__WEBPACK_IMPORTED_MODULE_2__["ReviewerComponent"], _project_detail_reviwer_project_detail_reviwer_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailReviwerComponent"], _licence_view_reviwer_licence_view_reviwer_component__WEBPACK_IMPORTED_MODULE_7__["LicenceViewReviwerComponent"], _project_logs_reviwer_project_logs_reviwer_component__WEBPACK_IMPORTED_MODULE_8__["ProjectLogsReviwerComponent"], _change_password_reviwer_change_password_reviwer_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordReviwerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewerRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reviewer_component__WEBPACK_IMPORTED_MODULE_2__["ReviewerComponent"], _project_detail_reviwer_project_detail_reviwer_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailReviwerComponent"], _licence_view_reviwer_licence_view_reviwer_component__WEBPACK_IMPORTED_MODULE_7__["LicenceViewReviwerComponent"], _project_logs_reviwer_project_logs_reviwer_component__WEBPACK_IMPORTED_MODULE_8__["ProjectLogsReviwerComponent"], _change_password_reviwer_change_password_reviwer_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordReviwerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewerRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/reviewer/reviwer-user/reviwer-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reviewer/reviwer-user/reviwer-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviwerUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviwerUserComponent", function() { return ReviwerUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_approver_users_approver_users_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/approver/users-approver/users-services.service */ "./src/app/approver/users-approver/users-services.service.ts");



class ReviwerUserComponent {
    constructor(userServices) {
        this.userServices = userServices;
        this.expression = 'green';
    }
    ngOnInit() {
        this.myAllUser = this.userServices.users;
        console.log(this.myAllUser);
    }
}
ReviwerUserComponent.ɵfac = function ReviwerUserComponent_Factory(t) { return new (t || ReviwerUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_approver_users_approver_users_services_service__WEBPACK_IMPORTED_MODULE_1__["UsersServicesService"])); };
ReviwerUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviwerUserComponent, selectors: [["app-reviwer-user"]], decls: 81, vars: 0, consts: [[1, "table", "table-hover", "table-stripped", "table-sm"], [1, "bg-warning"], ["scope", "col"], ["scope", "row"]], template: function ReviwerUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UserID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mail Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jamshed Ahmad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "USer2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resolver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "sent Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "jmd.amd86@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Raghav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "USer3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reviwer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Not sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "abc@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "RAHUL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "USer5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "sent Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "jmd.amd786@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fahad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "USer3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reviwer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Not sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Fahad@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Raghav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "USer5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "sent Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "ragahav@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".myButton[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n.fa-trash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3ZXIvcmV2aXdlci11c2VyL0M6XFxVc2Vyc1xcSmFtc2hlZCBBaG1hZFxcRGVza3RvcFxcSWZjb25cXElmY29uL3NyY1xcYXBwXFxyZXZpZXdlclxccmV2aXdlci11c2VyXFxyZXZpd2VyLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jldmlld2VyL3Jldml3ZXItdXNlci9yZXZpd2VyLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdlci9yZXZpd2VyLXVzZXIvcmV2aXdlci11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15QnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZmEtdHJhc2gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5teUJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5mYS10cmFzaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviwerUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviwer-user',
                templateUrl: './reviwer-user.component.html',
                styleUrls: ['./reviwer-user.component.scss']
            }]
    }], function () { return [{ type: src_app_approver_users_approver_users_services_service__WEBPACK_IMPORTED_MODULE_1__["UsersServicesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=reviewer-reviewer-module-es2015.js.map