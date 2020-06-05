import { StorageService } from "./../../../services/storage/storage.service";
import { MainService } from "./../../../services/main/main.service";
import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import swal from "sweetalert";
declare let $: any;
@Component({
  selector: "app-project-product",
  templateUrl: "./project-product.component.html",
  styleUrls: ["./project-product.component.scss"],
})
export class ProjectProductComponent implements OnInit {
  projectProduct;
  isloader: boolean = true;
  showModal: boolean = false;
  showCommentModal: boolean = false;
  popUpForm: FormGroup;
  popUpStartDateForm: FormGroup;
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
  constructor(
    private _projectService: ProjectService,
    private _storageService: StorageService,
    private mainService: MainService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProjectProducts();
    this.getrenewConfiguration();
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
    });
    this.popUpForm = this.initpopUpForm();
    this.popUpStartDateForm = this.initpopUpStartDateForm();
  }

  getrenewConfiguration() {
    this._projectService.renewConfiguration().subscribe((data) => {
      console.log("getrenewConfiguration");
      console.log(data);
      this.showBeforeDays = data.showBeforeDays;
      this.startDateChange = data.startDateChange;
      console.log(this.showBeforeDays);
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
    console.log(convert(d));
    console.log(currentDate);
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
      this.projectProduct = data;
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
      startDate: [""],
      expirationMonthCount: ["", [Validators.min(1), Validators.required]],
    });
  }
  deleteProduct(project) {
    $("#" + project.id).addClass("highlight");
    swal({
      //title: "You sure?",
      // text: "You want to go ahead with deletion?",
      text: `Are you sure, You want to delete ${project.productDetailResponse.productCodeName}  ${project.productDetailResponse.productFamilyName} ${project.productDetailResponse.versionName} Product`,
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
              `${project.productDetailResponse.productCodeName}  ${project.productDetailResponse.productFamilyName} ${project.productDetailResponse.versionName} Delete successfully!`
            );
            // this.getProjectProducts();
            this.projectProduct.splice(
              this.projectProduct.findIndex((pd) => pd.id == project.id),
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
          title: "Are you sure?",
          text: "You want to Submit this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
          } else {
            this._projectService
              .submitProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe((data) => {
                this.selectedProduct.status = "SUBMIT";
                this.selectedProduct.comments = data.comments;
                //swal("Product Submitted successfully!");
                swal(
                  `Product (${this.selectedProduct.productDetailResponse.productCodeName} ${this.selectedProduct.productDetailResponse.productFamilyName} ${this.selectedProduct.productDetailResponse.versionName}) Submitted successfully!`
                );
              });
          }
        });
        break;
      case "Reject":
        swal({
          title: "Are you sure?",
          text: "You want to Reject this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
          } else {
            this._projectService
              .rejectProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe((data) => {
                this.selectedProduct.status = data.status;
                this.selectedProduct.comments = data.comments;
                //swal("Product Rejected successfully!");
                swal(
                  `Product (${this.selectedProduct.productDetailResponse.productCodeName} ${this.selectedProduct.productDetailResponse.productFamilyName} ${this.selectedProduct.productDetailResponse.versionName}) Rejected successfully!`
                );
              });
          }
        });
        break;
      case "Review":
        swal({
          title: "Are you sure?",
          text: "You want to Review this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
          } else {
            this._projectService
              .reviewProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe((data) => {
                this.selectedProduct.status = "REVIEWED";
                this.selectedProduct.comments = data.comments;
                // swal("Product Reviewed successfully!");
                swal(
                  `Product (${this.selectedProduct.productDetailResponse.productCodeName}
                    ${this.selectedProduct.productDetailResponse.productFamilyName}
                    ${this.selectedProduct.productDetailResponse.versionName}) Reviewed successfully!`
                );
              });
          }
        });
        break;
      case "Approved":
        swal({
          title: "Are you sure?",
          text: "You want to Approve this?",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: ["Yes", "No"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
          } else {
            this._projectService
              .approveProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe((data) => {
                this.selectedProduct.status = "APPROVED";
                this.selectedProduct.comments = data.comments;
                //swal("Product Approved successfully!");
                swal(
                  `Product (${this.selectedProduct.productDetailResponse.productCodeName} ${this.selectedProduct.productDetailResponse.productFamilyName} ${this.selectedProduct.productDetailResponse.versionName}) Approved successfully!`
                );
              });
          }
        });
        break;
    }
  }
  submitProductStatus(project) {
    console.log(project);
    this.selectedProductCode = project.productDetailResponse.productCodeName;
    this.selectedProductFamily =
      project.productDetailResponse.productFamilyName;
    this.selectedProductVersion = project.productDetailResponse.versionName;
    console.log(this.selectedProductStatus);
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Submit";
  }
  reviewProductStatus(project) {
    this.selectedProductCode = project.productDetailResponse.productCodeName;
    this.selectedProductFamily =
      project.productDetailResponse.productFamilyName;
    this.selectedProductVersion = project.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Review";
    this.selectedProduct = project;
  }
  approveProductStatus(project) {
    this.selectedProductCode = project.productDetailResponse.productCodeName;
    this.selectedProductFamily =
      project.productDetailResponse.productFamilyName;
    this.selectedProductVersion = project.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Approved";
    this.selectedProduct = project;
  }
  rejectProductStatus(project) {
    this.selectedProductCode = project.productDetailResponse.productCodeName;
    this.selectedProductFamily =
      project.productDetailResponse.productFamilyName;
    this.selectedProductVersion = project.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.controls["comment"].setValidators(Validators.required);
    this.commentSubmitButton = "Reject";
    this.selectedProduct = project;
    this.popUpForm.reset();
  }

  hide() {
    this.showModal = false;
  }

  hideCommentModel() {
    this.showCommentModal = false;
  }
  showComments(project) {
    this.comments = project.comments;
    if (this.comments.length > 0) {
      this.selectedProductCode = project.productDetailResponse.productCodeName;
      this.selectedProductFamily =
        project.productDetailResponse.productFamilyName;
      this.selectedProductVersion = project.productDetailResponse.versionName;
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
        swal("License Key Generated successfully!");
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
            swal("License Key Updated successfully!");
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
    this.selectedProduct = project;
    this.showRenewModal = true;
  }
  hideRenewModel() {
    this.showRenewModal = false;
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
        },
        (error) => {
          this.popUpStartDateForm.reset();
          this.showRenewModal = false;
        }
      );
  }
  sortAphabetically() {
    console.log(this.projectProduct);
    this.projectProduct.sort(function (a, b) {
      var statusA = a.status.toLowerCase(),
        statusB = b.status.toLowerCase();
      if (statusA < statusB) return -1;
      if (statusA > statusB) return 1;
      return 0;
    });
  }
  reverseAphabetically() {
    this.projectProduct.reverse();
  }
}
