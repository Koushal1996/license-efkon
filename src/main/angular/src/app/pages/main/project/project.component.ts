import { MainService } from "./../../../services/main/main.service";
import { StorageService } from "./../../../services/storage/storage.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./../../../services/project/project.service";
import swal from "sweetalert";
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
      comment: [""],
    });
  }
  initpopUpStartDateForm() {
    return this.fb.group({
      startDate: [""],
      expirationMonthCount: ["", [Validators.min(1)]],
    });
  }
  getProjects() {
    this.projectservice.getProjects().subscribe(
      (data) => {
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
        this.projectservice.deleteProduct(pro.id).subscribe(
          (data) => {
            swal("Delete Successfully!");
            this.getProjects();
          },
          (error) => {}
        );
      }
    });
  }
  editProduct(project, product) {
    this.projectservice.selecetedProduct.next(product);
    this.route.navigate([`projects/${project.id}/product/${product.id}`]);
  }
  getProductsByProjectId(event, project) {
    if ($(event)[0].ariaExpanded == null || $(event).hasClass("collapsed")) {
      project.productLoader = true;
      this.projectservice.getProductsByProjectId(project.id).subscribe(
        (data) => {
          project.products = data;
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
            this.projectservice
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
            this.projectservice
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
            this.projectservice
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
  submitProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Submit";
    this.selectedProduct = pro;
  }
  reviewProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Review";
    this.selectedProduct = pro;
  }
  approveProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = "Approved";
    this.selectedProduct = pro;
  }
  rejectProductStatus(pro) {
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
    this.comments = pro.comments;
    if (this.comments.length > 0) {
      this.showCommentModal = true;
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
          this.showRenewModal = false;
        }
      );
  }
}
