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
  productCodes: any[] = [];
  eachProductId;
  expirationMonthNo: any;
  sDate: any;
  d: any;
  todayDate: string;
  versions: any[];
  licenseType: any;
  selectedProjectId;
  selectedProductDetail: any = {};
  selectedproducts: any;
  constructor(
    private fb: FormBuilder,
    private activate: ActivatedRoute,
    private projectservice: ProjectService,
    private _productService: ProductService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getLicenseType();
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
    this.getProjects();
    this.getProductsByProjectId();
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
      this.projectservice.selecetedProduct.subscribe((data) => {
        if (Object.keys(data).length) {
          this.productForm.patchValue(data);
          this.productForm.patchValue({
            productFamily: this.productDetail.find(
              (pd) => pd.id == data.productDetailResponse.productFamilyId
            ),
          });
          this.productForm.patchValue({
            productCode: this.productCodes.find(
              (pc) => pc.id == data.productDetailResponse.productCodeId
            ),
          });
        } else {
          this._productService
            .getProductById(this.productId)
            .subscribe((data) => {
              //console.log(data);
              this.productForm.patchValue(data);
              this.productForm.patchValue({
                productFamily: this.productDetail.find(
                  (pd) => pd.id == data.productDetailResponse.productFamilyId
                ),
              });
              this.productForm.patchValue({
                productCode: this.productCodes.find(
                  (pc) => pc.id == data.productDetailResponse.productCodeId
                ),
              });
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
          swal("New Product Added successfully!");
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
              swal("New Product Added successfully!");
              this.loaderbutton = false;
              console.log(data);
              this.productForm.reset();
              this.productForm.controls["licenseTypeId"].reset();
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
      this.productForm.controls["expirationMonthCount"].setValidators(
        Validators.max(2)
      );
      this.productForm.controls["expirationPeriodType"].disable();
    } else {
      this.productForm.controls["expirationMonthCount"].patchValue(
        foundItem.maxMonthCount
      );
      this.productForm.controls["expirationMonthCount"].setValidators(
        Validators.max(240)
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
      this.productForm.controls["EndDate"].disable();
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
        console.log(data);
        this.projects = data;
        this.selectedProductDetail = this.projects.find(
          (item) => item.id == this.selectedProjectId
        );
        console.log(this.selectedProductDetail);
      },
      (error) => {}
    );
  }
  getProductsByProjectId() {
    this.projectservice
      .getProductsByProjectId(this.selectedProjectId)
      .subscribe(
        (data) => {
          this.selectedproducts = data;
          console.log(data);
        },
        (error) => {}
      );
  }
}
