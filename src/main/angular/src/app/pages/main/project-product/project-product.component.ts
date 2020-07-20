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
import * as XLSX from "xlsx";

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
  projectProductsCopy: any[] = [];
  productStatusValue: any;
  selectedComment: any;
  searchProjectProductsForm: FormGroup;
  //storeData: string | ArrayBuffer;
  fileUploaded: File;
  worksheet: any;
  ProjectIdUploadFile: any;
  file: any;
  userRoles: any[] = [];
  selectedUserRole: any;
  filterStatus: any[] = [];
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
      this.productStatusValue = params["status"];
      console.log(this.productStatusValue);
      if (this.productStatusValue) {
        this.productStatusValue = this.productStatusValue.toUpperCase();
      }
    });
    this.form = new FormGroup({
      search: new FormControl(null),
    });
    this.mainService.getLoginUser().subscribe((data) => {
      //console.log(data);
      this.userRoles = data.roles;
      //console.log(this.userRoles[0].name);
      this.selectedUserRole = this.userRoles[0].name;
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
  hasExpired(project) {
    let currentDate = new Date().toISOString().split("T")[0];
    //console.log("current" + currentDate);
    // console.log("end" + project.endDate);
    if (currentDate >= project.endDate) {
      //return false;
      return true;
    } else {
      //return true;
      return false;
    }
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
    this._projectService.getProjectProducts().subscribe(
      (data) => {
        this.projectProducts = data;
        this.projectProductsCopy = data;
        this.productCountsStatus = this.projectProductsCopy.map(
          (item) => item.status
        );
        //console.log(this.productCountsStatus);
        let count = 0;
        let start = false;
        for (var j = 0; j < this.productCountsStatus.length; j++) {
          for (var k = 0; k < this.filterStatus.length; k++) {
            if (this.productCountsStatus[j] == this.filterStatus[k]) {
              start = true;
            }
          }
          count++;
          if (count == 1 && start == false) {
            this.filterStatus.push(this.productCountsStatus[j]);
          }
          start = false;
          count = 0;
        }
        console.log(this.productStatusValue);
        this.filterStatusForm.controls["productStatus"].patchValue("All");
        if (this.productStatusValue) {
          this.filterStatusForm
            .get("productStatus")
            .patchValue(this.productStatusValue);
          // this.filterStatusForm.controls["productStatus"].patchValue(
          //   this.productStatusValue
          //);
        }
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }

  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }

  checkRole(role) {
    const roles = this.userRoles.map((r) => r.name);
    return roles.includes(role);
  }

  checkLicense(licenses) {
    console.log(licenses);
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
          text: `Are you sure,You want to Submit (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
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
                  //this.selectedProduct.status = "SUBMIT";
                  this.selectedProduct.status = data.status;
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
          text: `Are you sure,You want to Reject (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
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
          text: `Are you sure,You want to Review (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
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
                  // this.selectedProduct.status = "REVIEWED";
                  this.selectedProduct.status = data.status;
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
          text: `Are you sure,You want to Approve (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
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
                  //this.selectedProduct.status = "APPROVED";
                  this.selectedProduct.status = data.status;
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
          text: `Are you sure,You want to Recall (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
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
    this.showRenewModal = false;
    swal({
      //title: "Are you sure?",
      text: `Are you sure,You want to Renew (${this.selectedProductFamily} ${this.selectedProductCode} ${this.selectedProductVersion}) Product?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + this.selectedProduct.id).removeClass("highlight");
      } else {
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
              //this.selectedProduct = data;
              this.selectedProduct.status = data.status;
              // this.selectedProduct.endDate = data.endDate;
              // this.selectedProduct.startDate = data.startDate;
              // this.selectedProduct.expirationMonthCount =
              //   data.expirationMonthCount;
              this.showRenewModal = false;
              this.popUpStartDateForm.reset();
              $("#" + this.selectedProduct.id).removeClass("highlight");
              // swal("Project Product Renewed Successfully!");
              swal(
                `Product (${this.selectedProduct.productDetail.productFamilyName} ${this.selectedProduct.productDetail.productCodeName} ${this.selectedProduct.productDetail.versionName}) renewed successfully!`
              );
            },
            (error) => {
              this.popUpStartDateForm.reset();
              this.showRenewModal = false;
              $("#" + this.selectedProduct.id).removeClass("highlight");
            }
          );
      }
    });
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
    //this.projectProducts.reverse();
    this.projectProducts.sort(function (b, a) {
      var statusA = a.status.toLowerCase(),
        statusB = b.status.toLowerCase();
      if (statusA > statusB) return 1;
      if (statusA < statusB) return -1;
      return 0;
    });
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
    // this._projectService.productCountByStatus().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.productCountsStatus = data;
    //   },
    //   (error) => {
    //     this.isloader = false;
    //   }
    // );
  }
  getStatus() {
    this.projectProducts = this.projectProductsCopy;
    console.log(this.filterStatusForm.controls["productStatus"].value);
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

  onsearchProjectProductsForm(key) {
    if (key) {
      this.projectProducts = this.projectProductsCopy.filter(
        (item) =>
          //console.log(item)
          item.project.customerName.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.project.customerEmail.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.project.projectTypeName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1 ||
          item.project.projectManagerName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1 ||
          item.expirationPeriodType.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.licenseTypeName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
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
    this._projectService.getProjectProductsExcel().subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        //FileSaver.saveAs(blob, data.headers.get("fileName"));
        FileSaver.saveAs(blob, "ProjectProducts");
      },
      (error) => {
        swal("Error");
      }
    );
  }
  PdfProjectProducts() {
    this._projectService.getProjectProductsPdf().subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type: "  application/pdf;base64",
        });
        //FileSaver.saveAs(blob, data.headers.get("fileName"));
        FileSaver.saveAs(blob, "ProjectProducts");
      },
      (error) => {
        swal("Error");
      }
    );
  }

  uploadedFile(event, project) {
    // this._projectService.getexcelTemplate().subscribe((data) => {
    //   console.log(data);
    // });
    console.log(event);
    console.log(project);
    this.ProjectIdUploadFile = project;
    console.log(event.target.files[0]);
    this.fileUploaded = event.target.files[0];
    project.isFile = true;
  }
  sendExcel() {
    const formData = new FormData();
    formData.append("projectProductId", this.ProjectIdUploadFile.id);
    formData.append("file ", this.fileUploaded);
    this._projectService.upLoadLicenseDetailByExcel(formData).subscribe(
      (data) => {
        console.log(data);
        const fileAcessId = data.filter((item) => item.accessId);
        console.log(fileAcessId);
        if (fileAcessId.length < 1) {
          swal("File not uploaded");
          this.ProjectIdUploadFile.licenses = data;
          this.form.controls["search"].reset();
          //this.ProjectIdUploadFile.isFile = false;
        } else {
          swal("File Uploaded Sucessfully");
          this.ProjectIdUploadFile.licenses = data;
          //this.ProjectIdUploadFile;
          this.getProjectProducts();
          this.ProjectIdUploadFile.isFile = false;
          this.form.controls["search"].reset();
        }
      },
      (error) => {
        console.log(error);
        this.ProjectIdUploadFile.isFile = false;
        this.form.controls["search"].reset();
      }
    );
  }
}
