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
  searchProjectsForm: FormGroup;
  projectsCopy: any[];
  showBeforeDays: any;
  startDateChange: any;
  sDate: any;
  renewStartDate: string;
  totolProductsCount: any;
  iProductCount: any;
  constructor(
    private projectservice: ProjectService,
    private _storageService: StorageService,
    private mainService: MainService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProjects();
    this.getrenewConfiguration();
    this.popUpForm = this.initpopUpForm();
    this.popUpStartDateForm = this.initpopUpStartDateForm();
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
    });
    this.searchProjectsForm = this.fb.group({
      Search: [""],
    });
  }
  onsearchProjectsForm(key) {
    console.log(key);
    if (key) {
      this.projects = this.projects.filter(
        (item) =>
          (item.customerName &&
            item.customerName.toLowerCase().startsWith(key)) ||
          (item.customerEmail &&
            item.customerEmail.toLowerCase().startsWith(key)) ||
          // (item.projectManagerName &&
          //   item.projectManagerName.toLowerCase().startsWith(key)) ||
          (item.customerContactNo && item.customerContactNo.startsWith(key))
      );
    } else {
      this.projects = this.projectsCopy;
    }
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  getrenewConfiguration() {
    this.projectservice.renewConfiguration().subscribe((data) => {
      console.log("getrenewConfiguration");
      console.log(data);
      this.showBeforeDays = data.showBeforeDays;
      this.startDateChange = data.startDateChange;
      console.log(this.showBeforeDays);
    });
  }
  hasRenewDays(pro) {
    let currentDate = new Date().toISOString().split("T")[0];
    //console.log(currentDate);
    //console.log(pro.endDate);

    this.sDate = pro.endDate;
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
        this.projectsCopy = JSON.parse(JSON.stringify(data));
        this.isloader = false;
      },
      (error) => {}
    );
  }
  createpProject() {
    this.route.navigate(["projects/create"]);
  }
  editProject(project) {
    this.projectservice.selecetedProject.next(project);
    this.route.navigate([`projects/${project.id}`]);
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
      // project.productLoader = true;
      // this.projectservice.getProductsByProjectId(project.id).subscribe(
      //   (data) => {
      //     project.products = data;
      //     project.productLoader = false;
      //   },
      //   (error) => {
      //     project.productLoader = false;
      //   }
      // );
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
  renewProductStatus(pro, project) {
    // console.log(project.productsCount);
    // this.iProductCount = project.productsCount;
    this.selectedProduct = pro;
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
  getToday(): string {
    return this.renewStartDate;
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
          this.productsCount(this.totolProductsCount);
          this.getProjects();
          swal("Product Renewed successfully!");
        },
        (error) => {
          this.popUpStartDateForm.reset();
          this.showRenewModal = false;
        }
      );
  }

  viewLicenses(project) {
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
    this.totolProductsCount = project;
    project.licenceActive = false;
    project.ProductActive = true;
    project.productLoader = true;
    this.projectservice.getProductsByProjectId(project.id).subscribe(
      (data) => {
        // console.log("data.length");
        // console.log(data.length);
        this.iProductCount = data.length;
        project.products = data;

        project.productLoader = false;
      },
      (error) => {
        project.productLoader = false;
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
  createExcelLicense(project) {
    // var FileSaver = require("file-saver");
    // var blob = new Blob(["Hello, world!"], {
    //   type: "text/plain;charset=utf-8",
    // });
    // FileSaver.saveAs(blob, "hello world.txt");
    this.projectservice.createExcelbyProjectId(project.id).subscribe((data) => {
      console.log(data);
      const blob = new Blob([data.body], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      //FileSaver.saveAs(blob, data.headers.get("fileName"));
      FileSaver.saveAs(blob, project.customerName);
    });
  }
  createPdfLicense(project) {
    this.projectservice.createPdfbyProjectId(project.id).subscribe((data) => {
      console.log(data);
      const blob = new Blob([data.body], {
        // type: "application/pdf;charset=utf-8",
        type: "  application/pdf;base64",
      });
      FileSaver.saveAs(blob, project.customerName);
    });
  }
}
