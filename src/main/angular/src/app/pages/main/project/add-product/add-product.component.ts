import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProjectService } from "src/app/services/project/project.service";
import { ProductService } from "src/app/services/product/product.service";
import swal from "sweetalert";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  loaderbutton: boolean = false;
  productForm: FormGroup;
  productId;
  projects;
  productDetail: any;
  eachProductId;
  expirationMonthNo: any;
  sDate: any;
  d: any;
  todayDate: string;
  versions: any[];
  licenseType: any;
  selectedProjectId;
  selectedProductDetail: any = {};
  constructor(
    private fb: FormBuilder,
    private activate: ActivatedRoute,
    private projectservice: ProjectService,
    private _productService: ProductService,
    private route: Router
  ) {}

  ngOnInit() {
    this.productForm = this.initProductForm();
    this.activate.params.subscribe((params) => {
      if (params.productId) this.productId = params["productId"];
      if (params.id)
        this.productForm.controls["projectId"].patchValue(params.id);
    });

    this.activate.params.subscribe((params) => {
      this.selectedProjectId = params["id"];
    });
    this.getProductDetail();
    this.patchaValue();
    this.getLicenseType();
    this.getProjects();
  }

  getVersions(c) {
    this.versions = c.versions;
  }
  getLicenseType() {
    this.projectservice.getLicenseType().subscribe((data) => {
      this.licenseType = data;
    });
  }
  initProductForm() {
    return this.fb.group({
      productFamily: [""],
      productCode: [""],
      projectId: ["", [Validators.required]],
      productDetailId: ["", [Validators.required]],
      licenseCount: ["", [Validators.required]],
      licenseTypeId: ["", [Validators.required]],
      expirationPeriodType: ["", [Validators.required]],
      expirationMonthCount: ["", [Validators.min(1)]],
      startDate: ["", [Validators.required]],
      EndDate: [""],
    });
  }

  patchaValue() {
    if (this.productId) {
      this.projectservice.selecetedProduct.subscribe((data) => {
        if (Object.keys(data).length) {
          console.log(data);
          console.log(data.productDetailResponse.productCodeId);
          this.productForm.patchValue(data);
          //debugger;
          this.productForm.patchValue({
            productFamily: data.productDetailResponse.productFamilyId,
            productCode: data.productDetailResponse.productCodeId,
            productDetailId: data.productDetailResponse.versionId,
          });
        } else {
          this._productService
            .getProductById(this.productId)
            .subscribe((data) => {
              //console.log(data);
              this.productForm.patchValue(data);
            });
        }
      });
    }
  }

  getProductDetail() {
    this._productService.getProductDetails().subscribe((data) => {
      this.productDetail = data;
    });
    var today = new Date();
    this.todayDate =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)) +
      "-" +
      +today.getDate();
    console.log(this.todayDate);
    this.productForm.controls["startDate"].patchValue(this.todayDate);
  }
  onSubmit() {
    this.loaderbutton = true;
    if (this.productId) {
      this.projectservice
        .updateProduct(this.productId, this.productForm.value)
        .subscribe(
          (data) => {
            this.route.navigate(["projects"]);
            swal("Product Update successfully!");
          },
          (error) => {
            this.loaderbutton = false;
          }
        );
    } else {
      const requestBody = this.productForm.getRawValue();
      this.projectservice.addProduct(requestBody).subscribe(
        (data) => {
          swal({
            text: "You want to add add more products?",
            closeOnClickOutside: false,
            buttons: ["Yes", "No"],
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              console.log(data);
              swal("New Product Added successfully!");
              this.route.navigate(["projects"]);
            } else {
              this.loaderbutton = false;
              console.log(data);
              this.ngOnInit();
              swal("New Product Added successfully!");
            }
          });
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
    }
  }
  onLicenseChange(licenseTypeId) {
    const foundItem = this.licenseType.find((item) => {
      return item.id == licenseTypeId;
    });
    if (foundItem.name == "DEMO") {
      this.productForm.controls["expirationPeriodType"].patchValue("LIMITED");
      this.productForm.controls["expirationMonthCount"].patchValue(
        foundItem.maxMonthCount
      );
      this.productForm.controls["expirationPeriodType"].disable();
    } else {
      this.productForm.controls["expirationMonthCount"].patchValue(
        foundItem.maxMonthCount
      );
      this.productForm.controls["expirationPeriodType"].enable();
    }
  }
  onExpirationChange(expirationPeriodType) {
    if (expirationPeriodType == "LIFETIME") {
      this.productForm.controls["expirationMonthCount"].disable();
      this.productForm.controls["EndDate"].disable();
    } else {
      this.productForm.controls["expirationMonthCount"].enable();
      this.productForm.controls["EndDate"].enable();
    }
  }

  onExpirationMonthCount(expirationMonthCount) {
    this.expirationMonthNo = expirationMonthCount;
    if (this.todayDate) var d = new Date(this.todayDate);
    d.setMonth(d.getMonth() + this.expirationMonthNo);
    function convert(d) {
      var date = new Date(d),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    this.productForm.controls["EndDate"].patchValue(convert(d));
  }
  onStartDate(startDate) {
    this.sDate = startDate;
    var d = new Date(this.sDate);
    d.setMonth(d.getMonth() + this.expirationMonthNo);
    function convert(d) {
      var date = new Date(d),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    this.productForm.controls["EndDate"].patchValue(convert(d));
  }
  Reset() {
    this.patchaValue();
  }
  close() {
    this.route.navigate(["/projects"]);
  }
  getProjects() {
    this.projectservice.getProjects().subscribe(
      (data) => {
        this.projects = data;
        this.selectedProductDetail = this.projects.find(
          (item) => item.id == this.selectedProjectId
        );
        console.log(this.selectedProductDetail);
      },
      (error) => {}
    );
  }
}
