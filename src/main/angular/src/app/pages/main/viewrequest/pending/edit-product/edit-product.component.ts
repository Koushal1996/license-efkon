import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product/product.service";
import swal from "sweetalert";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"],
})
export class EditProductComponent implements OnInit {
  productForm: any;
  licenseType: any[] = [];
  foundlicenseTypeId: any;
  productId: any;
  productDetail: any[] = [];
  productCodes: any[] = [];
  versions: any[];
  loaderbutton: boolean = false;
  todayDate: string;
  sDate: any;
  expirationMonthNo: any;
  selectedProductDetail: any = {};
  projects: any;
  selectedProjectId: any;
  constructor(
    private fb: FormBuilder,
    private activate: ActivatedRoute,
    private route: Router,
    private projectservice: ProjectService,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.initProductForm();
    this.activate.params.subscribe((params) => {
      console.log(params);
      this.productId = params["productId"];
      //this.selectedProjectId = params["Id"];
    });
    this.activate.params.subscribe((params) => {
      this.selectedProjectId = params["id"];
    });
    this.getProductDetail();
    this.getLicenseType();
    this.getProjects();
    this.patchaValue();
  }
  getVersions(c) {
    //console.log(c);
    this.versions = c.versions;
  }
  getLicenseType() {
    this.projectservice.getLicenseType().subscribe((data) => {
      this.licenseType = data;
      //console.log(this.licenseType);
    });
  }
  initProductForm() {
    return this.fb.group({
      productFamily: [""],
      productCode: [""],
      projectId: ["", [Validators.required]],
      productDetailId: ["", [Validators.required]],
      licenseCount: ["", [Validators.required, Validators.min(1)]],
      licenseTypeId: ["", [Validators.required]],
      expirationPeriodType: ["", [Validators.required]],
      expirationMonthCount: ["", [Validators.min(1)]],
      startDate: ["", [Validators.required]],
      EndDate: [""],
    });
  }

  patchaValue() {
    if (this.productId) {
      this._productService.selecetedProductPending.subscribe((data) => {
        if (Object.keys(data).length) {
          //console.log(data);
          // this.selectedProductProjectDetail =
          //   data.projectProductResponse.project;
          this.productForm.patchValue(data);
          const productDetaill = this.productDetail.find(
            (pd) =>
              pd.id == data.projectProductResponse.productDetail.productFamilyId
          );
          if (productDetaill) {
            this.productForm.patchValue({
              productFamily: productDetaill,
            });
          }
          const productCodess = this.productCodes.find(
            (pc) =>
              pc.id == data.projectProductResponse.productDetail.productCodeId
          );
          if (productCodess) {
            this.productForm.patchValue({
              productCode: productCodess,
            });
          }
          this.productForm.patchValue({
            startDate: data.projectProductResponse.startDate,
            EndDate: data.projectProductResponse.endDate,
            licenseTypeId: data.projectProductResponse.licenseTypeId,
            expirationPeriodType:
              data.projectProductResponse.expirationPeriodType,
            expirationMonthCount:
              data.projectProductResponse.expirationMonthCount,
          });
          this.productForm.controls["productDetailId"].patchValue(
            data.projectProductResponse.productDetailId
          );
          this.productForm.controls["projectId"].patchValue(
            data.projectProductResponse.projectId
          );
          if (data.projectProductResponse.licenseTypeName == "DEMO") {
            this.productForm.controls["expirationPeriodType"].disable();
          } else {
            this.productForm.controls["expirationPeriodType"].enable();
          }
          this.productForm.controls["productFamily"].disable();
          this.productForm.controls["productCode"].disable();
          this.productForm.controls["productDetailId"].disable();
        } else {
          this._productService
            .viewRequestById(this.productId)
            .subscribe((data) => {
              //console.log(data);
              this.productForm.patchValue(data);
              const productDetaill = this.productDetail.find(
                (pd) =>
                  pd.id ==
                  data.projectProductResponse.productDetail.productFamilyId
              );
              if (productDetaill) {
                this.productForm.patchValue({
                  productFamily: productDetaill,
                });
              }
              const productCodess = this.productCodes.find(
                (pc) =>
                  pc.id ==
                  data.projectProductResponse.productDetail.productCodeId
              );
              if (productCodess) {
                this.productForm.patchValue({
                  productCode: productCodess,
                });
              }
              this.productForm.patchValue({
                startDate: data.projectProductResponse.startDate,
                EndDate: data.projectProductResponse.endDate,
                licenseTypeId: data.projectProductResponse.licenseTypeId,
                expirationPeriodType:
                  data.projectProductResponse.expirationPeriodType,
                expirationMonthCount:
                  data.projectProductResponse.expirationMonthCount,
              });
              this.productForm.controls["productDetailId"].patchValue(
                data.projectProductResponse.productDetailId
              );
              this.productForm.controls["projectId"].patchValue(
                data.projectProductResponse.projectId
              );
              if (data.projectProductResponse.licenseTypeName == "DEMO") {
                this.productForm.controls["expirationPeriodType"].disable();
              } else {
                this.productForm.controls["expirationPeriodType"].enable();
              }
              this.productForm.controls["productFamily"].disable();
              this.productForm.controls["productCode"].disable();
              this.productForm.controls["productDetailId"].disable();
            });
        }
      });
    }
  }
  getProductDetail() {
    this._productService.getProductDetails().subscribe((data) => {
      this.productDetail = data;
      this.patchaValue();
    });
    var today = new Date();
    var month = (today.getMonth() + 1).toString();
    var currentMonth;
    if (month.length > 1) {
      currentMonth = parseInt(month);
    } else {
      currentMonth = "0" + parseInt(month);
    }
    var arDate = today.getDate().toString();
    var currentDate;
    if (arDate.length > 1) {
      currentDate = parseInt(arDate);
    } else {
      currentDate = "0" + parseInt(arDate);
    }

    this.todayDate =
      today.getFullYear() + "-" + currentMonth + "-" + currentDate;
    //console.log(this.todayDate);
    this.productForm.controls["startDate"].patchValue(this.todayDate);
  }
  onSubmit() {
    console.log(this.productForm.value);
    const requestBody = this.productForm.getRawValue();
    console.log(requestBody);
    this.loaderbutton = true;
    this._productService
      .updateProductLicenseAccept(this.productId, requestBody)
      .subscribe(
        (data) => {
          console.log(data);
          swal(
            `Product (${requestBody.productFamily.name} ${requestBody.productCode.name}) accepted successfully!`
          );
          this.route.navigate(["viewrequest/pending"]);
          this.productForm.reset();
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
  }
  onLicenseChange(licenseTypeId) {
    this.foundlicenseTypeId = this.licenseType.find((item) => {
      return item.id == licenseTypeId;
    });
    console.log(this.foundlicenseTypeId);
    if (this.foundlicenseTypeId) {
      if (this.foundlicenseTypeId.name == "DEMO") {
        this.productForm.controls["expirationPeriodType"].patchValue("LIMITED");
        this.productForm.controls["expirationMonthCount"].patchValue(
          this.foundlicenseTypeId.maxMonthCount
        );
        this.productForm.controls["expirationMonthCount"].setValidators([
          Validators.max(this.foundlicenseTypeId.maxMonthCount),
          Validators.min(1),
        ]);

        this.productForm.controls["expirationPeriodType"].disable();
      } else {
        this.productForm.controls["expirationMonthCount"].reset();
        this.productForm.controls["expirationMonthCount"].setValidators([
          Validators.max(this.foundlicenseTypeId.maxMonthCount),
          Validators.min(1),
        ]);
        this.productForm.controls["expirationPeriodType"].enable();
        this.productForm.controls["expirationPeriodType"].reset();
      }
    }
  }

  onExpirationChange(expirationPeriodType) {
    if (expirationPeriodType == "LIFETIME") {
      this.productForm.controls["expirationMonthCount"].patchValue(
        this.foundlicenseTypeId.maxMonthCount
      );
      this.productForm.controls["expirationMonthCount"].setValidators([
        Validators.max(this.foundlicenseTypeId.maxMonthCount),
        Validators.min(1),
      ]);
      this.productForm.controls["expirationMonthCount"].disable();
      this.productForm.controls["EndDate"].disable();
      this.productForm.controls["expirationMonthCount"].setValidators(
        Validators.required
      );
    } else {
      this.productForm.controls["expirationMonthCount"].setValidators([
        Validators.required,
        Validators.max(this.foundlicenseTypeId.maxMonthCount),
        Validators.min(1),
      ]);
      this.productForm.controls["expirationMonthCount"].enable();
      this.productForm.controls["expirationMonthCount"].reset();
      this.productForm.controls["EndDate"].disable();
    }
  }
  onExpirationMonthCount(expirationMonthCount) {
    this.expirationMonthNo = expirationMonthCount;
    if (this.todayDate) var d = new Date(this.todayDate);
    // End date should be one day less than the month
    d.setDate(d.getDate() - 1);
    console.log(d);
    d.setMonth(d.getMonth() + this.expirationMonthNo);
    function convert(d) {
      var date = new Date(d),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    this.productForm.controls["EndDate"].patchValue(convert(d));
  }

  getToday(): string {
    //console.log(new Date().toISOString().split("T")[0]);
    return new Date().toISOString().split("T")[0];
  }
  onStartDate(startDate) {
    //console.log(startDate);
    this.sDate = startDate;
    var d = new Date(this.sDate);
    console.log(d);
    // End date should be one day less than the month
    d.setDate(d.getDate() - 1);
    console.log(d);
    d.setMonth(d.getMonth() + this.expirationMonthNo);
    function convert(d) {
      var date = new Date(d),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    this.productForm.controls["EndDate"].patchValue(convert(d));
  }

  close() {
    this.route.navigate(["viewrequest/pending"]);
  }
  getProjects() {
    this.projectservice.getProjects().subscribe(
      (data) => {
        console.log(data);
        this.projects = data;
        this.selectedProductDetail = this.projects.find(
          (item) => item.id == this.selectedProjectId
        );
        console.log("this.selectedProductDetail");
        console.log(this.selectedProductDetail);
      },
      (error) => {}
    );
  }
}
