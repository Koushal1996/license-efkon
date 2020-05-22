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
  constructor(
    private _projectService: ProjectService,
    private _storageService: StorageService,
    private mainService: MainService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProjectProducts();
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
    });
    this.popUpForm = this.initpopUpForm();
    this.popUpStartDateForm = this.initpopUpStartDateForm();
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
      expirationMonthCount: ["", [Validators.min(1)]],
    });
  }
  deleteProduct(project) {
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
        this._projectService.deleteProduct(project.id).subscribe(
          (data) => {
            swal("Delete Successfully!");
            // this.getProjectProducts();
            this.projectProduct.splice(
              this.projectProduct.findIndex((pd) => pd.id == project.id),
              1
            );
          },
          (error) => {}
        );
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
                swal("Project Submitted successfully!");
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
                swal("Project Rejected successfully!");
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
                swal("Project Reviewed successfully!");
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
                swal("Project Approved successfully!");
              });
          }
        });
        break;
    }
  }
  submitProductStatus(project) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Submit";
    this.selectedProduct = project;
  }
  reviewProductStatus(project) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Review";
    this.selectedProduct = project;
  }
  approveProductStatus(project) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Approved";
    this.selectedProduct = project;
  }
  rejectProductStatus(project) {
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
        swal("License key generate successfully!");
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
            swal("License key update successfully!");
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
          console.log(data);
          this.selectedProduct.status = data.status;
          this.selectedProduct.endDate = data.endDate;
          this.selectedProduct.startDate = data.startDate;
          this.selectedProduct.expirationMonthCount = data.expirationMonthCount;
          this.showRenewModal = false;
          this.popUpStartDateForm.reset();
        },
        (error) => {
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
