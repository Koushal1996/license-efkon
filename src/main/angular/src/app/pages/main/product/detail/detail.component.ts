import { StorageService } from "./../../../../services/storage/storage.service";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import swal from "sweetalert";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  Family = [];
  productCodes = [];
  Versions;
  productDetail = [];
  detailId;
  isCreateDetail: boolean = false;
  isloader: boolean = true;
  loaderbutton: boolean = false;
  Detail: any;
  formDetail: any;
  productCodeId: any;
  prodCode: any;
  productVersion: any;
  currentProductFamilyData: any;
  currentProductVersion: any;
  constructor(
    private _productService: ProductService,
    private fb: FormBuilder,
    private _storageService: StorageService
  ) {}
  createDetailForm: FormGroup;
  ngOnInit() {
    this.createDetailForm = this.initProductDetailForm();
    this.getProductFamilies();
    this.getProductDetail();
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  onProductFamilySelect(productFamilyId: number) {
    console.log(productFamilyId);
    const family = this.Family.find((item) => item.id == productFamilyId);
    this.productCodes = family.productCodes;
    //console.log(this.productDetail);
    this.currentProductFamilyData = this.productDetail.find(
      (item) => item.id == productFamilyId
    );
    // console.log(family);
    // console.log(this.productCodes);
  }

  onProductCodeSelect(productCodeId) {
    console.log(productCodeId);
    console.log(this.currentProductFamilyData.productCodes);
    this.currentProductVersion = this.currentProductFamilyData.productCodes.find(
      (item) => item.id == productCodeId
    );
    this.productVersion = this.currentProductVersion.versions;

    console.log(this.productVersion);
  }

  initProductDetailForm() {
    return this.fb.group({
      productFamilyId: ["", [Validators.required]],
      productCodeId: ["", [Validators.required]],
      version: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }
  getProductFamilies() {
    this._productService.getProductFamilies().subscribe((data) => {
      this.Family = data;
      console.log(this.Family);
    });
  }

  onSubmit() {
    this.loaderbutton = true;
    if (this.detailId) {
      this._productService
        .updateProductDetail(this.detailId, this.createDetailForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.getProductDetail();
            this.isCreateDetail = false;
            this.detailId = "";
            this.loaderbutton = false;
            swal("Product’s details updated successfully!");
          },
          (error) => {
            this.loaderbutton = false;
          }
        );
    } else {
      this._productService
        .addProductDetail(this.createDetailForm.value)
        .subscribe(
          (data) => {
            swal("Product’s details added successfully");
            this.getProductDetail();
            this.isCreateDetail = false;
            this.loaderbutton = false;
          },
          (error) => {
            this.loaderbutton = false;
          }
        );
    }
  }
  getProductDetail() {
    this._productService.getProductDetails().subscribe((data) => {
      console.log(data);
      this.productDetail = data;
      console.log(this.productDetail);
      this.isloader = false;
    });
  }

  editProductDetail(detail, code, version) {
    this.productCodes = detail.productCodes;
    this.isCreateDetail = true;
    this.detailId = version.productDetailId;
    this.formDetail = detail;
    this.createDetailForm.patchValue({
      productFamilyId: detail.id,
      productCodeId: code.id,
      version: version.version,
      description: version.description,
    });
  }
  deleteProductDetail(detail, code, productDetailId) {
    swal({
      title: "You sure?",
      text: "You want to go ahead with deletion?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      } else {
        this._productService.deleteProductDetail(productDetailId).subscribe(
          (data) => {
            if (code.versions.length > 1) {
              code.versions.splice(
                code.versions.findIndex(
                  (v) => v.productDetailId == productDetailId
                ),
                1
              );
            } else if (detail.productCodes.length > 1) {
              detail.productCodes.splice(
                detail.productCodes.findIndex((c) => c.id == code.id),
                1
              );
            } else {
              this.productDetail.splice(
                this.productDetail.findIndex((pd) => pd.id == detail.id)
              );
            }
            swal("Product’s details delete successfully!");
          },
          (error) => {}
        );
      }
    });
  }
  showDetailForm() {
    this.isCreateDetail = true;
  }
  Reset() {
    this.createDetailForm.patchValue(this.formDetail);
  }
  close() {
    this.isCreateDetail = false;
  }

  getDetailRowspan(detail) {
    let len = detail.productCodes.length + 1;
    detail.productCodes.forEach((element) => {
      len += element.versions.length;
    });
    return len;
  }
}
