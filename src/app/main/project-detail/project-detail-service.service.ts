import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailServiceService {

  constructor() { }

  projectDetail:any=[
    {customerName:'VSCL',productCode:'RLVD', ProjectStatus:'Draft',ProductFamily:'EES' ,LicenceDistributed: '5',Version:'	2.1',Users:'2',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-2-12',EndDate:'2020-3-12',Projectstate:'Rejected',ProjectstateReview:'Rejected By me',},
    {customerName:'TSCL',productCode:'ANPR',ProjectStatus:'Reject',ProductFamily:'ITMS',LicenceDistributed: '3',Version:'	2.2',Users:'3',LicenceType:'Commercial',ExpirationPeriod:'Lifetime',StartDate:'2017-2-12',EndDate:'---',Projectstate:'Approved',ProjectstateReview:'Rejected By Approver'},
    {customerName:'ASCL',productCode:'Spot-SVD',ProjectStatus:'Approved',ProductFamily:'HTMS',LicenceDistributed: '2',Version:'	2.3',Users:'4',LicenceType:'Commercial',ExpirationPeriod:'Lifetime',StartDate:'2019-2-12',EndDate:'---',Projectstate:'Rejected',ProjectstateReview:'Approved'},
    {customerName:'NOIDA-HTMS',productCode:'Section-SVD',ProjectStatus:'Pending',ProductFamily:'TMS',LicenceDistributed: '4',Version:'	2.4',Users:'5',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-2-12',EndDate:'2020-3-12',Projectstate:'Approved',ProjectstateReview:'Rejected By Approver'},
    {customerName:'BSCL',productCode:'ITMS',ProjectStatus:'Reject',ProductFamily:'VTS',LicenceDistributed: '5',Version:'	2.5',Users:'6',LicenceType:'Commercial',ExpirationPeriod:'24 Month',StartDate:'2020-2-12',EndDate:'2022-2-12',Projectstate:'Rejected',ProjectstateReview:'Rejected By me'},
    {customerName:'Noida HTMS',productCode:'HTMS',ProjectStatus:'Draft',ProductFamily:'ICCC',LicenceDistributed: '2',Version:'	2.6',Users:'7',LicenceType:'Demo',ExpirationPeriod:'12 Month',StartDate:'2020-2-12',EndDate:'2021-2-12',Projectstate:'Approved', ProjectstateReview:'Rejected By Approver'},
    {customerName:'VSCL',productCode:'AVC',ProjectStatus:'Approved',ProductFamily:'VA',LicenceDistributed: '1',Version:'	2.7',Users:'8',LicenceType:'Commercial',ExpirationPeriod:'24 Month',StartDate:'2019-2-12',EndDate:'2021-2-12',Projectstate:'Rejected',ProjectstateReview:'Rejected By me'},
    {customerName:'Noida HTMS',productCode:'VATCC',ProjectStatus:'Pending',ProductFamily:'ATCS',LicenceDistributed: '5',Version:'	2.8',Users:'9',LicenceType:'Demo',ExpirationPeriod:'12 Month',StartDate:'2018-2-12',EndDate:'2019-2-12',Projectstate:'Approved',ProjectstateReview:'Approved'}
  ]
  ViewLog:any=[
    {customerName:'Noida HTMS',uniqueAccessId:'XXXXXXXXXX',productCode:'RLVD' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EES',Version:'	2.1',Users:'2',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-02-12',EndDate:'2020-03-12',RequestStatus:'Rejected',ProjectStatus:'Approved',Createdat:'2020-05-09', LastModified:'2020-02-09',Licencestatus:'Active'},
    {customerName:'Noida HTMS',uniqueAccessId:'XXXXXXXXXX',productCode:'RLVD' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EES',Version:'	2.1',Users:'2',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-02-12',EndDate:'2020-03-12',RequestStatus:'Pending',ProjectStatus:'Approved',Createdat:'2020-02-09', LastModified:'---',Licencestatus:'Active'},
    {customerName:'VSCL',uniqueAccessId:'XXXXXXXXXX',productCode:'ANPR' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '3',ProductFamily:'ETS',Version:'	2.2',Users:'3',LicenceType:'Commercial',ExpirationPeriod:'Lifetime',StartDate:'2020-02-12',EndDate:'---',RequestStatus:'Approved',ProjectStatus:'Rejected',Createdat:'2020-02-01', LastModified:'2020-02-09',Licencestatus:'Active'},
    {customerName:'TSCL',uniqueAccessId:'XXXXXXXXXX' ,productCode:'Spot-SVD',id:'1B2CFF9E2566EFF',LicenceDistributed: '2',ProductFamily:'EPS',Version:'	2.3',Users:'4',LicenceType:'Commercial',ExpirationPeriod:'Lifetime',StartDate:'2020-02-12',EndDate:'---',RequestStatus:'Approved',ProjectStatus:'Approved',Createdat:'2020-02-03', LastModified:'2020-02-10',Licencestatus:'Active'},
    {customerName:'ASCL' ,uniqueAccessId:'XXXXXXXXXX',productCode:'Section-SVD',id:'1B2CFF9E2566EFF',LicenceDistributed: '6',ProductFamily:'EAS',Version:'	2.4',Users:'5',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-02-12',EndDate:'2020-02-18',RequestStatus:'Pending',ProjectStatus:'Rejected',Createdat:'2020-02-05', LastModified:'2020-02-11',Licencestatus:'Expire'},
    {customerName:'BSCL' ,uniqueAccessId:'XXXXXXXXXX',productCode:'RLVD',id:'1B2CFF9E2566EFF',LicenceDistributed: '2',ProductFamily:'EDS',Version:'	2.5',Users:'6',LicenceType:'Commercial',ExpirationPeriod:'12 Month',StartDate:'2020-02-12',EndDate:'2021-02-12',RequestStatus:'Approved',ProjectStatus:'Approved',Createdat:'2020-02-07', LastModified:'2020-02-12',Licencestatus:'Active'},
    {customerName:'Noida HTMS',uniqueAccessId:'XXXXXXXXXX',productCode:'Section-SVD' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EFS',Version:'	2.6',Users:'7',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-02-12',EndDate:'2020-3-12',RequestStatus:'Approved',ProjectStatus:'Rejected',Createdat:'2020-02-04', LastModified:'2020-02-13',Licencestatus:'Active'},
    {customerName:'VSCL',uniqueAccessId:'XXXXXXXXXX',productCode:'RLVD' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '1',ProductFamily:'EGS',Version:'	2.7',Users:'8',LicenceType:'Demo',ExpirationPeriod:'1 Month',StartDate:'2020-02-12',EndDate:'2020-03-20',RequestStatus:'Pending',ProjectStatus:'Rejected',Createdat:'2020-02-09', LastModified:'2020-02-14',Licencestatus:'Expire'},
    {customerName:'Noida HTMS',uniqueAccessId:'XXXXXXXXXX',productCode:'Section-SVD' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EHS',Version:'	2.8',Users:'9',LicenceType:'Commercial',ExpirationPeriod:'Lifetime',StartDate:'2020-02-12',EndDate:'---',RequestStatus:'Approved',ProjectStatus:'Rejected',Createdat:'2020-02-10', LastModified:'2020-02-15',Licencestatus:'Active'}
  ]
}
