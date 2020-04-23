import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProductService } from 'src/app/services/product/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  productId
  projects
  productDetail: any;
  eachProductId
  LIFETIME: any;

  constructor(
    private fb: FormBuilder,
    private activate: ActivatedRoute,
    private projectservice: ProjectService,
    private _productService: ProductService,
    private route: Router
  ) { }

  ngOnInit() {
    this.productForm = this.initProductForm()
    this.activate.params.subscribe(params => {
      if (params.productId)
        this.productId = params['productId']
      if (params.id)
        this.productForm.controls['projectId'].patchValue(params.id);
    })
    this.getProductDetail()
    this.patchavalue()
  }

  initProductForm() {
    return this.fb.group({
      "projectId": ["", [Validators.required]],
      "productDetailId": ["", [Validators.required]],
      "licenseCount": ["", [Validators.required]],
      "licenseType": ["", [Validators.required]],
      "expirationPeriodType": ["", [Validators.required]],
      "expirationMonthCount": ['', [Validators.min(1)]],
      "startDate": ["", [Validators.required]]
    })
  }

  patchavalue() {
    if (this.productId) {
      this.projectservice.selecetedProduct.subscribe(data => {
        if(Object.keys(data).length){
          this.productForm.patchValue(data)
        } else {
         
         this._productService.getProductById(this.productId).subscribe(
           data=>{
             console.log(data)
             this.productForm.patchValue(data)
           })
        }
      })
    }
  }

  getProductDetail() {
    this._productService.getProductDetails().subscribe(
      data => {
        this.productDetail = data
      })
  }
  onSubmit() {
    if (this.productId) {
      this.projectservice.updateProduct(this.productId, this.productForm.value).subscribe(
        data => {
          this.route.navigate(['projects'])
          swal(" Product Update successfully!");
        },
        error => { }
      )

    } else {
      this.projectservice.addProduct(this.productForm.value).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['projects'])
          swal("New Product Added successfully!");

        },
        error => { }
      )
    }
  }
  onLicenseChange(licenseType) {
    console.log(licenseType)
    if (licenseType == 'DEMO') {
      this.productForm.controls['expirationPeriodType'].patchValue('LIMITED');
    }
  }
  onExpirationChange(expirationPeriodType) {
    console.log(expirationPeriodType)
    if (expirationPeriodType == 'LIFETIME') {
      this.productForm.controls['expirationMonthCount'].disable();
    }
    else {
      this.productForm.controls['expirationMonthCount'].enable();
    }
  }
}