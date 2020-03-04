import { Injectable } from '@angular/core';

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


}
