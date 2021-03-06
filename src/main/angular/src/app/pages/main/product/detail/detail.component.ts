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
declare let $: any;
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  Family = [];
  productCodes = [];
  productDetail = [];
  detailId;
  isCreateDetail: boolean = false;
  isloader: boolean = true;
  loaderbutton: boolean = false;
  formDetail: any;
  productCodeId: any;
  productVersion: any;
  currentProductFamilyData: any;
  currentProductVersion: any;
  productDetailAll: any;
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
    this.getAllProductDetails();
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  onProductFamilySelect(productFamilyId: number) {
    //this.createDetailForm.reset();
    console.log(productFamilyId);
    const family = this.Family.find((item) => item.id == productFamilyId);
    if (family) {
      this.productCodes = family.productCodes;
      this.currentProductFamilyData = this.productDetailAll.find(
        (item) => item.id == productFamilyId
      );
    } else {
      this.productCodes = [];
    }
    this.createDetailForm.controls["productCodeId"].patchValue("");
    this.createDetailForm.controls["version"].reset();
    this.createDetailForm.controls["description"].reset();
  }

  onProductCodeSelect(productCodeId) {
    // console.log(this.currentProductFamilyData.productCodes);
    if (this.currentProductFamilyData)
      this.currentProductVersion = this.currentProductFamilyData.productCodes.find(
        (item) => item.id == productCodeId
      );
    if (this.currentProductVersion) {
      this.productVersion = this.currentProductVersion.versions;
    } else {
      this.productVersion = [];
    }
  }

  initProductDetailForm() {
    return this.fb.group({
      productFamilyId: ["", [Validators.required]],
      productCodeId: ["", [Validators.required]],
      version: ["", [Validators.required, Validators.pattern("^[0-9.]+$")]],
      description: ["", [Validators.required]],
    });
  }
  getProductFamilies() {
    this._productService.getProductFamilies().subscribe((data) => {
      this.Family = data;
      console.log(data);
    });
  }

  onSubmit() {
    this.loaderbutton = true;
    const requestBody = this.createDetailForm.getRawValue();
    if (this.detailId) {
      this._productService
        .updateProductDetail(this.detailId, requestBody)
        .subscribe(
          (data) => {
            console.log(data);
            this.getAllProductDetails();
            this.isCreateDetail = false;
            this.detailId = "";
            this.loaderbutton = false;
            swal(
              `Product’s details (${data.productFamilyName} ${data.productCodeName} ${data.versionName}) updated successfully!`
            );
            //this.createDetailForm.reset();
            this.productVersion = "";
            this.createDetailForm = this.initProductDetailForm();
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
            console.log(data);
            swal(
              `Product’s details (${data.productFamilyName} ${data.productCodeName} ${data.versionName}) added successfully`
            );
            this.getAllProductDetails();
            this.isCreateDetail = false;
            this.loaderbutton = false;
            this.createDetailForm.reset();
            this.productVersion = "";
          },
          (error) => {
            this.loaderbutton = false;
          }
        );
    }
  }

  getProductDetail() {
    this._productService.getProductDetails().subscribe(
      (data) => {
        this.productDetail = data;
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }
  getAllProductDetails() {
    this._productService.getAllProductDetails().subscribe(
      (data) => {
        this.productDetailAll = data;
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }

  close() {
    this.isCreateDetail = false;
    this.createDetailForm.reset();
    this.productVersion = "";
    this.detailId = "";
    this.createDetailForm.controls["productFamilyId"].enable();
    this.createDetailForm.controls["productCodeId"].enable();
  }

  editProductDetail(detail, code, version) {
    console.log(version);
    console.log(code.versions);
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
    this.createDetailForm.controls["productFamilyId"].disable();
    this.createDetailForm.controls["productCodeId"].disable();
    this.productVersion = code.versions;
  }
  deleteProductDetail(detail, code, productDetailId, version) {
    $("#" + productDetailId).addClass("highlight");
    swal({
      text: `Are you sure, You want to deactivate Product detail (${detail.name} ${code.name} ${version.version})?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      $("#" + productDetailId).removeClass("highlight");
      if (willDelete) {
      } else {
        this._productService.deleteProductDetail(productDetailId).subscribe(
          (data) => {
            console.log(data);
            if (code.versions.length > 1) {
              // code.versions.splice(
              //   code.versions.findIndex(
              //     (v) => v.productDetailId == productDetailId
              //   ),
              //   1
              // );
              version.active = false;
            } else if (detail.productCodes.length > 1) {
              // detail.productCodes.splice(
              //   detail.productCodes.findIndex((c) => c.id == code.id),
              //   1
              // );
              version.active = false;
            } else {
              version.active = false;
              // this.productDetail.splice(
              //   this.productDetail.findIndex((pd) => pd.id == detail.id)
              // );
            }
            swal(
              `Product’s details (${detail.name} ${code.name} ${version.version}) deactivated successfully!`
            );
          },
          (error) => {}
        );
      }
    });
  }

  activateProductDetail(detail, code, productDetailId, version) {
    $("#" + productDetailId).addClass("highlight");
    swal({
      text: `Are you sure, You want to activate Product detail (${detail.name} ${code.name} ${version.version})?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      $("#" + productDetailId).removeClass("highlight");
      if (willDelete) {
      } else {
        this._productService.activateProductDetail(productDetailId).subscribe(
          (data) => {
            console.log(data);
            version.active = true;
            swal(
              `Product’s details (${detail.name} ${code.name} ${version.version}) activated successfully!`
            );
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

  getDetailRowspan(detail) {
    let len = detail.productCodes.length + 1;
    detail.productCodes.forEach((element) => {
      len += element.versions.length;
    });
    return len;
  }
}
