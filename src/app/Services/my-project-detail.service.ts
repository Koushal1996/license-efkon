import { Injectable } from '@angular/core';
import { ProductFamily } from '../main/create-project/productFamily';
import { ProductCode } from '../main/create-project/ProductCode';
@Injectable({
  providedIn: 'root'
})
export class MyProjectDetailService {

  constructor() { }

  productFamily=[
    {id:1,name:'EES'},
    {id:2,name:'ITMS'},
    {id:3,name:'HTMS'},
    {id:4,name:'TMS'},
    {id:5,name:'VTS'},
    {id:6,name:'ICC'},
    {id:7,name:'VA'},
    {id:8,name:'ATCS'},
  ];

  productCode =[
    {id: 1, productFamily_id: 1, name: 'RLVD'},
    {id: 2, productFamily_id: 1, name: 'ANPR'},
    {id: 3, productFamily_id: 1, name: 'Spot-SVD'},
    {id: 4, productFamily_id: 1, name: 'Section-SVD'},
    {id: 5, productFamily_id: 2, name: 'ITMS'},
    {id: 5, productFamily_id: 3, name: 'HTMS'},
    {id: 6, productFamily_id: 4, name: 'AVC'},
    {id: 7, productFamily_id: 5, name: 'VTC'},
    {id: 8, productFamily_id: 6, name: 'ICC'},
    {id: 9, productFamily_id: 7, name: 'VATC'},
    {id: 10, productFamily_id: 7, name: 'VIDS'},
    {id: 11, productFamily_id: 8, name: 'ATCS'},
  ]

Role=[
  {id:1, role:'Approver'},
  {id:2, role:'Reviewer'},
  {id:3, role:'Creator'},
  {id:4, role:'Customer'},
];
Customer=[
  {id:1,name:'VSCL'},
  {id:1,name:'TSCL'},
  {id:1,name:'ASCL'},
  {id:1,name:'Noida_Htms'},
];



getCountries() {
  return [
   new ProductFamily  (1, 'EES' ),
   new ProductFamily(2, 'ITMS' ),
   new ProductFamily(3, 'HTMS' ),
   new ProductFamily(4, 'TMS' ),
   new ProductFamily(5, 'VTS' ),
   new ProductFamily(6, 'ICC' ),
   new ProductFamily(7, 'VA' ),
   new ProductFamily(8, 'ATCS' ),

  ];
}

getStates() {
 return [
   new ProductCode(1, 1, 'RLVD' ),
   new ProductCode(2, 1, 'ANPR' ),
   new ProductCode(3, 1, 'Spot-SVD' ),
   new ProductCode(4, 1, 'Section-SVD'),
   new ProductCode(5, 2, 'ITMS'),
   new ProductCode(6, 3, 'HTMS' ),
   new ProductCode(7, 4, 'AVC'),
   new ProductCode(8, 5, 'VTC' ),
   new ProductCode(9, 6, 'ICC' ),
   new ProductCode(9, 7, 'VATC' ),
   new ProductCode(9, 7, 'VIDS' ),
   new ProductCode(9, 8, 'ATCS' ),
  ];
}
}
