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

  constructor(
    private fb: FormBuilder,
    private activate: ActivatedRoute,
    private projectservice: ProjectService,
    private _productService: ProductService,
    private route:Router
  ) { }

  ngOnInit() {
    this.productForm = this.initProductForm()
    this.activate.params.subscribe(params => {
      this.productId = params['id']
      this.productForm.controls['projectId'].patchValue(this.productId);
    })
    this.getProductDetail()
  }
  initProductForm() {
    return this.fb.group({
      "projectId": ["", [Validators.required]],
      "productDetailId": ["", [Validators.required]],
      "licenseCount": ["", [Validators.required]],
      "licenseType": ["", [Validators.required]],
      "expirationPeriodType": ["", [Validators.required]],
      "expirationMonthCount": [''],
      "startDate": ["", [Validators.required]]
    })
  }

  patchavalue() {
  }

  getProductDetail() {
    this._productService.getProductDetails().subscribe(
      data => {
        this.productDetail = data
      })
  }
  onSubmit()
  {
    this.projectservice.addProduct(this.productForm.value).subscribe(
      data=>{
        console.log(data)
        this.route.navigate(['projects'])
        swal("New Product Added successfully!");
        
      },
      error=>{}
    )
  }
}