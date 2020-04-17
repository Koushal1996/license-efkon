import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../services/product/product.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  Family=[];
  productCodes=[];
  Versions=[];
  
  constructor(private _productService :ProductService,
    private fb: FormBuilder) { }
  createDetailForm: FormGroup;
  ngOnInit() {
  //   this._productService.getProductDetails().subscribe(
  //     data=>{
  //      console.log(data)
  //     }
  //   )
  this.createDetailForm = this.initProductDetailForm();
  this.getProductFamilies()
  this.getversions();


   }

    onchange(productFamilyId:number) {
      console.log(productFamilyId)  
      // this.productCodes = 
      // this.Family.filter(res => res.id == productFamilyId).productCodes;
      const family = this.Family.find((item) =>item.id == productFamilyId)
      this.productCodes = family.productCodes;
      console.log(this.productCodes)
 }

   initProductDetailForm() {
    return this.fb.group({
      "productFamilyId":["", [Validators.required]],
      "productCodeId":["",[Validators.required]],
      "versionId":["", [Validators.required]]
    });
  }
  getProductFamilies(){
    this._productService.getProductFamilies().subscribe(
      data=>{
      this.Family= data;
          

  })}

  getversions() {
    this._productService.getVersions().subscribe(data => {
      console.log(data)
      this.Versions = data
    })
  }

  onSubmit()
  {
    console.log(this.createDetailForm.value)
    this._productService.addProductDetail(this.createDetailForm.value).subscribe(data => {
      console.log(data) 
    })
  }

}