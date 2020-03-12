function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./src/app/user/chnage-password-user/chnage-password-user.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/user/chnage-password-user/chnage-password-user.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ChnagePasswordUserComponent */

  /***/
  function srcAppUserChnagePasswordUserChnagePasswordUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChnagePasswordUserComponent", function () {
      return ChnagePasswordUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChnagePasswordUserComponent_small_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Old Password must be 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChnagePasswordUserComponent_small_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password must be 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChnagePasswordUserComponent_small_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password must be 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChnagePasswordUserComponent =
    /*#__PURE__*/
    function () {
      function ChnagePasswordUserComponent() {
        _classCallCheck(this, ChnagePasswordUserComponent);

        this.model = {};
      }

      _createClass(ChnagePasswordUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.model.newPsw !== this.model.cnfPsw) {
            alert("wrong pasword");
          }
        }
      }]);

      return ChnagePasswordUserComponent;
    }();

    ChnagePasswordUserComponent.ɵfac = function ChnagePasswordUserComponent_Factory(t) {
      return new (t || ChnagePasswordUserComponent)();
    };

    ChnagePasswordUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChnagePasswordUserComponent,
      selectors: [["app-chnage-password-user"]],
      decls: 31,
      vars: 6,
      consts: [[1, "password_change"], [1, "change_password"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-header"], [1, "form-group"], ["for", ""], ["type", "password", "minlength", "5", "placeholder", "Old Password", "name", "oldPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["OldPsw", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "minlength", "5", "placeholder", "New Password", "name", "newPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NewPsw", "ngModel"], ["type", "password", "minlength", "5", "placeholder", "Confirm Password", "name", "cnfPsw", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CnfPsw", "ngModel"], [1, "button_btn", "text-right"], ["type", "submit", 1, "btn", "btn-info", "mr-3"], ["type", "button", 1, "btn", "btn-danger"], [1, "text-danger"]],
      template: function ChnagePasswordUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChnagePasswordUserComponent_Template_form_ngSubmit_2_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChnagePasswordUserComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.model.oldPsw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChnagePasswordUserComponent_small_12_Template, 2, 0, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChnagePasswordUserComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.model.newPsw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChnagePasswordUserComponent_small_18_Template, 2, 0, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChnagePasswordUserComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.model.cnfPsw = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChnagePasswordUserComponent_small_24_Template, 2, 0, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.oldPsw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r151.valid && _r151.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.newPsw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r153.valid && _r153.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.cnfPsw);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r155.valid && _r155.touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.password_change[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  background-color: #fafafa;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/img/password_background.jpg);\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  margin: 0 auto;\n  padding-bottom: 15px;\n  text-align: center;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin-top: 15px;\n  color: #999;\n  background: #fff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);\n  padding: 30px 30px 5px 30px;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin: -30px -30px 20px;\n  padding: 30px 30px 10px;\n  text-align: center;\n  background: #639bcb !important;\n  color: #fff;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  margin: 0 0 10px;\n  font-family: \"Pacifico\", sans-serif;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 15px;\n  width: 100%;\n  border: none;\n  padding-bottom: 6px;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control.ng-untouched.ng-pristine[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: none;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  float: none;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid green;\n  float: none;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0e6cbd;\n  border-color: #0e6cbd;\n  box-shadow: none;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%]:hover {\n  background-color: #1c5f98;\n  border-color: #1c5f98;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  box-shadow: none;\n}\n\n.password_change[_ngcontent-%COMP%]   .change_password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #d32020;\n  border-color: #d32020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaG5hZ2UtcGFzc3dvcmQtdXNlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFxjaG5hZ2UtcGFzc3dvcmQtdXNlclxcY2huYWdlLXBhc3N3b3JkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY2huYWdlLXBhc3N3b3JkLXVzZXIvY2huYWdlLXBhc3N3b3JkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMERBQUE7QUNDRjs7QURBRTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FERE07RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQkFBQTtBQ0dWOztBREZVO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDSWQ7O0FESGM7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDS2xCOztBREZVO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0lkOztBREhjO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDS2xCOztBREhjO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0toQjs7QURIWTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0tkOztBREhZO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDS2Q7O0FESFk7RUFFRSxXQUFBO0FDSWQ7O0FERlk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSWQ7O0FESGM7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDS2hCOztBREZVO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0lkOztBREhZO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ0tkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jaG5hZ2UtcGFzc3dvcmQtdXNlci9jaG5hZ2UtcGFzc3dvcmQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkXHJcbntcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4ucGFzc3dvcmRfY2hhbmdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9wYXNzd29yZF9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgLmNoYW5nZV9wYXNzd29yZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDVweCAzMHB4O1xyXG4gICAgICAgICAgLmZvcm0taGVhZGVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IC0zMHB4IC0zMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MzliY2IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQubmctdmFsaWR7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4dFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1pbmZvIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzBlNmNiZDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM1Zjk4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMWM1Zjk4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzIwMjA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDMyMDIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnBhc3N3b3JkX2NoYW5nZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvcGFzc3dvcmRfYmFja2dyb3VuZC5qcGcpO1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggNXB4IDMwcHg7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1oZWFkZXIge1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM2MzliY2IgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiLCBzYW5zLXNlcmlmO1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGZsb2F0OiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1ncm91cCAudHh0IHtcbiAgY29sb3I6IGdyYXk7XG59XG4ucGFzc3dvcmRfY2hhbmdlIC5jaGFuZ2VfcGFzc3dvcmQgZm9ybSAuZm9ybS1ncm91cCAuYnRuLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmNiZDtcbiAgYm9yZGVyLWNvbG9yOiAjMGU2Y2JkO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjNWY5ODtcbiAgYm9yZGVyLWNvbG9yOiAjMWM1Zjk4O1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBhc3N3b3JkX2NoYW5nZSAuY2hhbmdlX3Bhc3N3b3JkIGZvcm0gLmZvcm0tZ3JvdXAgLmJ0bi1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyMDIwO1xuICBib3JkZXItY29sb3I6ICNkMzIwMjA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChnagePasswordUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chnage-password-user',
          templateUrl: './chnage-password-user.component.html',
          styleUrls: ['./chnage-password-user.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/create-licence-request-key-user/request-licence-key-user.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/user/create-licence-request-key-user/request-licence-key-user.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: RequestLicenceKeyUserComponent */

  /***/
  function srcAppUserCreateLicenceRequestKeyUserRequestLicenceKeyUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestLicenceKeyUserComponent", function () {
      return RequestLicenceKeyUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function RequestLicenceKeyUserComponent_div_89_Template(rf, ctx) {
      if (rf & 1) {
        var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Period");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RequestLicenceKeyUserComponent_div_89_Template_input_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.getChangeEventdate($event);
        })("ngModelChange", function RequestLicenceKeyUserComponent_div_89_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.model.period = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r173.model.period);
      }
    }

    function RequestLicenceKeyUserComponent_div_91_Template(rf, ctx) {
      if (rf & 1) {
        var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_div_91_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r178.model.endDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r174.model.endDate);
      }
    }

    var RequestLicenceKeyUserComponent =
    /*#__PURE__*/
    function () {
      function RequestLicenceKeyUserComponent(projectCreateServices) {
        _classCallCheck(this, RequestLicenceKeyUserComponent);

        this.projectCreateServices = projectCreateServices;
        this.checked = false;
        this.password = true;
        this.eyeStatus = false;
        this.model = {};
        this.ShowPeriod = false;
        this.ProjectData = [];
      }

      _createClass(RequestLicenceKeyUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // for password show and hide

      }, {
        key: "onEyeClick",
        value: function onEyeClick() {
          this.eyeStatus = !this.eyeStatus;
          this.password = !this.password;
        } //  for limited date show textfield

      }, {
        key: "onChangeExp",
        value: function onChangeExp(events) {
          this.eventVal = events.target.value;

          if (this.eventVal === '2') {
            this.ShowPeriod = !this.ShowPeriod;
          } else if (this.eventVal === '1') {
            this.ShowPeriod = !this.ShowPeriod;
          }
        }
      }, {
        key: "formSubmit",
        value: function formSubmit() {
          if (!this.ProjectData.length) {
            this.ProjectData.push({
              customername: this.model.customername,
              productFAmily: this.model.productFamily,
              productCode: this.model.productCode,
              Version: this.model.version,
              LicenceType: this.model.LicenceType,
              Users: this.model.users,
              ExpPeriod: this.model.expPeriod,
              StartDate: this.model.date1,
              Period: this.model.period,
              EndDate: this.model.endDate
            });
          }

          console.log(this.ProjectData);
        }
      }, {
        key: "getChangeEventdate",
        value: function getChangeEventdate(event) {
          var x = event.target.value;
          var y = parseInt(x);
          var StartDate = this.model.date1 ? new Date(this.model.date1) : new Date();
          StartDate.setMonth(StartDate.getMonth() + y);
          var year = StartDate.getFullYear();
          var day = StartDate.getDate();
          var month = 1 + StartDate.getMonth();
          var fullDate = year + '-' + (month >= 10 ? month : '0' + month) + '-' + day;
          console.log(fullDate);
          this.model.endDate = fullDate;
          console.log("Date after " + y + " months:", month + "/" + day + "/" + year);
        }
      }]);

      return RequestLicenceKeyUserComponent;
    }();

    RequestLicenceKeyUserComponent.ɵfac = function RequestLicenceKeyUserComponent_Factory(t) {
      return new (t || RequestLicenceKeyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    RequestLicenceKeyUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestLicenceKeyUserComponent,
      selectors: [["app-request-licence-key-user"]],
      decls: 103,
      vars: 9,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "form_main"], [1, "main_form"], [1, "text-center", "text-info"], [1, "mt-4", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-lg-4"], [1, "form-group"], ["for", "userId", 1, "col-form-label"], [1, "inpul-field"], ["type", "text", "disabled", "", "value", "Noida_Htms", 1, "form-control"], ["name", "productFamily", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "EES"], ["value", "ITMS"], ["value", "HTMS"], ["value", "TMS"], ["name", "productCode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "RLVD"], ["value", "SVD"], ["value", "ANPR"], ["type", "text", "name", "version", "id", "inputEmail3", "placeholder", "Version", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "LicenceType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "text", "name", "users", "id", "inputEmail3", "placeholder", "Users", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "col-form-label"], ["name", "expPeriod", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "date", "name", "date1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "col-lg-6"], [1, "col-form-label"], ["type", "submit", 1, "btn", "btn-outline-info"], [1, "fa", "fa-check"], ["type", "button", "routerLink", "/user/viewProjectUser", 1, "btn", "btn-outline-danger", "ml-3"], [1, "fa", "fa-times"], ["type", "text", "name", "period", "id", "abc", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "date", "disabled", "", "name", "endDate", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function RequestLicenceKeyUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RequestLicenceKeyUserComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.formSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.model.productFamily = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "EES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ITMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "HTMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "TMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_select_ngModelChange_37_listener($event) {
            return ctx.model.productCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choose Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "RLVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ANPR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.model.version = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_select_ngModelChange_57_listener($event) {
            return ctx.model.LicenceType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "RLVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "SVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ANPR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.model.users = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Exp. Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_select_ngModelChange_77_listener($event) {
            return ctx.model.expPeriod = $event;
          })("change", function RequestLicenceKeyUserComponent_Template_select_change_77_listener($event) {
            return ctx.onChangeExp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "LifeTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Limited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestLicenceKeyUserComponent_Template_input_ngModelChange_87_listener($event) {
            return ctx.model.date1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, RequestLicenceKeyUserComponent_div_89_Template, 5, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, RequestLicenceKeyUserComponent_div_91_Template, 5, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Request for Licence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Cancel");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.productFamily);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.productCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.version);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.LicenceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.expPeriod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.date1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowPeriod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowPeriod);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".fa-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n.form_main[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  padding: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  box-shadow: 0 0 3px #ddd;\n  padding: 10px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n  color: #333 !important;\n  padding: 10px 0;\n  margin-bottom: 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  max-width: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  display: inline-block;\n  font-size: 15px;\n  color: #333;\n  width: 100%;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1.4px solid green;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1.4px solid green;\n  box-shadow: none;\n  width: 100%;\n  padding: 5px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 47px;\n  cursor: pointer;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button_btn.text-center[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n  width: 20%;\n  margin-top: 36px;\n  display: inline-block;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  border: 1px solid #0e6cbd;\n  background: no-repeat;\n  color: #0e6cbd;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0e6cbd;\n  border-color: #0e6cbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jcmVhdGUtbGljZW5jZS1yZXF1ZXN0LWtleS11c2VyL0M6XFxVc2Vyc1xcSmFtc2hlZCBBaG1hZFxcRGVza3RvcFxcRWZrb24gTGF0ZXN0MlxcZWZrb24tbGljZW5jZS1rZXkvc3JjXFxhcHBcXHVzZXJcXGNyZWF0ZS1saWNlbmNlLXJlcXVlc3Qta2V5LXVzZXJcXHJlcXVlc3QtbGljZW5jZS1rZXktdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jcmVhdGUtbGljZW5jZS1yZXF1ZXN0LWtleS11c2VyL3JlcXVlc3QtbGljZW5jZS1rZXktdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREpBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNFSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDRUo7O0FESkE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJWjs7QURGUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJWjs7QURIWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS2hCOztBREpnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ01wQjs7QURIZ0I7RUFDSSx1QkFBQTtBQ0twQjs7QURGZ0I7RUFDSSx5QkFBQTtBQ0lwQjs7QUREZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHcEI7O0FERGdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNHcEI7O0FEQ1k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ2hCOztBRENZO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NoQjs7QURBZ0I7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRXBCOztBRERvQjtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jcmVhdGUtbGljZW5jZS1yZXF1ZXN0LWtleS11c2VyL3JlcXVlc3QtbGljZW5jZS1rZXktdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1leWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbn1cclxuXHJcbi5mYS1leWUtc2xhc2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDEuNHB4IHNvbGlkIHJlZDtcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTIyLCAxMTQsIDExNCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybV9tYWluIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgIC5tYWluX2Zvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLnRleHQtaW5mbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMS40cHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy12YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mYS1leWUtc2xhc2gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnV0dG9uX2J0bi50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWxlZnQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAuYnRuLW91dGxpbmUtc3VjY2Vzc3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBlNmNiZDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmNiZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuZmEtZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMnB4O1xufVxuXG4uZmEtZXllLXNsYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMnB4O1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkIHJlZDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjN2E3MjcyO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybV9tYWluIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiBpbmhlcml0O1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gLnRleHQtaW5mbyB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzMzM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxLjRweCBzb2xpZCByZWQ7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMS40cHggc29saWQgZ3JlZW47XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5mYS1leWUtc2xhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDQ3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5idXR0b25fYnRuLnRleHQtY2VudGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAudGV4dC1sZWZ0IC5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmNiZDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICBjb2xvcjogIzBlNmNiZDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC50ZXh0LWxlZnQgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmNiZDtcbiAgYm9yZGVyLWNvbG9yOiAjMGU2Y2JkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestLicenceKeyUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-request-licence-key-user',
          templateUrl: './request-licence-key-user.component.html',
          styleUrls: ['./request-licence-key-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/generate-licence-user/generate-licence-user.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/generate-licence-user/generate-licence-user.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: GenerateLicenceUserComponent */

  /***/
  function srcAppUserGenerateLicenceUserGenerateLicenceUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateLicenceUserComponent", function () {
      return GenerateLicenceUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GenerateLicenceUserComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r134.customerName);
      }
    }

    function GenerateLicenceUserComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r135 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r135.ProductFamily);
      }
    }

    var GenerateLicenceUserComponent =
    /*#__PURE__*/
    function () {
      function GenerateLicenceUserComponent(myServices) {
        _classCallCheck(this, GenerateLicenceUserComponent);

        this.myServices = myServices;
      }

      _createClass(GenerateLicenceUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customerName = this.myServices.ViewLog;
        }
      }]);

      return GenerateLicenceUserComponent;
    }();

    GenerateLicenceUserComponent.ɵfac = function GenerateLicenceUserComponent_Factory(t) {
      return new (t || GenerateLicenceUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    GenerateLicenceUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GenerateLicenceUserComponent,
      selectors: [["app-generate-licence-user"]],
      decls: 87,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "form_main"], [1, "text-center", "text-info"], [1, "main_form", "mb-3"], [1, "mt-2", "ng-invalid", "ng-dirty", "ng-touched"], [1, "col-lg-5"], [1, "form-group"], ["for", ""], ["id", "my-select", "name", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "col-lg-2"], [1, "button_btn", "text-left"], [1, "btn", "btn-outline-success"], [1, "col-lg", "12", "p-0"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["type", "text", "placeholder", "Unique Access ID", 1, "form-control"], [1, "btn", "ui-button-icon-only"]],
      template: function GenerateLicenceUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generate Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GenerateLicenceUserComponent_option_14_Template, 2, 1, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GenerateLicenceUserComponent_option_20_Template, 2, 1, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Unique Access ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Licence Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Export XLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1B2CFF9E2566EGG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "xxxxxxxxxxxx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "1B2CFF9E2566EHH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "xxxxxxxxxxxx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1B2CFF9E2566EII");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "xxxxxxxxxxxx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Export as XLS");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding: 0;\n  float: none;\n  text-align: center;\n  background: none;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%] {\n  color: #0a0ad8;\n  font-size: 12px;\n  padding: 4px 8px;\n  border: 1px solid #0a0ad8;\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #0e6cbd;\n  border: 1px solid #0e6cbd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border: 1px solid #28a745;\n  box-shadow: none;\n  outline: none;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n\n.form_main[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  padding: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n  color: #333 !important;\n  padding: 10px 0;\n  margin-bottom: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  box-shadow: none;\n  border: 1px solid #ddd;\n  padding: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  max-width: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  display: inline-block;\n  font-size: 15px;\n  color: #333;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control.ng-untouched.ng-pristine[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: left;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1.4px solid green;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1.4px solid #ddd;\n  box-shadow: none;\n  width: 100%;\n  float: inherit;\n  padding: 5px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 47px;\n  cursor: pointer;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button_btn.text-center[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n  width: 20%;\n  margin-top: 36px;\n  display: inline-block;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  border: 1px solid #0e6cbd;\n  background: no-repeat;\n  color: #0e6cbd;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0e6cbd;\n  border-color: #0e6cbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9nZW5lcmF0ZS1saWNlbmNlLXVzZXIvQzpcXFVzZXJzXFxKYW1zaGVkIEFobWFkXFxEZXNrdG9wXFxFZmtvbiBMYXRlc3QyXFxlZmtvbi1saWNlbmNlLWtleS9zcmNcXGFwcFxcdXNlclxcZ2VuZXJhdGUtbGljZW5jZS11c2VyXFxnZW5lcmF0ZS1saWNlbmNlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvZ2VuZXJhdGUtbGljZW5jZS11c2VyL2dlbmVyYXRlLWxpY2VuY2UtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRVI7O0FERFE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0daOztBRERRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERlk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0loQjs7QUREUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNHWjs7QURGWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSWhCOztBREFJO0VBQ0ksK0JBQUE7QUNFUjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFUjs7QUREUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURGWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSWhCOztBREhnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDS3BCOztBREhnQjtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNLcEI7O0FESGdCO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDS3BCOztBREhnQjtFQUNJLHVCQUFBO0FDS3BCOztBREZnQjtFQUNJLHlCQUFBO0FDSXBCOztBRERnQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNHcEI7O0FERGdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNHcEI7O0FEQ1k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ2hCOztBRENZO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NoQjs7QURBZ0I7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRXBCOztBRERvQjtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9nZW5lcmF0ZS1saWNlbmNlLXVzZXIvZ2VuZXJhdGUtbGljZW5jZS11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYWRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYWQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhZDg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm1fbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcbiAgICAudGV4dC1pbmZvIHtcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5fZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuZm9ybS1jb250cm9sLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMS40cHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy12YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhLWV5ZS1zbGFzaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDdweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXR0b25fYnRuLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNze1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnBhZGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4udGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnRhYmxlIHRkIGlucHV0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgdGQgYnV0dG9uLmJ0bi51aS1idXR0b24taWNvbi1vbmx5IHtcbiAgY29sb3I6ICMwYTBhZDg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMGFkODtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50YWJsZSB0ZCBidXR0b24uYnRuLnVpLWJ1dHRvbi1pY29uLW9ubHk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzBlNmNiZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmNiZDtcbn1cbi50YWJsZSB0ZCAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4udGFibGUgdGQgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4YTc0NTtcbn1cbi50YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG5cbi5mb3JtX21haW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG59XG4uZm9ybV9tYWluIC50ZXh0LWluZm8ge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0LmZvcm0tY29udHJvbC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogaW5oZXJpdDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHNlbGVjdC5mb3JtLWNvbnRyb2wubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkIHJlZDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogaW5oZXJpdDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZhLWV5ZS1zbGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogNDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmJ1dHRvbl9idG4udGV4dC1jZW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC50ZXh0LWxlZnQgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjMGU2Y2JkO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLnRleHQtbGVmdCAuYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Y2JkO1xuICBib3JkZXItY29sb3I6ICMwZTZjYmQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateLicenceUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-generate-licence-user',
          templateUrl: './generate-licence-user.component.html',
          styleUrls: ['./generate-licence-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/renew-licence-key-user/renew-licence-key-user.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user/renew-licence-key-user/renew-licence-key-user.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: RenewLicenceKeyUserComponent */

  /***/
  function srcAppUserRenewLicenceKeyUserRenewLicenceKeyUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenewLicenceKeyUserComponent", function () {
      return RenewLicenceKeyUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RenewLicenceKeyUserComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r138 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r138.customerName);
      }
    }

    function RenewLicenceKeyUserComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r139 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r139.ProductFamily);
      }
    }

    var RenewLicenceKeyUserComponent =
    /*#__PURE__*/
    function () {
      function RenewLicenceKeyUserComponent(myServices) {
        _classCallCheck(this, RenewLicenceKeyUserComponent);

        this.myServices = myServices;
      }

      _createClass(RenewLicenceKeyUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customerName = this.myServices.ViewLog;
        }
      }]);

      return RenewLicenceKeyUserComponent;
    }();

    RenewLicenceKeyUserComponent.ɵfac = function RenewLicenceKeyUserComponent_Factory(t) {
      return new (t || RenewLicenceKeyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    RenewLicenceKeyUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RenewLicenceKeyUserComponent,
      selectors: [["app-renew-licence-key-user"]],
      decls: 89,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "form_main"], [1, "text-center", "text-info"], [1, "main_form", "mb-3"], [1, "ng-invalid", "ng-dirty", "ng-touched"], [1, "col-lg-5"], [1, "form-group"], ["for", ""], [1, "inpul-field"], ["id", "my-select", "disabled", "", "name", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "my-select", "name", "", 1, "form-control"], [1, "col-lg-2"], [1, "button_btn", "text-left"], [1, "btn", "btn-outline-success"], [1, "col-lg-12"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["type", "text", "disabled", "", "placeholder", "Old Expiration Period", 1, "form-control"], ["type", "text", "placeholder", "New Expiration Period", 1, "form-control"], [1, "btn", "ui-button-icon-only"]],
      template: function RenewLicenceKeyUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Renew Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RenewLicenceKeyUserComponent_option_15_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RenewLicenceKeyUserComponent_option_22_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Old Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New Expiration Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Generate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Export XLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1B2CFF9E2566EFF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1B2CFF9E2566EGG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "1B2CFF9E2566EHH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Export as XLS");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding: 0;\n  float: none;\n  text-align: center;\n  background: none;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%] {\n  color: #0a0ad8;\n  font-size: 12px;\n  padding: 4px 8px;\n  border: 1px solid #0a0ad8;\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #0e6cbd;\n  border: 1px solid #0e6cbd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border: 1px solid #28a745;\n  box-shadow: none;\n  outline: none;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n\n.form_main[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  padding: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n  color: #333 !important;\n  padding: 10px 0;\n  margin-bottom: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  box-shadow: none;\n  border: 1px solid #ddd;\n  padding: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  max-width: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin-bottom: 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  display: inline-block;\n  font-size: 15px;\n  color: #333;\n  width: 100%;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1.4px solid green;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1.4px solid #ddd;\n  box-shadow: none;\n  width: 100%;\n  float: inherit;\n  padding: 5px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 47px;\n  cursor: pointer;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button_btn.text-center[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n  width: 20%;\n  margin-top: 36px;\n  display: inline-block;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  border: 1px solid #0e6cbd;\n  background: no-repeat;\n  color: #0e6cbd;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0e6cbd;\n  border-color: #0e6cbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZW5ldy1saWNlbmNlLWtleS11c2VyL0M6XFxVc2Vyc1xcSmFtc2hlZCBBaG1hZFxcRGVza3RvcFxcRWZrb24gTGF0ZXN0MlxcZWZrb24tbGljZW5jZS1rZXkvc3JjXFxhcHBcXHVzZXJcXHJlbmV3LWxpY2VuY2Uta2V5LXVzZXJcXHJlbmV3LWxpY2VuY2Uta2V5LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcmVuZXctbGljZW5jZS1rZXktdXNlci9yZW5ldy1saWNlbmNlLWtleS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNHUjs7QURGUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSVo7O0FERlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJWjs7QURIWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS2hCOztBREZRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0laOztBREhZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNLaEI7O0FEREk7RUFDSSwrQkFBQTtBQ0dSOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURESTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0laOztBREhZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0toQjs7QURKZ0I7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNNcEI7O0FESGdCO0VBQ0ksdUJBQUE7QUNLcEI7O0FERmdCO0VBQ0kseUJBQUE7QUNJcEI7O0FERGdCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0dwQjs7QUREZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0dwQjs7QURDWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDaEI7O0FEQ1k7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ2hCOztBREFnQjtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFcEI7O0FERG9CO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNHeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlbmV3LWxpY2VuY2Uta2V5LXVzZXIvcmVuZXctbGljZW5jZS1rZXktdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYWQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhZDg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm1fbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcbiAgICAudGV4dC1pbmZvIHtcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5fZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMS40cHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5uZy12YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjRweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhLWV5ZS1zbGFzaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDdweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXR0b25fYnRuLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNze1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnBhZGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4udGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnRhYmxlIHRkIGlucHV0LmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgdGQgYnV0dG9uLmJ0bi51aS1idXR0b24taWNvbi1vbmx5IHtcbiAgY29sb3I6ICMwYTBhZDg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMGFkODtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50YWJsZSB0ZCBidXR0b24uYnRuLnVpLWJ1dHRvbi1pY29uLW9ubHk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzBlNmNiZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmNiZDtcbn1cbi50YWJsZSB0ZCAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4udGFibGUgdGQgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4YTc0NTtcbn1cbi50YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG5cbi5mb3JtX21haW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG59XG4uZm9ybV9tYWluIC50ZXh0LWluZm8ge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMS40cHggc29saWQgcmVkO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkIGdyZWVuO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMS40cHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBpbmhlcml0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCAuZmEtZXllLXNsYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiA0N3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuYnV0dG9uX2J0bi50ZXh0LWNlbnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLnRleHQtbGVmdCAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZTZjYmQ7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICMwZTZjYmQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAudGV4dC1sZWZ0IC5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZjYmQ7XG4gIGJvcmRlci1jb2xvcjogIzBlNmNiZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenewLicenceKeyUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-renew-licence-key-user',
          templateUrl: './renew-licence-key-user.component.html',
          styleUrls: ['./renew-licence-key-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/renew-user-single-license/renew-user-single-license.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/user/renew-user-single-license/renew-user-single-license.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: RenewUserSingleLicenseComponent */

  /***/
  function srcAppUserRenewUserSingleLicenseRenewUserSingleLicenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenewUserSingleLicenseComponent", function () {
      return RenewUserSingleLicenseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RenewUserSingleLicenseComponent =
    /*#__PURE__*/
    function () {
      function RenewUserSingleLicenseComponent() {
        _classCallCheck(this, RenewUserSingleLicenseComponent);
      }

      _createClass(RenewUserSingleLicenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RenewUserSingleLicenseComponent;
    }();

    RenewUserSingleLicenseComponent.ɵfac = function RenewUserSingleLicenseComponent_Factory(t) {
      return new (t || RenewUserSingleLicenseComponent)();
    };

    RenewUserSingleLicenseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RenewUserSingleLicenseComponent,
      selectors: [["app-renew-user-single-license"]],
      decls: 50,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["scope", "col", 1, "text-center"], ["type", "text", "disabled", "", "placeholder", "Old Expiration Period", 1, "form-control"], ["type", "text", "placeholder", "New Expiration Period", 1, "form-control"], [1, "btn", "ui-button-icon-only"], [1, "btn", "btn-outline-success"]],
      template: function RenewUserSingleLicenseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Old Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Expiration Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Licence Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Export XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Manish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "GREW2356");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "kl54879621");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "RLVD-GHR4-3490");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1B2CFF9E2566Ekk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  width: 120PX;\n  display: inline-block;\n  padding: 0 5PX;\n  float: none;\n  text-align: center;\n  background: none;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%] {\n  color: #0a0ad8;\n  font-size: 12px;\n  padding: 4px 8px;\n  border: 1px solid #0a0ad8;\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #0e6cbd;\n  border: 1px solid #0e6cbd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border: 1px solid #28a745;\n  box-shadow: none;\n  outline: none;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZW5ldy11c2VyLXNpbmdsZS1saWNlbnNlL0M6XFxVc2Vyc1xcSmFtc2hlZCBBaG1hZFxcRGVza3RvcFxcRWZrb24gTGF0ZXN0MlxcZWZrb24tbGljZW5jZS1rZXkvc3JjXFxhcHBcXHVzZXJcXHJlbmV3LXVzZXItc2luZ2xlLWxpY2Vuc2VcXHJlbmV3LXVzZXItc2luZ2xlLWxpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcmVuZXctdXNlci1zaW5nbGUtbGljZW5zZS9yZW5ldy11c2VyLXNpbmdsZS1saWNlbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNHUjs7QURGUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSVo7O0FERlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJWjs7QURIWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS2hCOztBREZRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0laOztBREhZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNLaEI7O0FEREk7RUFDSSwrQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZW5ldy11c2VyLXNpbmdsZS1saWNlbnNlL3JlbmV3LXVzZXItc2luZ2xlLWxpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4udGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBpbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwUFg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1UFg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYWQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhZDg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxufSIsIi5wYWRkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogIzMzMztcbn1cbi50YWJsZSB0ZCBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTIwUFg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCA1UFg7XG4gIGZsb2F0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgdGQgYnV0dG9uLmJ0bi51aS1idXR0b24taWNvbi1vbmx5IHtcbiAgY29sb3I6ICMwYTBhZDg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMGFkODtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50YWJsZSB0ZCBidXR0b24uYnRuLnVpLWJ1dHRvbi1pY29uLW9ubHk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzBlNmNiZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmNiZDtcbn1cbi50YWJsZSB0ZCAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4udGFibGUgdGQgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4YTc0NTtcbn1cbi50YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenewUserSingleLicenseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-renew-user-single-license',
          templateUrl: './renew-user-single-license.component.html',
          styleUrls: ['./renew-user-single-license.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/request-status/request-status.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/request-status/request-status.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RequestStatusComponent */

  /***/
  function srcAppUserRequestStatusRequestStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestStatusComponent", function () {
      return RequestStatusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RequestStatusComponent_tr_29_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Know Reason)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestStatusComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RequestStatusComponent_tr_29_span_19_Template, 2, 0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r161 = ctx.$implicit;
        var i_r162 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r162 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.ProductFamily);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.productCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.Version);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.LicenceType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.ExpirationPeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.StartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r161.EndDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r161.RequestStatus == "Viewed" ? "blue" : true && item_r161.RequestStatus == "Pending" ? "red" : "green");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r161.RequestStatus, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r161.RequestStatus == "Rejected");
      }
    }

    var RequestStatusComponent =
    /*#__PURE__*/
    function () {
      function RequestStatusComponent(_viewLog) {
        _classCallCheck(this, RequestStatusComponent);

        this._viewLog = _viewLog;
      }

      _createClass(RequestStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logs = this._viewLog.ViewLog;
        }
      }]);

      return RequestStatusComponent;
    }();

    RequestStatusComponent.ɵfac = function RequestStatusComponent_Factory(t) {
      return new (t || RequestStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    RequestStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestStatusComponent,
      selectors: [["app-request-status"]],
      decls: 50,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "col-lg-12"], ["action", ""], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-danger", "pull-right"], [1, "text-dark"], ["data-toggle", "modal", "data-target", "#myModal", 4, "ngIf"], [1, "text-center"], [1, "fa", "fa-edit", "text-success"], [1, "fa", "fa-trash", "text-danger"], ["data-toggle", "modal", "data-target", "#myModal"]],
      template: function RequestStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Request Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RequestStatusComponent_tr_29_Template, 26, 12, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reason of Rejection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "This project has rejected this project because the given detail is not proper. There is mistakes in many fields. Please reform it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".myButton[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  position: fixed;\n  bottom: 10px;\n  right: 0;\n}\n\n.fa-trash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background: no-repeat;\n  font-size: 15px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXF1ZXN0LXN0YXR1cy9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFxyZXF1ZXN0LXN0YXR1c1xccmVxdWVzdC1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcmVxdWVzdC1zdGF0dXMvcmVxdWVzdC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlcXVlc3Qtc3RhdHVzL3JlcXVlc3Qtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15QnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmEtdHJhc2gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59IiwiLm15QnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMDtcbn1cblxuLmZhLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-request-status',
          templateUrl: './request-status.component.html',
          styleUrls: ['./request-status.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/update-licence-key-user/update-licence-key-user.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/user/update-licence-key-user/update-licence-key-user.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UpdateLicenceKeyUserComponent */

  /***/
  function srcAppUserUpdateLicenceKeyUserUpdateLicenceKeyUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateLicenceKeyUserComponent", function () {
      return UpdateLicenceKeyUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateLicenceKeyUserComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r142 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r142.customerName);
      }
    }

    function UpdateLicenceKeyUserComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r143 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r143.ProductFamily);
      }
    }

    var UpdateLicenceKeyUserComponent =
    /*#__PURE__*/
    function () {
      function UpdateLicenceKeyUserComponent(myServices) {
        _classCallCheck(this, UpdateLicenceKeyUserComponent);

        this.myServices = myServices;
        this.model = [];
        this.btnDisable = true;
        this.value = true;
      }

      _createClass(UpdateLicenceKeyUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customerName = this.myServices.ViewLog;
        }
      }, {
        key: "formSubmit",
        value: function formSubmit() {
          if (this.model.UniqueAccess === null) {} else {
            this.btnDisable = !this.btnDisable;
          }
        }
      }, {
        key: "generateRandomKey",
        value: function generateRandomKey() {
          var randomNum = Math.random() * 100;
          var newRandom = "RLVD-06FG-ASDF" + Math.trunc(randomNum);
          this.value = !this.value;
          this.myval = newRandom;
        }
      }]);

      return UpdateLicenceKeyUserComponent;
    }();

    UpdateLicenceKeyUserComponent.ɵfac = function UpdateLicenceKeyUserComponent_Factory(t) {
      return new (t || UpdateLicenceKeyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    UpdateLicenceKeyUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateLicenceKeyUserComponent,
      selectors: [["app-update-licence-key-user"]],
      decls: 89,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "form_main"], [1, "text-center", "text-info"], [1, "main_form", "mb-3"], [1, "ng-invalid", "ng-dirty", "ng-touched"], [1, "col-lg-5"], [1, "form-group"], ["for", ""], [1, "inpul-field"], ["id", "my-select", "name", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "col-lg-2"], [1, "button_btn", "text-left"], [1, "btn", "btn-outline-success"], [1, "col-li-12"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["type", "text", "placeholder", "Unique Access ID", 1, "form-control"], [1, "btn", "ui-button-icon-only"]],
      template: function UpdateLicenceKeyUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UpdateLicenceKeyUserComponent_option_15_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UpdateLicenceKeyUserComponent_option_22_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New Unique ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New Licence Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Generate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Export XLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1B2CFF9E2566EFF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1B2CFF9E2566Ekk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1B2CFF9E2566EGG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1B2CFF9E2566Ekk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "1B2CFF9E2566EHH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "1B2CFF9E2566Ekk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Export as XLS");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customerName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding: 0;\n  float: none;\n  text-align: center;\n  background: none;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%] {\n  color: #0a0ad8;\n  font-size: 12px;\n  padding: 4px 8px;\n  border: 1px solid #0a0ad8;\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #0e6cbd;\n  border: 1px solid #0e6cbd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border: 1px solid #28a745;\n  box-shadow: none;\n  outline: none;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n\n.form_main[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  padding: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n  color: #333 !important;\n  padding: 10px 0;\n  margin-bottom: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n  box-shadow: none;\n  border: 1px solid #ddd;\n  padding: 15px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  max-width: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin-bottom: 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  display: inline-block;\n  font-size: 15px;\n  color: #333;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.form-control.ng-untouched.ng-pristine[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: inherit;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  float: left;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%] {\n  border: 1.4px solid green;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1.4px solid #ddd;\n  box-shadow: none;\n  width: 100%;\n  float: inherit;\n  padding: 5px;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 47px;\n  cursor: pointer;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button_btn.text-center[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n  width: 20%;\n  margin-top: 36px;\n  display: inline-block;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  border: 1px solid #0e6cbd;\n  background: no-repeat;\n  color: #0e6cbd;\n  box-shadow: none;\n}\n\n.form_main[_ngcontent-%COMP%]   .main_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0e6cbd;\n  border-color: #0e6cbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUtbGljZW5jZS1rZXktdXNlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx1cGRhdGUtbGljZW5jZS1rZXktdXNlclxcdXBkYXRlLWxpY2VuY2Uta2V5LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXBkYXRlLWxpY2VuY2Uta2V5LXVzZXIvdXBkYXRlLWxpY2VuY2Uta2V5LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNJWjs7QURGUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0laOztBREhZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLaEI7O0FERlE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSVo7O0FESFk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0toQjs7QURESTtFQUNJLCtCQUFBO0FDR1I7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEREk7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0dSOztBRERJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDR1I7O0FERlE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSVo7O0FESFk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDS2hCOztBREpnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTXBCOztBREpnQjtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNNcEI7O0FESmdCO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTXBCOztBREpnQjtFQUNJLHVCQUFBO0FDTXBCOztBREhnQjtFQUNJLHlCQUFBO0FDS3BCOztBREZnQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNJcEI7O0FERmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNJcEI7O0FEQVk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRWhCOztBREFZO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0VoQjs7QUREZ0I7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR3BCOztBREZvQjtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDSXhCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91cGRhdGUtbGljZW5jZS1rZXktdXNlci91cGRhdGUtbGljZW5jZS1rZXktdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYWQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhZDg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm1fbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcbiAgICAudGV4dC1pbmZvIHtcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5fZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuZm9ybS1jb250cm9sLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmZvcm0tY29udHJvbC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDEuNHB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5wdXQubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMS40cHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMS40cHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mYS1leWUtc2xhc2gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnV0dG9uX2J0bi50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWxlZnQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAuYnRuLW91dGxpbmUtc3VjY2Vzc3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBlNmNiZDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmNiZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGU2Y2JkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIucGFkZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgY29sb3I6ICMzMzM7XG59XG4udGFibGUgdGQgaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZSB0ZCBidXR0b24uYnRuLnVpLWJ1dHRvbi1pY29uLW9ubHkge1xuICBjb2xvcjogIzBhMGFkODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYWQ4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRhYmxlIHRkIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMGU2Y2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xufVxuLnRhYmxlIHRkIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi50YWJsZSB0ZCAuYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xufVxuLnRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbn1cblxuLmZvcm1fbWFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogaW5oZXJpdDtcbn1cbi5mb3JtX21haW4gLnRleHQtaW5mbyB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzMzM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQuZm9ybS1jb250cm9sLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBpbmhlcml0O1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0LmZvcm0tY29udHJvbC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtX21haW4gLm1haW5fZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMS40cHggc29saWQgcmVkO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQubmctdmFsaWQge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkIGdyZWVuO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMS40cHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBpbmhlcml0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuZm9ybS1ncm91cCAuZmEtZXllLXNsYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiA0N3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAuYnV0dG9uX2J0bi50ZXh0LWNlbnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZvcm1fbWFpbiAubWFpbl9mb3JtIGZvcm0gLnRleHQtbGVmdCAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZTZjYmQ7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICMwZTZjYmQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybV9tYWluIC5tYWluX2Zvcm0gZm9ybSAudGV4dC1sZWZ0IC5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZjYmQ7XG4gIGJvcmRlci1jb2xvcjogIzBlNmNiZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateLicenceKeyUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-licence-key-user',
          templateUrl: './update-licence-key-user.component.html',
          styleUrls: ['./update-licence-key-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/update-request/update-request.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/update-request/update-request.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateRequestComponent */

  /***/
  function srcAppUserUpdateRequestUpdateRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRequestComponent", function () {
      return UpdateRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function UpdateRequestComponent_div_97_Template(rf, ctx) {
      if (rf & 1) {
        var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter Period");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateRequestComponent_div_97_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r167.getChangeEventdate($event);
        })("ngModelChange", function UpdateRequestComponent_div_97_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r169.model.period = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r165.model.period);
      }
    }

    function UpdateRequestComponent_div_99_Template(rf, ctx) {
      if (rf & 1) {
        var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_div_99_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r170.model.endDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r166.model.endDate);
      }
    }

    var UpdateRequestComponent =
    /*#__PURE__*/
    function () {
      function UpdateRequestComponent(projectCreateServices) {
        _classCallCheck(this, UpdateRequestComponent);

        this.projectCreateServices = projectCreateServices;
        this.checked = false;
        this.password = true;
        this.eyeStatus = false;
        this.model = {};
        this.ShowPeriod = false;
        this.ProjectData = [];
      }

      _createClass(UpdateRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // for password show and hide

      }, {
        key: "onEyeClick",
        value: function onEyeClick() {
          this.eyeStatus = !this.eyeStatus;
          this.password = !this.password;
        } //  for limited date show textfield

      }, {
        key: "onChangeExp",
        value: function onChangeExp(events) {
          this.eventVal = events.target.value;

          if (this.eventVal === '2') {
            this.ShowPeriod = !this.ShowPeriod;
          } else if (this.eventVal === '1') {
            this.ShowPeriod = !this.ShowPeriod;
          }
        }
      }, {
        key: "formSubmit",
        value: function formSubmit() {
          if (!this.ProjectData.length) {
            this.ProjectData.push({
              customername: this.model.customername,
              productFAmily: this.model.productFamily,
              productCode: this.model.productCode,
              Version: this.model.version,
              LicenceType: this.model.LicenceType,
              Users: this.model.users,
              ExpPeriod: this.model.expPeriod,
              StartDate: this.model.date1,
              Period: this.model.period,
              EndDate: this.model.endDate
            });
          }

          console.log(this.ProjectData);
        }
      }, {
        key: "getChangeEventdate",
        value: function getChangeEventdate(event) {
          var x = event.target.value;
          var y = parseInt(x);
          var StartDate = this.model.date1 ? new Date(this.model.date1) : new Date();
          StartDate.setMonth(StartDate.getMonth() + y);
          var year = StartDate.getFullYear();
          var day = StartDate.getDate();
          var month = 1 + StartDate.getMonth();
          var fullDate = year + '-' + (month >= 10 ? month : '0' + month) + '-' + day;
          console.log(fullDate);
          this.model.endDate = fullDate;
          console.log("Date after " + y + " months:", month + "/" + day + "/" + year);
        }
      }]);

      return UpdateRequestComponent;
    }();

    UpdateRequestComponent.ɵfac = function UpdateRequestComponent_Factory(t) {
      return new (t || UpdateRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    UpdateRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateRequestComponent,
      selectors: [["app-update-request"]],
      decls: 108,
      vars: 9,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12"], [1, "form_main"], [1, "main_form", "mb-3"], [1, "text-center", "text-info"], [1, "mt-4", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-lg-6"], [1, "form-group"], ["for", "userId", 1, "col-form-label"], [1, "text-muted"], [1, "input-field"], ["type", "text", "disabled", "", "value", "Noida_Htms", 1, "form-control"], ["name", "productFamily", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "EES"], ["value", "ITMS"], ["value", "HTMS"], ["value", "TMS"], ["name", "productCode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "RLVD"], ["value", "SVD"], ["value", "ANPR"], ["type", "text", "name", "version", "id", "inputEmail3", "placeholder", "Version", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "LicenceType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "text", "name", "users", "id", "inputEmail3", "placeholder", "Users", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "col-form-label"], ["name", "expPeriod", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "date", "name", "date1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "col-lg-12", "text-center"], [1, "form-group", "mt-4"], ["type", "submit", 1, "btn", "btn-outline-info", "ml-3"], [1, "fa", "fa-check"], ["type", "button", "routerLink", "/user/viewProjectUser", 1, "btn", "btn-outline-danger", "ml-3"], [1, "fa", "fa-times"], ["type", "text", "name", "period", "id", "abc", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "date", "disabled", "", "name", "endDate", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function UpdateRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateRequestComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.formSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_select_ngModelChange_23_listener($event) {
            return ctx.model.productFamily = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Choose Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "EES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ITMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "HTMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_select_ngModelChange_40_listener($event) {
            return ctx.model.productCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Choose Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "RLVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "SVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ANPR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.model.version = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_select_ngModelChange_62_listener($event) {
            return ctx.model.LicenceType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Choose Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "RLVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "SVD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ANPR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_input_ngModelChange_77_listener($event) {
            return ctx.model.users = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Exp. Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_select_ngModelChange_84_listener($event) {
            return ctx.model.expPeriod = $event;
          })("change", function UpdateRequestComponent_Template_select_change_84_listener($event) {
            return ctx.onChangeExp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "LifeTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Limited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRequestComponent_Template_input_ngModelChange_95_listener($event) {
            return ctx.model.date1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, UpdateRequestComponent_div_97_Template, 6, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, UpdateRequestComponent_div_99_Template, 6, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Request for Licence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Cancel");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.productFamily);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.productCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.version);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.LicenceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.expPeriod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.date1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowPeriod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowPeriod);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".fa-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1.4px solid red;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #7a7272;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUtcmVxdWVzdC9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx1cGRhdGUtcmVxdWVzdFxcdXBkYXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXBkYXRlLXJlcXVlc3QvdXBkYXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNDSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREhBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXBkYXRlLXJlcXVlc3QvdXBkYXRlLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtZXllIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDExNCwgMTE0KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0iLCIuZmEtZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMnB4O1xufVxuXG4uZmEtZXllLXNsYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMnB4O1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkIHJlZDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjN2E3MjcyO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-request',
          templateUrl: './update-request.component.html',
          styleUrls: ['./update-request.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/update-user-single-license/update-user-single-license.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/user/update-user-single-license/update-user-single-license.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: UpdateUserSingleLicenseComponent */

  /***/
  function srcAppUserUpdateUserSingleLicenseUpdateUserSingleLicenseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserSingleLicenseComponent", function () {
      return UpdateUserSingleLicenseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UpdateUserSingleLicenseComponent =
    /*#__PURE__*/
    function () {
      function UpdateUserSingleLicenseComponent() {
        _classCallCheck(this, UpdateUserSingleLicenseComponent);
      }

      _createClass(UpdateUserSingleLicenseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateUserSingleLicenseComponent;
    }();

    UpdateUserSingleLicenseComponent.ɵfac = function UpdateUserSingleLicenseComponent_Factory(t) {
      return new (t || UpdateUserSingleLicenseComponent)();
    };

    UpdateUserSingleLicenseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateUserSingleLicenseComponent,
      selectors: [["app-update-user-single-license"]],
      decls: 46,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["type", "text", "placeholder", "Unique Access ID", 1, "form-control"], [1, "btn", "ui-button-icon-only"], [1, "btn", "btn-outline-success"]],
      template: function UpdateUserSingleLicenseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Old Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "New Unique ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Licence Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Export XLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Manish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "GREW2356");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "kl54879621");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "RLVD-GHR4-3490");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1B2CFF9E2566Ekk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Export as XLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".padd[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #333;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding: 0 5PX;\n  float: none;\n  text-align: center;\n  background: none;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%] {\n  color: #0a0ad8;\n  font-size: 12px;\n  padding: 4px 8px;\n  border: 1px solid #0a0ad8;\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n  box-shadow: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.btn.ui-button-icon-only[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #0e6cbd;\n  border: 1px solid #0e6cbd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border: 1px solid #28a745;\n  box-shadow: none;\n  outline: none;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci1zaW5nbGUtbGljZW5zZS9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx1cGRhdGUtdXNlci1zaW5nbGUtbGljZW5zZVxcdXBkYXRlLXVzZXItc2luZ2xlLWxpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXBkYXRlLXVzZXItc2luZ2xlLWxpY2Vuc2UvdXBkYXRlLXVzZXItc2luZ2xlLWxpY2Vuc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNJWjs7QURGUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0laOztBREhZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLaEI7O0FERlE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSVo7O0FESFk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0toQjs7QURESTtFQUNJLCtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VwZGF0ZS11c2VyLXNpbmdsZS1saWNlbnNlL3VwZGF0ZS11c2VyLXNpbmdsZS1saWNlbnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgaW5wdXQuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1UFg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGEwYWQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTBhZDg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTZjYmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIH1cclxufSIsIi5wYWRkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogIzMzMztcbn1cbi50YWJsZSB0ZCBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDVQWDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZSB0ZCBidXR0b24uYnRuLnVpLWJ1dHRvbi1pY29uLW9ubHkge1xuICBjb2xvcjogIzBhMGFkODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGEwYWQ4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRhYmxlIHRkIGJ1dHRvbi5idG4udWktYnV0dG9uLWljb24tb25seTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMGU2Y2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2Y2JkO1xufVxuLnRhYmxlIHRkIC5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi50YWJsZSB0ZCAuYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xufVxuLnRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateUserSingleLicenseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-user-single-license',
          templateUrl: './update-user-single-license.component.html',
          styleUrls: ['./update-user-single-license.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _generate_licence_user_generate_licence_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generate-licence-user/generate-licence-user.component */
    "./src/app/user/generate-licence-user/generate-licence-user.component.ts");
    /* harmony import */


    var _renew_licence_key_user_renew_licence_key_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./renew-licence-key-user/renew-licence-key-user.component */
    "./src/app/user/renew-licence-key-user/renew-licence-key-user.component.ts");
    /* harmony import */


    var _update_licence_key_user_update_licence_key_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-licence-key-user/update-licence-key-user.component */
    "./src/app/user/update-licence-key-user/update-licence-key-user.component.ts");
    /* harmony import */


    var _view_project_user_view_project_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-project-user/view-project-user.component */
    "./src/app/user/view-project-user/view-project-user.component.ts");
    /* harmony import */


    var _view_licence_keylogs_user_view_licence_keylogs_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view-licence-keylogs-user/view-licence-keylogs-user.component */
    "./src/app/user/view-licence-keylogs-user/view-licence-keylogs-user.component.ts");
    /* harmony import */


    var _chnage_password_user_chnage_password_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chnage-password-user/chnage-password-user.component */
    "./src/app/user/chnage-password-user/chnage-password-user.component.ts");
    /* harmony import */


    var _view_licence_user_view_licence_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-licence-user/view-licence-user.component */
    "./src/app/user/view-licence-user/view-licence-user.component.ts");
    /* harmony import */


    var _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./request-status/request-status.component */
    "./src/app/user/request-status/request-status.component.ts");
    /* harmony import */


    var _update_request_update_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./update-request/update-request.component */
    "./src/app/user/update-request/update-request.component.ts");
    /* harmony import */


    var _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./create-licence-request-key-user/request-licence-key-user.component */
    "./src/app/user/create-licence-request-key-user/request-licence-key-user.component.ts");
    /* harmony import */


    var _update_user_single_license_update_user_single_license_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./update-user-single-license/update-user-single-license.component */
    "./src/app/user/update-user-single-license/update-user-single-license.component.ts");
    /* harmony import */


    var _renew_user_single_license_renew_user_single_license_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./renew-user-single-license/renew-user-single-license.component */
    "./src/app/user/renew-user-single-license/renew-user-single-license.component.ts"); // import { RequestLicenceKeyUserComponent } from './request-licence-key-user/request-licence-key-user.component';


    var routes = [{
      path: '',
      component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: '',
        redirectTo: 'viewProjectUser',
        pathMatch: 'full'
      }, {
        path: 'generateLicence',
        component: _generate_licence_user_generate_licence_user_component__WEBPACK_IMPORTED_MODULE_4__["GenerateLicenceUserComponent"]
      }, {
        path: 'renewUser',
        component: _renew_licence_key_user_renew_licence_key_user_component__WEBPACK_IMPORTED_MODULE_5__["RenewLicenceKeyUserComponent"]
      }, {
        path: 'requestUser',
        component: _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_13__["RequestLicenceKeyUserComponent"]
      }, {
        path: 'updateUser',
        component: _update_licence_key_user_update_licence_key_user_component__WEBPACK_IMPORTED_MODULE_6__["UpdateLicenceKeyUserComponent"]
      }, {
        path: 'viewProjectUser',
        component: _view_project_user_view_project_user_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectUserComponent"]
      }, {
        path: 'viewLicenceskeyLogsUser',
        component: _view_licence_keylogs_user_view_licence_keylogs_user_component__WEBPACK_IMPORTED_MODULE_8__["ViewLicenceKeylogsUserComponent"]
      }, {
        path: 'changeUserpsw',
        component: _chnage_password_user_chnage_password_user_component__WEBPACK_IMPORTED_MODULE_9__["ChnagePasswordUserComponent"]
      }, {
        path: 'viewUserLicence',
        component: _view_licence_user_view_licence_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewLicenceUserComponent"]
      }, {
        path: 'requestStatus',
        component: _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_11__["RequestStatusComponent"]
      }, {
        path: 'updateRequest',
        component: _update_request_update_request_component__WEBPACK_IMPORTED_MODULE_12__["UpdateRequestComponent"]
      }, {
        path: 'updateUserSingleLicense',
        component: _update_user_single_license_update_user_single_license_component__WEBPACK_IMPORTED_MODULE_14__["UpdateUserSingleLicenseComponent"]
      }, {
        path: 'reneweUserSingleLicense',
        component: _renew_user_single_license_renew_user_single_license_component__WEBPACK_IMPORTED_MODULE_15__["RenewUserSingleLicenseComponent"]
      }]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRoutingModule_Factory(t) {
        return new (t || UserRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    function UserComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Request Licence Key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(roter) {
        _classCallCheck(this, UserComponent);

        this.roter = roter;
        this.submenu = false;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#wrapper").toggleClass("toggled");
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          window.localStorage.removeItem('UserId');
          window.localStorage.removeItem('password');
          this.roter.navigate(['/login']);
        }
      }, {
        key: "subMenu1",
        value: function subMenu1() {
          this.submenu = !this.submenu;
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 37,
      vars: 3,
      consts: [["id", "wrapper"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "", 1, "logo"], [1, "list-group", "list-group-flush"], ["routerLink", "/user/viewProjectUser", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", 3, "click"], [1, "fa", "fa-chevron-down", "ml-6"], [4, "ngIf"], ["routerLink", "/user/viewLicenceskeyLogsUser", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["routerLink", "/user/requestStatus", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["routerLink", "/user/changeUserpsw", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light"], ["id", "page-content-wrapper"], [1, "header_main"], [1, "Toggle_button"], ["_ngcontent-dek-c51", "", "id", "menu-toggle"], ["_ngcontent-dek-c51", "", "aria-hidden", "true", 1, "fa", "fa-bars"], [1, "manu"], ["src", "assets/img/avatar.jpeg", "alt", "", 1, "img-fluid", "userImage", 2, "width", "50px", "height", "50px"], ["href", "#", 2, "cursor", "pointer", 3, "click"], ["_ngcontent-tuf-c51", "", "aria-hidden", "true", 1, "fa", "fa-sign-out"], [1, "container-fluid"], [1, "middle-content"], [1, "dropdown_sidebar"], ["routerLinkActive", "check_menu", "routerLink", "/user/viewUserLicence", 3, "routerLinkActiveOptions"], [1, "fa", "fa-check"], ["routerLinkActive", "check_menu", "routerLink", "/user/updateUser"], ["routerLinkActive", "check_menu", "routerLink", "/user/renewUser"], ["routerLinkActive", "check_menu", "routerLink", "/user/requestUser"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_li_click_9_listener($event) {
            return ctx.subMenu1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Licence ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserComponent_div_12_Template, 15, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Licence Key Log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Request Status");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_a_click_31_listener($event) {
            return ctx.logout();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenu);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #17a2b8;\n}\n\n.toggled[_ngcontent-%COMP%]   #page-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #17a2b8 !important;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  position: relative;\n  float: right;\n  display: inline-block;\n  max-width: 100%;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: -17rem;\n}\n\n.submenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUNJSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUdBLGlDQUFBO0FDSUo7O0FEREE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3YTJiODtcclxufVxyXG4udG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udXNlckltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjghaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3cmVtO1xyXG59XHJcblxyXG4uc3VibWVudSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiIsIi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxN2EyYjg7XG59XG5cbi50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VySW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuI3NpZGViYXItd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcbn1cblxuLnN1Ym1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _generate_licence_user_generate_licence_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./generate-licence-user/generate-licence-user.component */
    "./src/app/user/generate-licence-user/generate-licence-user.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _view_project_user_view_project_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-project-user/view-project-user.component */
    "./src/app/user/view-project-user/view-project-user.component.ts");
    /* harmony import */


    var _update_licence_key_user_update_licence_key_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update-licence-key-user/update-licence-key-user.component */
    "./src/app/user/update-licence-key-user/update-licence-key-user.component.ts");
    /* harmony import */


    var _renew_licence_key_user_renew_licence_key_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./renew-licence-key-user/renew-licence-key-user.component */
    "./src/app/user/renew-licence-key-user/renew-licence-key-user.component.ts");
    /* harmony import */


    var _view_licence_keylogs_user_view_licence_keylogs_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-licence-keylogs-user/view-licence-keylogs-user.component */
    "./src/app/user/view-licence-keylogs-user/view-licence-keylogs-user.component.ts");
    /* harmony import */


    var _chnage_password_user_chnage_password_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./chnage-password-user/chnage-password-user.component */
    "./src/app/user/chnage-password-user/chnage-password-user.component.ts");
    /* harmony import */


    var _view_licence_user_view_licence_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./view-licence-user/view-licence-user.component */
    "./src/app/user/view-licence-user/view-licence-user.component.ts");
    /* harmony import */


    var _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./request-status/request-status.component */
    "./src/app/user/request-status/request-status.component.ts");
    /* harmony import */


    var _update_request_update_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./update-request/update-request.component */
    "./src/app/user/update-request/update-request.component.ts");
    /* harmony import */


    var _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./create-licence-request-key-user/request-licence-key-user.component */
    "./src/app/user/create-licence-request-key-user/request-licence-key-user.component.ts");
    /* harmony import */


    var _update_user_single_license_update_user_single_license_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./update-user-single-license/update-user-single-license.component */
    "./src/app/user/update-user-single-license/update-user-single-license.component.ts");
    /* harmony import */


    var _renew_user_single_license_renew_user_single_license_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./renew-user-single-license/renew-user-single-license.component */
    "./src/app/user/renew-user-single-license/renew-user-single-license.component.ts"); // import { RequestLicenceKeyUserComponent } from './request-licence-key-user/request-licence-key-user.component';


    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _generate_licence_user_generate_licence_user_component__WEBPACK_IMPORTED_MODULE_4__["GenerateLicenceUserComponent"], _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_15__["RequestLicenceKeyUserComponent"], _view_project_user_view_project_user_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectUserComponent"], _update_licence_key_user_update_licence_key_user_component__WEBPACK_IMPORTED_MODULE_8__["UpdateLicenceKeyUserComponent"], _renew_licence_key_user_renew_licence_key_user_component__WEBPACK_IMPORTED_MODULE_9__["RenewLicenceKeyUserComponent"], _view_licence_keylogs_user_view_licence_keylogs_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewLicenceKeylogsUserComponent"], _chnage_password_user_chnage_password_user_component__WEBPACK_IMPORTED_MODULE_11__["ChnagePasswordUserComponent"], _view_licence_user_view_licence_user_component__WEBPACK_IMPORTED_MODULE_12__["ViewLicenceUserComponent"], _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_13__["RequestStatusComponent"], _update_request_update_request_component__WEBPACK_IMPORTED_MODULE_14__["UpdateRequestComponent"], _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_15__["RequestLicenceKeyUserComponent"], _update_user_single_license_update_user_single_license_component__WEBPACK_IMPORTED_MODULE_16__["UpdateUserSingleLicenseComponent"], _renew_user_single_license_renew_user_single_license_component__WEBPACK_IMPORTED_MODULE_17__["RenewUserSingleLicenseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _generate_licence_user_generate_licence_user_component__WEBPACK_IMPORTED_MODULE_4__["GenerateLicenceUserComponent"], _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_15__["RequestLicenceKeyUserComponent"], _view_project_user_view_project_user_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectUserComponent"], _update_licence_key_user_update_licence_key_user_component__WEBPACK_IMPORTED_MODULE_8__["UpdateLicenceKeyUserComponent"], _renew_licence_key_user_renew_licence_key_user_component__WEBPACK_IMPORTED_MODULE_9__["RenewLicenceKeyUserComponent"], _view_licence_keylogs_user_view_licence_keylogs_user_component__WEBPACK_IMPORTED_MODULE_10__["ViewLicenceKeylogsUserComponent"], _chnage_password_user_chnage_password_user_component__WEBPACK_IMPORTED_MODULE_11__["ChnagePasswordUserComponent"], _view_licence_user_view_licence_user_component__WEBPACK_IMPORTED_MODULE_12__["ViewLicenceUserComponent"], _request_status_request_status_component__WEBPACK_IMPORTED_MODULE_13__["RequestStatusComponent"], _update_request_update_request_component__WEBPACK_IMPORTED_MODULE_14__["UpdateRequestComponent"], _create_licence_request_key_user_request_licence_key_user_component__WEBPACK_IMPORTED_MODULE_15__["RequestLicenceKeyUserComponent"], _update_user_single_license_update_user_single_license_component__WEBPACK_IMPORTED_MODULE_16__["UpdateUserSingleLicenseComponent"], _renew_user_single_license_renew_user_single_license_component__WEBPACK_IMPORTED_MODULE_17__["RenewUserSingleLicenseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/view-licence-keylogs-user/view-licence-keylogs-user.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/user/view-licence-keylogs-user/view-licence-keylogs-user.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ViewLicenceKeylogsUserComponent */

  /***/
  function srcAppUserViewLicenceKeylogsUserViewLicenceKeylogsUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLicenceKeylogsUserComponent", function () {
      return ViewLicenceKeylogsUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewLicenceKeylogsUserComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r148 = ctx.$implicit;
        var i_r149 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r149 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.customerName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.uniqueAccessId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.LicenceDistributed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.productCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.LicenceType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.ExpirationPeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.StartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.EndDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.Createdat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r148.LastModified);
      }
    }

    var ViewLicenceKeylogsUserComponent =
    /*#__PURE__*/
    function () {
      function ViewLicenceKeylogsUserComponent(_viewLog) {
        _classCallCheck(this, ViewLicenceKeylogsUserComponent);

        this._viewLog = _viewLog;
      }

      _createClass(ViewLicenceKeylogsUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logs = this._viewLog.ViewLog;
        }
      }]);

      return ViewLicenceKeylogsUserComponent;
    }();

    ViewLicenceKeylogsUserComponent.ɵfac = function ViewLicenceKeylogsUserComponent_Factory(t) {
      return new (t || ViewLicenceKeylogsUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    ViewLicenceKeylogsUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewLicenceKeylogsUserComponent,
      selectors: [["app-view-licence-keylogs-user"]],
      decls: 32,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "table", "table-bordered"], [1, "users_table_hader"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
      template: function ViewLicenceKeylogsUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Unique Access Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Licence Distributed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Created At");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last Modified");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewLicenceKeylogsUserComponent_tr_31_Template, 25, 12, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".myButton[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LWxpY2VuY2Uta2V5bG9ncy11c2VyL0M6XFxVc2Vyc1xcSmFtc2hlZCBBaG1hZFxcRGVza3RvcFxcRWZrb24gTGF0ZXN0MlxcZWZrb24tbGljZW5jZS1rZXkvc3JjXFxhcHBcXHVzZXJcXHZpZXctbGljZW5jZS1rZXlsb2dzLXVzZXJcXHZpZXctbGljZW5jZS1rZXlsb2dzLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdmlldy1saWNlbmNlLWtleWxvZ3MtdXNlci92aWV3LWxpY2VuY2Uta2V5bG9ncy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci92aWV3LWxpY2VuY2Uta2V5bG9ncy11c2VyL3ZpZXctbGljZW5jZS1rZXlsb2dzLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlCdXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn0iLCIubXlCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLicenceKeylogsUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-licence-keylogs-user',
          templateUrl: './view-licence-keylogs-user.component.html',
          styleUrls: ['./view-licence-keylogs-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/view-licence-user/view-licence-user.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/user/view-licence-user/view-licence-user.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ViewLicenceUserComponent */

  /***/
  function srcAppUserViewLicenceUserViewLicenceUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLicenceUserComponent", function () {
      return ViewLicenceUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ViewLicenceUserComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r158 = ctx.$implicit;
        var i_r159 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r159 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.uniqueAccessId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.productCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.LicenceType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r158.Licencestatus === "Active" ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.Licencestatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.ExpirationPeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.StartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r158.EndDate);
      }
    }

    var ViewLicenceUserComponent =
    /*#__PURE__*/
    function () {
      function ViewLicenceUserComponent(_viewLog) {
        _classCallCheck(this, ViewLicenceUserComponent);

        this._viewLog = _viewLog;
      }

      _createClass(ViewLicenceUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logs = this._viewLog.ViewLog;
        }
      }]);

      return ViewLicenceUserComponent;
    }();

    ViewLicenceUserComponent.ɵfac = function ViewLicenceUserComponent_Factory(t) {
      return new (t || ViewLicenceUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    ViewLicenceUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewLicenceUserComponent,
      selectors: [["app-view-licence-user"]],
      decls: 33,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-12", "p-0"], [1, "table", "table-hover", "table-stripped", "table-sm"], [1, "users_table_hader"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["routerLink", "/user/generateLicence", 1, "btn", "btn-info", "myButton"], [1, "fa", "fa-plus"], ["scope", "row", 1, "pl-2"], ["routerLink", "/user/updateUserSingleLicense", 1, "fa", "fa-edit", "text-success", 2, "cursor", "pointer"], ["routerLink", "/user/reneweUserSingleLicense", 1, "fa", "fa-wrench", 2, "cursor", "pointer"]],
      template: function ViewLicenceUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unique Access Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Licence Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Renew");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewLicenceUserComponent_tr_29_Template, 25, 11, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Generate New Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  background: no-repeat;\n  font-size: 15px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LWxpY2VuY2UtdXNlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx2aWV3LWxpY2VuY2UtdXNlclxcdmlldy1saWNlbmNlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdmlldy1saWNlbmNlLXVzZXIvdmlldy1saWNlbmNlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdXNlci92aWV3LWxpY2VuY2UtdXNlci92aWV3LWxpY2VuY2UtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iLCJidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLicenceUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-licence-user',
          templateUrl: './view-licence-user.component.html',
          styleUrls: ['./view-licence-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/view-project-user/view-project-user.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/user/view-project-user/view-project-user.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ViewProjectUserComponent */

  /***/
  function srcAppUserViewProjectUserViewProjectUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProjectUserComponent", function () {
      return ViewProjectUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/main/project-detail/project-detail-service.service */
    "./src/app/main/project-detail/project-detail-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ViewProjectUserComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r145 = ctx.$implicit;
        var i_r146 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r146 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.ProductFamily);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.productCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.LicenceDistributed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.Version);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.LicenceType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.ExpirationPeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.StartDate);
      }
    }

    var ViewProjectUserComponent =
    /*#__PURE__*/
    function () {
      function ViewProjectUserComponent(_myServices) {
        _classCallCheck(this, ViewProjectUserComponent);

        this._myServices = _myServices;
        this.myProjectDetail = [];
        this.alerts = false;
      }

      _createClass(ViewProjectUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myProjectDetail = this._myServices.projectDetail;
        }
      }, {
        key: "DeleteProject",
        value: function DeleteProject(i) {
          var date1 = new Date(); //  var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

          var date2 = this.myProjectDetail[i].EndDate;
          var date3 = new Date(date2);

          if (+date1 <= +date3) {
            alert('Can not delete');
          } else {
            var val = confirm("Are you sure ?");

            if (val) {
              this.myProjectDetail.splice(i, 1);
            }
          }
        }
      }]);

      return ViewProjectUserComponent;
    }();

    ViewProjectUserComponent.ɵfac = function ViewProjectUserComponent_Factory(t) {
      return new (t || ViewProjectUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]));
    };

    ViewProjectUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewProjectUserComponent,
      selectors: [["app-view-project-user"]],
      decls: 24,
      vars: 1,
      consts: [["id", "myTable", 1, "table", "table-hover", "table-stripped", "table-sm"], [1, "users_table_hader"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["routerLink", "/user/generateLicence", 1, "btn", "btn-info", "myButton"], [1, "fa", "fa-file-text-o"], ["scope", "row", 1, "text-center"], [1, "text-center"], [1, "text-dark", "text-center"]],
      template: function ViewProjectUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Licence Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Licence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expiration Period");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewProjectUserComponent_tr_20_Template, 17, 8, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Generate New Licence Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myProjectDetail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".fa-trash[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nform.form-inline.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 100%;\n}\n\nform.form-inline.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  max-width: 25%;\n}\n\nform.form-inline.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 235px;\n  max-width: 250px;\n  border: 1px solid #ddd;\n}\n\nform.form-inline.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92aWV3LXByb2plY3QtdXNlci9DOlxcVXNlcnNcXEphbXNoZWQgQWhtYWRcXERlc2t0b3BcXEVma29uIExhdGVzdDJcXGVma29uLWxpY2VuY2Uta2V5L3NyY1xcYXBwXFx1c2VyXFx2aWV3LXByb2plY3QtdXNlclxcdmlldy1wcm9qZWN0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdmlldy1wcm9qZWN0LXVzZXIvdmlldy1wcm9qZWN0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDR1I7O0FERlE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSVo7O0FESFk7RUFDSSxzQkFBQTtBQ0toQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmlldy1wcm9qZWN0LXVzZXIvdmlldy1wcm9qZWN0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtdHJhc2gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvcm0uZm9ybS1pbmxpbmUubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMjM1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuZmEtdHJhc2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0uZm9ybS1pbmxpbmUubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuZm9ybS5mb3JtLWlubGluZS5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cbmZvcm0uZm9ybS1pbmxpbmUubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMzVweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbmZvcm0uZm9ybS1pbmxpbmUubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProjectUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-project-user',
          templateUrl: './view-project-user.component.html',
          styleUrls: ['./view-project-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_main_project_detail_project_detail_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailServiceService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map