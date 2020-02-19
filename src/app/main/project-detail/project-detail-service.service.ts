import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailServiceService {

  constructor() { }

  projectDetail:any=[
    {customerName:'Noida HTMS',ProjectStatus:'Resolve',ProductFamily:'EES',Version:'	2.1',Users:'2',LicenceType:'Limited',ExpirationPeriod:'12 Month',StartDate:'12-02-2020',EndDate:'2018-2-12'},
    {customerName:'VSCL',ProjectStatus:'Reject',ProductFamily:'ETS',Version:'	2.2',Users:'3',LicenceType:'Lifetime',ExpirationPeriod:'23 Month',StartDate:'12-02-2020',EndDate:'2018-4-17'},
    {customerName:'TSCL',ProjectStatus:'Pending',ProductFamily:'EPS',Version:'	2.3',Users:'4',LicenceType:'Limited',ExpirationPeriod:'45 Month',StartDate:'12-02-2020',EndDate:'2020-1-14'},
    {customerName:'ASCL',ProjectStatus:'Resolve',ProductFamily:'EAS',Version:'	2.4',Users:'5',LicenceType:'Lifetime',ExpirationPeriod:'56 Month',StartDate:'12-02-2020',EndDate:'2022-7-18'},
    {customerName:'BSCL',ProjectStatus:'Reject',ProductFamily:'EDS',Version:'	2.5',Users:'6',LicenceType:'Limited',ExpirationPeriod:'16 Month',StartDate:'12-02-2020',EndDate:'2024-8-19'},
    {customerName:'Noida HTMS',ProjectStatus:'Resolve',ProductFamily:'EFS',Version:'	2.6',Users:'7',LicenceType:'Lifetime',ExpirationPeriod:'17 Month',StartDate:'12-02-2020',EndDate:'2025-9-19'},
    {customerName:'VSCL',ProjectStatus:'Resolve',ProductFamily:'EGS',Version:'	2.7',Users:'8',LicenceType:'Limited',ExpirationPeriod:'14 Month',StartDate:'12-02-2020',EndDate:'2029-10-15'},
    {customerName:'Noida HTMS',ProjectStatus:'Resolve',ProductFamily:'EHS',Version:'	2.8',Users:'9',LicenceType:'Lifetime',ExpirationPeriod:'90 Month',StartDate:'12-02-2020',EndDate:'2030-5-12'}
  ]
  ViewLog:any=[
    {customerName:'Noida HTMS' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EES',Version:'	2.1',Users:'2',LicenceType:'Limited',ExpirationPeriod:'12 Month',StartDate:'12-02-2020',EndDate:'2018-2-12'},
    {customerName:'VSCL' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '3',ProductFamily:'ETS',Version:'	2.2',Users:'3',LicenceType:'Lifetime',ExpirationPeriod:'23 Month',StartDate:'12-02-2020',EndDate:'2018-4-17'},
    {customerName:'TSCL' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '2',ProductFamily:'EPS',Version:'	2.3',Users:'4',LicenceType:'Limited',ExpirationPeriod:'45 Month',StartDate:'12-02-2020',EndDate:'2020-1-14'},
    {customerName:'ASCL' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '6',ProductFamily:'EAS',Version:'	2.4',Users:'5',LicenceType:'Lifetime',ExpirationPeriod:'56 Month',StartDate:'12-02-2020',EndDate:'2022-7-18'},
    {customerName:'BSCL' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '2',ProductFamily:'EDS',Version:'	2.5',Users:'6',LicenceType:'Limited',ExpirationPeriod:'16 Month',StartDate:'12-02-2020',EndDate:'2024-8-19'},
    {customerName:'Noida HTMS' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EFS',Version:'	2.6',Users:'7',LicenceType:'Lifetime',ExpirationPeriod:'17 Month',StartDate:'12-02-2020',EndDate:'2025-9-19'},
    {customerName:'VSCL' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '1',ProductFamily:'EGS',Version:'	2.7',Users:'8',LicenceType:'Limited',ExpirationPeriod:'14 Month',StartDate:'12-02-2020',EndDate:'2029-10-15'},
    {customerName:'Noida HTMS' ,id:'1B2CFF9E2566EFF',LicenceDistributed: '5',ProductFamily:'EHS',Version:'	2.8',Users:'9',LicenceType:'Lifetime',ExpirationPeriod:'90 Month',StartDate:'12-02-2020',EndDate:'2030-5-12'}
  ]
}
