import { Injectable } from '@angular/core';
import { ProductFamily } from '../main/create-project/productFamily';
import { ProductCode } from '../main/create-project/ProductCode';
@Injectable({
  providedIn: 'root'
})
export class MyProjectDetailService {

  constructor() { }

  productFamily = [
    { id: 1, name: 'EES' },
    { id: 2, name: 'ITMS' },
    { id: 3, name: 'HTMS' },
    { id: 4, name: 'TMS' },
    { id: 5, name: 'VTS' },
    { id: 6, name: 'ICC' },
    { id: 7, name: 'VA' },
    { id: 8, name: 'ATCS' },
  ];

  productCode = [
    { id: 1, productFamily_id: 1, name: 'RLVD' },
    { id: 2, productFamily_id: 1, name: 'ANPR' },
    { id: 3, productFamily_id: 1, name: 'Spot-SVD' },
    { id: 4, productFamily_id: 1, name: 'Section-SVD' },
    { id: 5, productFamily_id: 2, name: 'ITMS' },
    { id: 5, productFamily_id: 3, name: 'HTMS' },
    { id: 6, productFamily_id: 4, name: 'AVC' },
    { id: 7, productFamily_id: 5, name: 'VTC' },
    { id: 8, productFamily_id: 6, name: 'ICC' },
    { id: 9, productFamily_id: 7, name: 'VATC' },
    { id: 10, productFamily_id: 7, name: 'VIDS' },
    { id: 11, productFamily_id: 8, name: 'ATCS' },
  ]

  Role = [
    { id: 1, role: 'Approver' },
    { id: 2, role: 'Reviewer' },
    { id: 3, role: 'Creator' },
    { id: 4, role: 'Customer' },
  ];
  Customer = [
    { id: 1, name: 'VSCL' },
    { id: 1, name: 'TSCL' },
    { id: 1, name: 'ASCL' },
    { id: 1, name: 'Noida_Htms' },
  ];



  getCountries() {
    return [
      new ProductFamily(1, 'EES'),
      new ProductFamily(2, 'ITMS'),
      new ProductFamily(3, 'HTMS'),
      new ProductFamily(4, 'TMS'),
      new ProductFamily(5, 'VTS'),
      new ProductFamily(6, 'ICC'),
      new ProductFamily(7, 'VA'),
      new ProductFamily(8, 'ATCS'),

    ];
  }

  getStates() {
    return [
      new ProductCode(1, 1, 'RLVD'),
      new ProductCode(2, 1, 'ANPR'),
      new ProductCode(3, 1, 'Spot-SVD'),
      new ProductCode(4, 1, 'Section-SVD'),
      new ProductCode(5, 2, 'ITMS'),
      new ProductCode(6, 3, 'HTMS'),
      new ProductCode(7, 4, 'AVC'),
      new ProductCode(8, 5, 'VTC'),
      new ProductCode(9, 6, 'ICC'),
      new ProductCode(9, 7, 'VATC'),
      new ProductCode(9, 7, 'VIDS'),
      new ProductCode(9, 8, 'ATCS'),
    ];

  }
  // Data for Project Detail and Logs
  customerDetail: any = [
    { customerName: 'VSCL', productCode: 'RLVD', ProjectStatus: 'DRAFT', ProductFamily: 'EES', LicenceDistributed: '5', Version: '	2.1', Users: 2, LicenceType: 'DEMO', ExpirationPeriod: '01 Month', StartDate: '2020-2-12', EndDate: '2020-3-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me', },
    { customerName: 'TSCL', productCode: 'ANPR', ProjectStatus: 'REJECTED', ProductFamily: 'ITMS', LicenceDistributed: '3', Version: '	2.2', Users: 3, LicenceType: 'COMMERCIAL', ExpirationPeriod: 'Lifetime', StartDate: '2017-2-12', EndDate: '---', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
    { customerName: 'ASCL', productCode: 'Spot-SVD', ProjectStatus: 'APPROVED', ProductFamily: 'HTMS', LicenceDistributed: '2', Version: '	2.3', Users: 4, LicenceType: 'COMMERCIAL', ExpirationPeriod: 'Lifetime', StartDate: '2019-2-12', EndDate: '---', Projectstate: 'Rejected', ProjectstateReview: 'Approved' },
    { customerName: 'NOIDA-HTMS', productCode: 'Section-SVD', ProjectStatus: 'PENDING', ProductFamily: 'TMS', LicenceDistributed: '4', Version: '	2.4', Users: 5, LicenceType: 'DEMO', ExpirationPeriod: '01 Month', StartDate: '2020-2-12', EndDate: '2020-3-12', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
    { customerName: 'BSCL', productCode: 'ITMS', ProjectStatus: 'REJECTED', ProductFamily: 'VTS', LicenceDistributed: '5', Version: '	2.5', Users: 6, LicenceType: 'COMMERCIAL', ExpirationPeriod: '24 Month', StartDate: '2020-2-12', EndDate: '2022-2-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me' },
    { customerName: 'Noida HTMS', productCode: 'HTMS', ProjectStatus: 'DRAFT', ProductFamily: 'ICCC', LicenceDistributed: '2', Version: '	2.6', Users: 7, LicenceType: 'DEMO', ExpirationPeriod: '12 Month', StartDate: '2020-2-12', EndDate: '2021-2-12', Projectstate: 'Approved', ProjectstateReview: 'Rejected By Approver' },
    { customerName: 'VSCL', productCode: 'AVC', ProjectStatus: 'APPROVED', ProductFamily: 'VA', LicenceDistributed: '1', Version: '	2.7', Users: 8, LicenceType: 'COMMERCIAL', ExpirationPeriod: '24 Month', StartDate: '2019-2-12', EndDate: '2021-2-12', Projectstate: 'Rejected', ProjectstateReview: 'Rejected By me' },
    { customerName: 'Noida HTMS', productCode: 'VATCC', ProjectStatus: 'Pending', ProductFamily: 'ATCS', LicenceDistributed: '5', Version: '	2.8', Users: 9, LicenceType: 'DEMO', ExpirationPeriod: '12 Month', StartDate: '2018-2-12', EndDate: '2019-2-12', Projectstate: 'Approved', ProjectstateReview: 'Approved' }
  ]
  LicenceViewLog: any = [
    { customerName: 'Noida HTMS',xpPeriod:'2020-03-12' , uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1A2CFF9E2566EFF', LicenceDistributed: '5', ProductFamily: 'EES', Version: '	2.1', Users: '2', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-12', RequestStatus: 'Rejected', ProjectStatus: 'Approved', Createdat: '2020-05-09', LastModified: '2020-02-09', Licencestatus: 'Active' },
    { customerName: 'Noida HTMS',xpPeriod:'2020-05-06' , uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1B2CFF9E2566EGG', LicenceDistributed: '5', ProductFamily: 'EES', Version: '	2.1', Users: '2', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-12', RequestStatus: 'Pending', ProjectStatus: 'Approved', Createdat: '2020-02-09', LastModified: '---', Licencestatus: 'Active' },
    { customerName: 'VSCL',xpPeriod:'2020-04-29' , uniqueAccessId: 'XXXXXXXXXX', productCode: 'ANPR', id: '1C2CFF9E2566EFF', LicenceDistributed: '3', ProductFamily: 'ETS', Version: '	2.2', Users: '3', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-01', LastModified: '2020-02-09', Licencestatus: 'Active' },
    { customerName: 'TSCL',xpPeriod:'2021-03-15' , uniqueAccessId: 'XXXXXXXXXX', productCode: 'Spot-SVD', id: '1D2CFF9E2566EHH', LicenceDistributed: '2', ProductFamily: 'EPS', Version: '	2.3', Users: '4', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Approved', Createdat: '2020-02-03', LastModified: '2020-02-10', Licencestatus: 'Active' },
    { customerName: 'ASCL',xpPeriod:'2020-03-02' , uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1E2CFF9E2566EII', LicenceDistributed: '6', ProductFamily: 'EAS', Version: '	2.4', Users: '5', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-02-18', RequestStatus: 'Pending', ProjectStatus: 'Rejected', Createdat: '2020-02-05', LastModified: '2020-02-11', Licencestatus: 'Expire' },
    { customerName: 'BSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1F2CFF9E2566EFF', LicenceDistributed: '2', ProductFamily: 'EDS', Version: '	2.5', Users: '6', LicenceType: 'Commercial', ExpirationPeriod: '12 Month', StartDate: '2020-02-12', EndDate: '2021-02-12', RequestStatus: 'Approved', ProjectStatus: 'Approved', Createdat: '2020-02-07', LastModified: '2020-02-12', Licencestatus: 'Active' },
    { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1B2CFF9E2566EJJ', LicenceDistributed: '5', ProductFamily: 'EFS', Version: '	2.6', Users: '7', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-3-12', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-04', LastModified: '2020-02-13', Licencestatus: 'Active' },
    { customerName: 'VSCL', uniqueAccessId: 'XXXXXXXXXX', productCode: 'RLVD', id: '1G2CFF9E2566EKK', LicenceDistributed: '1', ProductFamily: 'EGS', Version: '	2.7', Users: '8', LicenceType: 'Demo', ExpirationPeriod: '1 Month', StartDate: '2020-02-12', EndDate: '2020-03-20', RequestStatus: 'Pending', ProjectStatus: 'Rejected', Createdat: '2020-02-09', LastModified: '2020-02-14', Licencestatus: 'Expire' },
    { customerName: 'Noida HTMS', uniqueAccessId: 'XXXXXXXXXX', productCode: 'Section-SVD', id: '1H2CFF9E2566ELL', LicenceDistributed: '5', ProductFamily: 'EHS', Version: '	2.8', Users: '9', LicenceType: 'Commercial', ExpirationPeriod: 'Lifetime', StartDate: '2020-02-12', EndDate: '---', RequestStatus: 'Approved', ProjectStatus: 'Rejected', Createdat: '2020-02-10', LastModified: '2020-02-15', Licencestatus: 'Active' }
  ]


  public oldLicencekey: any = [
    { id: 1, oldLicencekey: '1B2CFF9E2566EGG', NewLicenceKey: 'RLVD-06FG-ASDF90' },
    { id: 2, oldLicencekey: '1B2CFF9E2566EHH', NewLicenceKey: 'RLVD-06FG-ASDF98' },
    { id: 3, oldLicencekey: '1B2CFF9E2566EII', NewLicenceKey: 'RLVD-06FG-ASDF96' },
    { id: 4, oldLicencekey: '1B2CFF9E2566EJJ', NewLicenceKey: 'RLVD-06FG-ASDF94' },
    { id: 5, oldLicencekey: '1B2CFF9E2566EKK', NewLicenceKey: 'RLVD-06FG-ASDF92' },
  ]
}
