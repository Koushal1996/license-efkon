import { StorageService } from "./../../../services/storage/storage.service";
import { MainService } from "./../../../services/main/main.service";
import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import swal from "sweetalert";
import * as FileSaver from "file-saver";

declare let $: any;
@Component({
  selector: "app-project-product",
  templateUrl: "./project-product.component.html",
  styleUrls: ["./project-product.component.scss"],
})
export class ProjectProductComponent implements OnInit {
  projectProducts;
  isloader: boolean = true;
  showModal: boolean = false;
  showCommentModal: boolean = false;
  popUpForm: FormGroup;
  popUpStartDateForm: FormGroup;
  popUpRequestForm: FormGroup;
  showRequestModal: boolean = false;
  commentValue: any;
  commentSubmitButton: string;
  selectedProduct: any;
  comments: any;
  userId: any;
  accessId: string;
  showRenewModal: any;
  selectProductId: any;
  selectedProductStatus: any;
  selectedProductVersion: any;
  selectedProductFamily: any;
  selectedProductCode: any;
  showBeforeDays: any;
  sDate: any;
  startDateChange: any;
  selectedRequestProjectId: any;
  renewStartDate: string;
  productCountsStatus: any;
  filterStatusForm: FormGroup;
  form: FormGroup;
  projectProductsCopy: any;
  productStatus: any;
  selectedComment: any;
  searchProjectProductsForm: FormGroup;

  constructor(
    private _projectService: ProjectService,
    private _storageService: StorageService,
    private mainService: MainService,
    private route: Router,
    private fb: FormBuilder,
    private activate: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProjectProducts();
    this.getrenewConfiguration();
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
    });
    this.popUpForm = this.initpopUpForm();
    this.popUpStartDateForm = this.initpopUpStartDateForm();
    this.popUpRequestForm = this.initpopUpRequestForm();
    this.getproductCountByStatus();
    this.filterStatusForm = this.fb.group({
      productStatus: [""],
    });
    this.searchProjectProductsForm = this.fb.group({
      Search: [""],
    });
    this.activate.params.subscribe((params) => {
      this.productStatus = params["status"];
      //console.log(this.productStatus);
      if (this.productStatus) {
        this.productStatus = this.productStatus.toUpperCase();
      }
    });
    this.form = new FormGroup({
      search: new FormControl(null),
    });
  }

  getrenewConfiguration() {
    this._projectService.renewConfiguration().subscribe((data) => {
      console.log("getrenewConfiguration");
      //console.log(data);
      this.showBeforeDays = data.showBeforeDays;
      this.startDateChange = data.startDateChange;
      //console.log(this.showBeforeDays);
    });
  }
  hasRenewDays(project) {
    let currentDate = new Date().toISOString().split("T")[0];
    //console.log(currentDate);
    //console.log(project.endDate);
    // var cDate = new Date(currentDate);
    // console.log(cDate.getDate()); //currntdate
    // var eDate = new Date(project.endDate);
    // console.log(eDate.getDate()); //enddate
    // if (eDate.getDate() - cDate.getDate() <= this.showBeforeDays) {
    //   console.log("true");
    //   return true;
    // } else {
    //   console.log("false");
    //   return false;
    // }
    this.sDate = project.endDate;
    var d = new Date(this.sDate);
    d.setDate(d.getDate() - this.showBeforeDays);
    function convert(d) {
      var date = new Date(d),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    //console.log(convert(d));
    //console.log(currentDate);
    if (currentDate >= convert(d)) {
      return true;
    } else {
      return false;
    }
    // if (new Date(currentDate).getTime() > new Date(convert(d)).getTime()) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  getProjectProducts() {
    this._projectService.getProjectProducts().subscribe((data) => {
      this.projectProducts = data;
      this.projectProductsCopy = data;
      this.filterStatusForm.controls["productStatus"].patchValue("All");
      if (this.productStatus) {
        this.filterStatusForm
          .get("productStatus")
          .patchValue(this.productStatus);
      }
      console.log(data);
      this.isloader = false;
    });
  }

  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  initpopUpForm() {
    return this.fb.group({
      comment: ["", [Validators.required]],
    });
  }
  initpopUpStartDateForm() {
    return this.fb.group({
      startDate: ["", [Validators.required]],
      expirationMonthCount: ["", [Validators.min(1), Validators.required]],
    });
  }
  initpopUpRequestForm() {
    return this.fb.group({
      licenseCount: ["", [Validators.required]],
      comment: ["", [Validators.required]],
    });
  }
  deleteProduct(project) {
    $("#" + project.id).addClass("highlight");
    swal({
      //title: "You sure?",
      // text: "You want to go ahead with deletion?",
      text: `Are you sure, You want to delete ${project.productDetail.productFamilyName}  ${project.productDetail.productCodeName} ${project.productDetail.versionName} Product`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + project.id).removeClass("highlight");
      } else {
        this._projectService.deleteProduct(project.id).subscribe(
          (data) => {
            swal(
              `${project.productDetail.productFamilyName}  ${project.productDetail.productCodeName} ${project.productDetail.versionName} deleted successfully!`
            );
            // this.getProjectProducts();
            this.projectProducts.splice(
              this.projectProducts.findIndex((pd) => pd.id == project.id),
              1
            );
          },
          (error) => {}
        );
        $("#" + project.id).removeClass("highlight");
      }
    });
  }

  editProduct(product) {
    console.log(product);
    this._projectService.selecetedProduct.next(product);
    this.route.navigate([
      `projects/${product.projectId}/product/${product.id}`,
    ]);
  }

  onSubmitComment() {
    this.showModal = false;
    switch (this.commentSubmitButton) {
      case "Submit":
        swal({
          //title: "Are you sure?",
          text: "Are you sure,You want to Submit this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            $("#" + this.selectedProduct.id).removeClass("highlight");
          } else {
            this._projectService
              .submitProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe(
                (data) => {
                  this.selectedProduct.status = "SUBMIT";
                  this.selectedProduct.comments = data.comments;
                  //swal("Product Submitted successfully!");
                  swal(
                    `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) submitted successfully!`
                  );
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                },
                (error) => {
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                }
              );
          }
        });
        break;
      case "Reject":
        swal({
          //title: "Are you sure?",
          text: "Are you sure,You want to Reject this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            $("#" + this.selectedProduct.id).removeClass("highlight");
          } else {
            this._projectService
              .rejectProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  this.selectedProduct.status = data.status;
                  this.selectedProduct.comments = data.comments;
                  //swal("Product Rejected successfully!");
                  swal(
                    `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) rejected successfully!`
                  );
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                },
                (error) => {
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                }
              );
          }
        });
        break;
      case "Review":
        swal({
          //title: "Are you sure?",
          text: "Are you sure,You want to Review this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            $("#" + this.selectedProduct.id).removeClass("highlight");
          } else {
            this._projectService
              .reviewProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  this.selectedProduct.status = "REVIEWED";
                  this.selectedProduct.comments = data.comments;
                  // swal("Product Reviewed successfully!");
                  swal(
                    `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) reviewed successfully!`
                  );
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                },
                (error) => {
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                }
              );
          }
        });
        break;
      case "Approve":
        swal({
          //title: "Are you sure?",
          text: "Are you sure,You want to Approve this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            $("#" + this.selectedProduct.id).removeClass("highlight");
          } else {
            this._projectService
              .approveProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe(
                (data) => {
                  this.selectedProduct.status = "APPROVED";
                  this.selectedProduct.comments = data.comments;
                  this.getProjectProducts();
                  //swal("Product Approved successfully!");
                  swal(
                    `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) approved successfully!`
                  );
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                },
                (error) => {
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                }
              );
          }
        });
        break;
      case "Recall":
        swal({
          //title: "Are you sure?",
          text: "Are you sure,You want to Recall this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            $("#" + this.selectedProduct.id).removeClass("highlight");
          } else {
            this._projectService
              .recallProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  this.selectedProduct.status = data.status;
                  this.selectedProduct.comments = data.comments;
                  this.getProjectProducts();
                  //swal("Product Approved successfully!");
                  swal(
                    `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) recalled successfully!`
                  );
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                },
                (error) => {
                  $("#" + this.selectedProduct.id).removeClass("highlight");
                }
              );
          }
        });
    }
  }
  submitProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    console.log(project);
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    console.log(this.selectedProductStatus);
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Submit";
    this.selectedProduct = project;
  }
  reviewProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Review";
    this.selectedProduct = project;
  }
  approveProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Approve";
    this.selectedProduct = project;
  }
  rejectProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    this.showModal = true;
    this.popUpForm.controls["comment"].setValidators(Validators.required);
    this.commentSubmitButton = "Reject";
    this.selectedProduct = project;
    this.popUpForm.reset();
  }
  recallProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    this.showModal = true;
    this.popUpForm.controls["comment"].setValidators(Validators.required);
    this.commentSubmitButton = "Recall";
    this.selectedProduct = project;
    this.popUpForm.reset();
  }
  hide(selectedProduct) {
    this.showModal = false;
    $("#" + selectedProduct).removeClass("highlight");
  }

  hideCommentModel(selectedComment) {
    this.showCommentModal = false;
    $("#" + selectedComment.id).removeClass("highlight");
  }
  showComments(project) {
    $("#" + project.id).addClass("highlight");
    console.log(project.comments);
    this.selectedComment = project;
    this.comments = project.comments;
    if (this.comments.length > 0) {
      this.selectedProductCode = project.productDetail.productCodeName;
      this.selectedProductFamily = project.productDetail.productFamilyName;
      this.selectedProductVersion = project.productDetail.versionName;
      this.showCommentModal = true;
    } else {
      swal("No Comment Found");
    }
  }

  hasUserId(c) {
    if (c.commentedById == this.userId) {
      return true;
    } else {
      return false;
    }
  }

  generateLicensekey(license) {
    const object = {
      accessId: license.accessId,
      name: license.name,
    };
    this._projectService
      .generateLicenseKeyProduct(license.id, object)
      .subscribe((data) => {
        console.log(data);
        license.generatedKey = data.generatedKey;
        swal("License Key generated successfully!");
      });
  }
  updateLicensekey(license) {
    console.log(license);
    const object = {
      accessId: license.accessId,
      name: license.name,
    };
    if (object) {
      this._projectService
        .updateLicenseKeyProduct(license.id, object)
        .subscribe(
          (data) => {
            license.edit = false;
            console.log(data);
            license.generatedKey = data.generatedKey;
            license.id = data.id;
            swal("License Key updated successfully!");
          },
          (error) => {
            license.edit = false;
          }
        );
    }
  }
  editLicensekey(license) {
    license.edit = true;
  }
  renewProductStatus(project) {
    $("#" + project.id).addClass("highlight");
    this.selectedProduct = project;
    console.log(this.selectedProduct);
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    console.log(this.selectedProduct.endDate);
    let renewEndDate = this.selectedProduct.endDate;
    //this.sDate = project.endDate;
    let renewD = new Date(renewEndDate);
    renewD.setDate(renewD.getDate() + 1);
    console.log(renewD);
    function convert(renewd) {
      var renewdate = new Date(renewD),
        mnth = ("0" + (renewdate.getMonth() + 1)).slice(-2),
        day = ("0" + renewdate.getDate()).slice(-2);
      return [renewdate.getFullYear(), mnth, day].join("-");
    }
    console.log(convert(renewD));
    this.renewStartDate = convert(renewD);
    this.popUpStartDateForm.controls["startDate"].patchValue(convert(renewD));
    this.showRenewModal = true;
  }
  hideRenewModel(selectedProduct) {
    $("#" + selectedProduct).removeClass("highlight");
    this.showRenewModal = false;
  }
  getToday(): string {
    return this.renewStartDate;
  }
  onSubmitStartDate() {
    console.log(this.popUpStartDateForm.value);
    this._projectService
      .renewProjectProduct(
        this.selectedProduct.id,
        this.popUpStartDateForm.value
      )
      .subscribe(
        (data) => {
          console.log("renewProjectProduct");
          console.log(data);
          this.selectedProduct.status = data.status;
          this.selectedProduct.endDate = data.endDate;
          this.selectedProduct.startDate = data.startDate;
          this.selectedProduct.expirationMonthCount = data.expirationMonthCount;
          this.showRenewModal = false;
          this.popUpStartDateForm.reset();
          $("#" + this.selectedProduct.id).removeClass("highlight");
          swal("Project Product Renewed Successfully!");
        },
        (error) => {
          this.popUpStartDateForm.reset();
          this.showRenewModal = false;
          $("#" + this.selectedProduct.id).removeClass("highlight");
        }
      );
  }
  sortAphabetically() {
    console.log(this.projectProducts);
    this.projectProducts.sort(function (a, b) {
      var statusA = a.status.toLowerCase(),
        statusB = b.status.toLowerCase();
      if (statusA < statusB) return -1;
      if (statusA > statusB) return 1;
      return 0;
    });
  }
  reverseAphabetically() {
    this.projectProducts.reverse();
  }
  hideRequestModel(selectedProduct) {
    $("#" + selectedProduct).removeClass("highlight");
    this.showRequestModal = false;
  }
  onSubmitRequest() {
    console.log(this.popUpRequestForm.value);
    this._projectService
      .saveProjectLicenseById(
        this.selectedRequestProjectId,
        this.popUpRequestForm.value
      )
      .subscribe(
        (data) => {
          console.log(data);
          // swal(
          //   `save product license ${data.licenseCount}request in project successfully!`
          // );
          swal(` ${data.licenseCount} more License generated successfully!`);
          this.showRequestModal = false;
          this.popUpRequestForm.reset();
          $("#" + this.selectedProduct.id).removeClass("highlight");
        },
        (error) => {
          this.showRequestModal = false;
          this.popUpRequestForm.reset();
          $("#" + this.selectedProduct.id).removeClass("highlight");
        }
      );
  }
  saveProjectLicenseById(project) {
    $("#" + project.id).addClass("highlight");
    console.log(project.id);
    this.selectedRequestProjectId = project.id;
    this.showRequestModal = true;
    this.selectedProduct = project;
    this.selectedProductCode = project.productDetail.productCodeName;
    this.selectedProductFamily = project.productDetail.productFamilyName;
    this.selectedProductVersion = project.productDetail.versionName;
    console.log(this.selectedProduct);
  }
  getproductCountByStatus() {
    this._projectService.productCountByStatus().subscribe((data) => {
      console.log(data);
      this.productCountsStatus = data;
    });
  }
  getStatus() {
    this.projectProducts = this.projectProductsCopy;
    //console.log(this.filterStatusForm.controls["productStatus"].value);
    let key = this.filterStatusForm.controls["productStatus"].value;
    //console.log("Filter Key : " + this.projectProducts);
    if (key) {
      this.projectProducts = this.projectProducts.filter(
        (item) => item.status == key
      );
    } else {
      this.projectProducts = this.projectProductsCopy;
    }
    if (key == "All") {
      this.projectProducts = this.projectProductsCopy;
    }
  }

  // onsearchProjectProductsForm(key) {
  //   console.log(key);
  //   if (key) {
  //     this.projectProducts = this.projectProducts.filter(
  //       (
  //         item //console.log(item)
  //       ) =>
  //         (item.project.customerName &&
  //           item.project.customerName.toLowerCase().startsWith(key)) ||
  //         (item.project.customerEmail &&
  //           item.project.customerEmail.toLowerCase().startsWith(key)) ||
  //         (item.productDetail.productCodeName &&
  //           item.productDetail.productCodeName.toLowerCase().startsWith(key))
  //     );
  //   } else {
  //     this.projectProducts = this.projectProducts;
  //   }
  // }
  onsearchProjectProductsForm(key) {
    if (key) {
      this.projectProducts = this.projectProductsCopy.filter(
        (item) =>
          item.project.customerName.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.project.customerName.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.productDetail.productCodeName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1
      );
    } else {
      this.projectProducts = JSON.parse(
        JSON.stringify(this.projectProductsCopy)
      );
    }
  }

  exportProjectProducts() {
    this._projectService.getProjectProductsExcel().subscribe((data) => {
      console.log(data);
      const blob = new Blob([data.body], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      //FileSaver.saveAs(blob, data.headers.get("fileName"));
      FileSaver.saveAs(blob, "ProjectProducts");
    });
  }
  PdfProjectProducts() {
    this._projectService.getProjectProductsPdf().subscribe((data) => {
      console.log(data);
      const blob = new Blob([data.body], {
        type: "  application/pdf;base64",
      });
      //FileSaver.saveAs(blob, data.headers.get("fileName"));
      FileSaver.saveAs(blob, "ProjectProducts");
    });
  }
}
