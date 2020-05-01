import { StorageService } from './../../../../services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../services/product/product.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  Family = [];
  productCodes = [];
  Versions = [];
  productDetail = [];
  detailId
  isCreateDetail:boolean = false
  isloader:boolean= true
  loaderbutton:boolean=false;
  constructor(private _productService: ProductService,
    private fb: FormBuilder,
    private _storageService:StorageService) { }
  createDetailForm: FormGroup;
  ngOnInit() {
    this.createDetailForm = this.initProductDetailForm();
    this.getversions();
    this.getProductFamilies()
    this.getProductDetail()
  }
  hasAuthority(authority){
    const authorities:any[] = this._storageService.getData('userAuthorities').map(a=>a.name);
    return authorities.includes(authority);
  }
  onchange(productFamilyId: number) {
    console.log(productFamilyId)
    // this.productCodes = 
    // this.Family.filter(res => res.id == productFamilyId).productCodes;
    const family = this.Family.find((item) => item.id == productFamilyId)
    this.productCodes = family.productCodes;
    console.log(this.productCodes)
  }

  initProductDetailForm() {
    return this.fb.group({
      "productFamilyId": ["", [Validators.required]],
      "productCodeId": ["", [Validators.required]],
      "versionId": ["", [Validators.required]]
    });
  }
  getProductFamilies() {
    this._productService.getProductFamilies().subscribe(
      data => {
        this.Family = data;
      })
  }

  getversions() {
    this._productService.getVersions().subscribe(data => {
      // console.log(data)
      this.Versions = data
    })
  }

  onSubmit() {
    this.loaderbutton=true
    if (this.detailId) {
      this._productService.updateProductDetail(this.detailId, this.createDetailForm.value)
        .subscribe(data => {
          console.log(data)
          this.getProductDetail()
          this.isCreateDetail = false
          this.detailId=''
          this.loaderbutton=false
          swal("Update Successfully!");
        }, error => {
          this.loaderbutton=false
        }
        )
    } else {
      this._productService.addProductDetail(this.createDetailForm.value).
        subscribe(data => {
          //console.log(data)
          swal("Add Successfully!");
          this.getProductDetail()
          this.isCreateDetail = false
          this.loaderbutton=false
        },error => {
          this.loaderbutton=false
        }
        )
    }
  }
  getProductDetail() {
    this._productService.getProductDetails().subscribe(
      data => {
        console.log(data)
        this.productDetail = data
        console.log(this.productDetail)
        this.isloader = false
      })
  }

  editProductDetail(detail) {
    this.isCreateDetail = true
    //console.log(this.detailId)
    this.detailId = detail.id
    console.log(detail)
    this.createDetailForm.patchValue(detail);

  }
  deleteProductDetail(detail) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to deleted this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["Yes","No"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    console.log(detail.id)
    this._productService.deleteProductDetail(detail.id).subscribe(
      data => {
        this.getProductDetail()
        swal("Delete successfully!");
      },
      error=>{}
    )
  }
});
}
  showDetailForm()
  {
    this.isCreateDetail = true
  }
}