import { MainService } from "./../../../services/main/main.service";
import { StorageService } from "./../../../services/storage/storage.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./../../../services/project/project.service";
import swal from "sweetalert";
import { saveAs } from "file-saver";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { ResponseContentType } from "@angular/http";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
declare let $: any;
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  public projects = [];
  isloader: boolean = true;
  isProductloader: boolean = true;
  projectsProduct: any;
  show: boolean = false;
  showModal: boolean = false;
  showCommentModal: boolean = false;
  popUpForm: FormGroup;
  commentValue: any;
  commentSubmitButton: string;
  selectedProduct: any;
  isNoProducts: boolean = false;
  comments = [];
  userId;
  commentID: any[];
  popUpStartDateForm: FormGroup;
  showRenewModal: any;
  projectProductCount: string;
  licenses: any;
  selectedProductVersion: any;
  selectedProductFamily: any;
  selectedProductCode: any;
  constructor(
    private projectservice: ProjectService,
    private _storageService: StorageService,
    private mainService: MainService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProjects();
    this.popUpForm = this.initpopUpForm();
    this.popUpStartDateForm = this.initpopUpStartDateForm();
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
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
  getProjects() {
    this.projectservice.getProjects().subscribe(
      (data) => {
        console.log(data);
        this.projects = data;
        this.isloader = false;
      },
      (error) => {}
    );
  }
  createpProject() {
    this.route.navigate(["projects/create"]);
  }

  addProduct(project) {
    this.route.navigate([`projects/${project.id}/product`]);
  }
  deleteProduct(pro) {
    $("#" + pro.id).addClass("highlight");
    swal({
      //title: "You sure?",
      text: `Are you sure, You want to delete ${pro.productDetailResponse.productCodeName}  ${pro.productDetailResponse.productFamilyName} ${pro.productDetailResponse.versionName} product?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + pro.id).removeClass("highlight");
      } else {
        this.projectservice.deleteProduct(pro.id).subscribe(
          (data) => {
            swal(
              `${pro.productDetailResponse.productCodeName}  ${pro.productDetailResponse.productFamilyName} ${pro.productDetailResponse.versionName} Delete successfully!`
            );
            this.getProjects();
          },
          (error) => {}
        );
        $("#" + pro.id).removeClass("highlight");
      }
    });
  }
  editProduct(project, product) {
    console.log(product);
    this.projectservice.selecetedProduct.next(product);
    this.route.navigate([`projects/${project.id}/product/${product.id}`]);
  }
  getProductsByProjectId(event, project) {
    if ($(event)[0].ariaExpanded == null || $(event).hasClass("collapsed")) {
      project.productLoader = true;
      this.projectservice.getProductsByProjectId(project.id).subscribe(
        (data) => {
          project.products = data;
          // let count = 0;
          // for (var c in project.products) {
          //   count = count + 1;
          // }
          // this.projectProductCount = c;
          project.productLoader = false;
        },
        (error) => {
          project.productLoader = false;
        }
      );
    }
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
            this.projectservice
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
            this.projectservice
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
            this.projectservice
              .reviewProductStatus(
                this.selectedProduct.id,
                this.popUpForm.value
              )
              .subscribe((data) => {
                this.selectedProduct.status = "REVIEWED";
                this.selectedProduct.comments = data.comments;
                //swal("Product Reviewed successfully!");
                swal(
                  `Product (${this.selectedProduct.productDetailResponse.productCodeName} ${this.selectedProduct.productDetailResponse.productFamilyName} ${this.selectedProduct.productDetailResponse.versionName}) Reviewed successfully!`
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
            this.projectservice
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
  submitProductStatus(pro) {
    this.selectedProductCode = pro.productDetailResponse.productCodeName;
    this.selectedProductFamily = pro.productDetailResponse.productFamilyName;
    this.selectedProductVersion = pro.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Submit";
    this.selectedProduct = pro;
  }
  reviewProductStatus(pro) {
    this.selectedProductCode = pro.productDetailResponse.productCodeName;
    this.selectedProductFamily = pro.productDetailResponse.productFamilyName;
    this.selectedProductVersion = pro.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Review";
    this.selectedProduct = pro;
  }
  approveProductStatus(pro) {
    this.selectedProductCode = pro.productDetailResponse.productCodeName;
    this.selectedProductFamily = pro.productDetailResponse.productFamilyName;
    this.selectedProductVersion = pro.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Approved";
    this.selectedProduct = pro;
  }
  rejectProductStatus(pro) {
    this.selectedProductCode = pro.productDetailResponse.productCodeName;
    this.selectedProductFamily = pro.productDetailResponse.productFamilyName;
    this.selectedProductVersion = pro.productDetailResponse.versionName;
    this.showModal = true;
    this.popUpForm.controls["comment"].setValidators(Validators.required);
    this.commentSubmitButton = "Reject";
    this.selectedProduct = pro;
    this.popUpForm.reset();
  }
  hide() {
    this.showModal = false;
  }
  hideCommentModel() {
    this.showCommentModal = false;
  }
  showComments(pro) {
    console.log(pro.comments);
    this.comments = pro.comments;
    if (this.comments.length > 0) {
      this.showCommentModal = true;
      this.selectedProductCode = pro.productDetailResponse.productCodeName;
      this.selectedProductFamily = pro.productDetailResponse.productFamilyName;
      this.selectedProductVersion = pro.productDetailResponse.versionName;
    } else {
      swal("No Comments Found");
    }
  }

  hasUserId(c) {
    if (c.commentedById == this.userId) {
      return true;
    } else {
      return false;
    }
  }
  renewProductStatus(pro) {
    this.selectedProduct = pro;
    this.showRenewModal = true;
  }
  hideRenewModel() {
    this.showRenewModal = false;
  }
  onSubmitStartDate() {
    console.log(this.popUpStartDateForm.value);
    this.projectservice
      .renewProjectProduct(
        this.selectedProduct.id,
        this.popUpStartDateForm.value
      )
      .subscribe(
        (data) => {
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
    console.log(this.projects);
    this.projects.sort(function (a, b) {
      var nameA = a.customerName.toLowerCase(),
        nameB = b.customerName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  reverseAphabetically() {
    this.projects.reverse();
  }
  viewLicenses(project, event) {
    project.productLoader = true;
    console.log(project.id);
    this.projectservice.getProjectLicenseById(project.id).subscribe(
      (data) => {
        console.log(data);
        this.licenses = data;
        project.licenceActive = true;
        project.ProductActive = false;
        project.productLoader = false;
      },
      (error) => {
        project.licenceActive = false;
        project.ProductActive = false;
      }
    );
  }
  productsCount(project) {
    project.licenceActive = false;
    project.ProductActive = true;
  }
  createExcelLicense(project) {
    // var FileSaver = require("file-saver");
    // var blob = new Blob(["Hello, world!"], {
    //   type: "text/plain;charset=utf-8",
    // });
    // FileSaver.saveAs(blob, "hello world.txt");
    this.projectservice.createExcelbyProjectId(project.id).subscribe((data) => {
      const blob = new Blob([data.body], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      FileSaver.saveAs(blob, data.headers.get("fileName"));
    });
  }

  // createExcelLicense(project) {
  //   this.projectservice
  //     .createExcelbyProjectId(project.id)
  //     .subscribe((response) => {
  //       if (response) {
  //         console.log(response);
  //         var contentType =
  //           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  //         let blob = new Blob([response._body], { type: contentType });
  //         let link = document.createElement("a");
  //         link.href = URL.createObjectURL(blob);
  //         link.download = "report.xlsx";
  //         link.click();
  //       }
  //     });
  // }
}
