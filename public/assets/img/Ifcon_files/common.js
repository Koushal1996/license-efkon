(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/approver/users-approver/users-services.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/approver/users-approver/users-services.service.ts ***!
  \*******************************************************************/
/*! exports provided: UsersServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServicesService", function() { return UsersServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UsersServicesService {
    constructor() {
        this.users = [
            { username: 'Jamshed Ahmad', userId: "User1", MailStatus: 'Sent Successfully', Licencetype: 'Lifetime', EmailID: 'jmd.amd786@gmail.com', },
            { username: 'Rajiv Kumar', userId: "User2", MailStatus: 'Not Sent', Licencetype: 'Limited', EmailID: 'abd786@gmail.com', },
            { username: 'Shani Khan', userId: "User3", MailStatus: 'Sent Successfully', Licencetype: 'Lifetime', EmailID: 'asf786@gmail.com', },
            { username: 'Rahul Kumar', userId: "User4", MailStatus: 'Not Sent', Licencetype: 'Limited', EmailID: 'jkl786@gmail.com', },
            { username: 'Yogesh Kumar', userId: "User5", MailStatus: 'Not Sent', Licencetype: 'Lifetime', EmailID: 'xyz786@gmail.com', },
            { username: 'Preeti Verma', userId: "User6", MailStatus: 'Sent Successfully', Licencetype: 'Limited', EmailID: 'akl786@gmail.com', },
            { username: 'Raj Kumar', userId: "User7", MailStatus: 'Not Sent', Licencetype: 'Limited', EmailID: 'Amd786@gmail.com', },
            { username: 'Anjali Verma', userId: "User8", MailStatus: 'Sent Successfully', Licencetype: 'Lifetime', EmailID: 'jmd.amd786@gmail.com', },
        ];
    }
}
UsersServicesService.ɵfac = function UsersServicesService_Factory(t) { return new (t || UsersServicesService)(); };
UsersServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersServicesService, factory: UsersServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/project-detail/project-detail-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/project-detail/project-detail-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailServiceService", function() { return ProjectDetailServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectDetailServiceService {
    constructor() {
        this.projectDetail = [
            { customerName: 'VSCL', productCode: 'RLVD', ProjectStatus: 'DRAFT', ProductFamily: 'EES', LicenceDistributed: '5', Version: '	2.1', Users: 2, LicenceType: 'DEMO', ExpirationPeriod: '01 Month', StartDate: '2020-2-12', EndDate: '2020-3-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me', },
            { customerName: 'TSCL', productCode: 'ANPR', ProjectStatus: 'REJECTED', ProductFamily: 'ITMS', LicenceDistributed: '3', Version: '	2.2', Users: 3, LicenceType: 'COMMERCIAL', ExpirationPeriod: 'Lifetime', StartDate: '2017-2-12', EndDate: '---', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
            { customerName: 'ASCL', productCode: 'Spot-SVD', ProjectStatus: 'APPROVED', ProductFamily: 'HTMS', LicenceDistributed: '2', Version: '	2.3', Users: 4, LicenceType: 'COMMERCIAL', ExpirationPeriod: 'Lifetime', StartDate: '2019-2-12', EndDate: '---', Projectstate: 'Rejected', ProjectstateReview: 'Approved' },
            { customerName: 'NOIDA-HTMS', productCode: 'Section-SVD', ProjectStatus: 'PENDING', ProductFamily: 'TMS', LicenceDistributed: '4', Version: '	2.4', Users: 5, LicenceType: 'DEMO', ExpirationPeriod: '01 Month', StartDate: '2020-2-12', EndDate: '2020-3-12', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
            { customerName: 'BSCL', productCode: 'ITMS', ProjectStatus: 'REJECTED', ProductFamily: 'VTS', LicenceDistributed: '5', Version: '	2.5', Users: 6, LicenceType: 'COMMERCIAL', ExpirationPeriod: '24 Month', StartDate: '2020-2-12', EndDate: '2022-2-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me' },
            { customerName: 'Noida HTMS', productCode: 'HTMS', ProjectStatus: 'DRAFT', ProductFamily: 'ICCC', LicenceDistributed: '2', Version: '	2.6', Users: 7, LicenceType: 'DEMO', ExpirationPeriod: '12 Month', StartDate: '2020-2-12', EndDate: '2021-2-12', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
            { customerName: 'VSCL', productCode: 'AVC', ProjectStatus: 'APPROVED', ProductFamily: 'VA', LicenceDistributed: '1', Version: '	2.7', Users: 8, LicenceType: 'COMMERCIAL', ExpirationPeriod: '24 Month', StartDate: '2019-2-12', EndDate: '2021-2-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me' },
            { customerName: 'Noida HTMS', productCode: 'VATCC', ProjectStatus: 'Pending', ProductFamily: 'ATCS', LicenceDistributed: '5', Version: '	2.8', Users: 9, LicenceType: 'DEMO', ExpirationPeriod: '12 Month', StartDate: '2018-2-12', EndDate: '2019-2-12', Projectstate: 'Approved', ProjectstateReview: 'Approved' }
        ];
        this.ViewLog = [
            { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1A2CFF9E2566EFF', LicenceDistributed: '5', ProductFamily: 'EES', Version: '	2.1', Users: '2', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-12', RequestStatus: 'Rejected', ProjectStatus: 'Approved', Createdat: '2020-05-09', LastModified: '2020-02-09', Licencestatus: 'Active' },
            { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1B2CFF9E2566EFF', LicenceDistributed: '5', ProductFamily: 'EES', Version: '	2.1', Users: '2', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-12', RequestStatus: 'Pending', ProjectStatus: 'Approved', Createdat: '2020-02-09', LastModified: '---', Licencestatus: 'Active' },
            { customerName: 'VSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'ANPR', id: '1C2CFF9E2566EFF', LicenceDistributed: '3', ProductFamily: 'ETS', Version: '	2.2', Users: '3', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-01', LastModified: '2020-02-09', Licencestatus: 'Active' },
            { customerName: 'TSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Spot-SVD', id: '1D2CFF9E2566EFF', LicenceDistributed: '2', ProductFamily: 'EPS', Version: '	2.3', Users: '4', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Approved', Createdat: '2020-02-03', LastModified: '2020-02-10', Licencestatus: 'Active' },
            { customerName: 'ASCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1E2CFF9E2566EFF', LicenceDistributed: '6', ProductFamily: 'EAS', Version: '	2.4', Users: '5', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-02-18', RequestStatus: 'Pending', ProjectStatus: 'Rejected', Createdat: '2020-02-05', LastModified: '2020-02-11', Licencestatus: 'Expire' },
            { customerName: 'BSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1F2CFF9E2566EFF', LicenceDistributed: '2', ProductFamily: 'EDS', Version: '	2.5', Users: '6', LicenceType: 'Commercial', ExpirationPeriod: '12 Month', StartDate: '2020-02-12', EndDate: '2021-02-12', RequestStatus: 'Approved', ProjectStatus: 'Approved', Createdat: '2020-02-07', LastModified: '2020-02-12', Licencestatus: 'Active' },
            { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1B2CFF9E2566EFF', LicenceDistributed: '5', ProductFamily: 'EFS', Version: '	2.6', Users: '7', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-3-12', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-04', LastModified: '2020-02-13', Licencestatus: 'Active' },
            { customerName: 'VSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1G2CFF9E2566EFF', LicenceDistributed: '1', ProductFamily: 'EGS', Version: '	2.7', Users: '8', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-20', RequestStatus: 'Pending', ProjectStatus: 'Rejected', Createdat: '2020-02-09', LastModified: '2020-02-14', Licencestatus: 'Expire' },
            { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1H2CFF9E2566EFF', LicenceDistributed: '5', ProductFamily: 'EHS', Version: '	2.8', Users: '9', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-10', LastModified: '2020-02-15', Licencestatus: 'Active' }
        ];
    }
}
ProjectDetailServiceService.ɵfac = function ProjectDetailServiceService_Factory(t) { return new (t || ProjectDetailServiceService)(); };
ProjectDetailServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectDetailServiceService, factory: ProjectDetailServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map