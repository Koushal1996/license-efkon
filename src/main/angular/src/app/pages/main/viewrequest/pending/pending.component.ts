import { StorageService } from "src/app/services/storage/storage.service";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import swal from "sweetalert";
import { Router, ActivatedRoute } from "@angular/router";
import { MainService } from "src/app/services/main/main.service";
declare let $: any;

@Component({
  selector: "app-pending",
  templateUrl: "./pending.component.html",
  styleUrls: ["./pending.component.scss"],
})
export class PendingComponent implements OnInit {
  productPendingRequests: any;
  showRejectModal: boolean = false;
  popUpRejectForm: any;
  selectedRejectProductId: any;
  commentSubmitButton: string;
  comments: any;
  showCommentModal: boolean = false;
  selectedProductVersion: any;
  selectedProductFamily: any;
  selectedProductCode: any;
  userId: any;
  isloader: boolean = true;
  selectedProduct: any;

  constructor(
    private productservice: ProductService,
    private fb: FormBuilder,
    private _storageService: StorageService,
    private route: Router,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.viewRequestPending();
    this.popUpRejectForm = this.initpopUpRejectForm();
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
  viewRequestPending() {
    this.productservice.viewRequestPending().subscribe((data) => {
      console.log(data);
      this.productPendingRequests = data;
      this.isloader = false;
    });
  }
  initpopUpRejectForm() {
    return this.fb.group({
      comment: ["", [Validators.required]],
    });
  }
  updateProductLicenseReject(product) {
    $("#" + product.id).addClass("highlight");

    this.selectedProduct = product;
    this.selectedRejectProductId = product.id;
    this.showRejectModal = true;
  }
  updateProductLicenseAccept(product) {
    this.productservice.selecetedProductPending.next(product);
    this.route.navigate(["/viewrequest/pending", product.id]);
  }

  hide(selectedProduct) {
    this.showRejectModal = false;
    $("#" + selectedProduct).removeClass("highlight");
  }
  onSubmitComment() {
    console.log(this.popUpRejectForm.value);
    this.showRejectModal = false;

    swal({
      text: "Are you sure,You want to Reject this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + this.selectedProduct.id).removeClass("highlight");
      } else {
        this.productservice
          .updateProductLicenseReject(
            this.selectedRejectProductId,
            this.popUpRejectForm.value
          )
          .subscribe(
            (data) => {
              console.log(data);
              swal(
                "update product license request status to rejected successfully!"
              );
              $("#" + this.selectedProduct.id).removeClass("highlight");

              this.showRejectModal = false;
              this.popUpRejectForm.reset();
              this.viewRequestPending();
            },
            (error) => {
              this.showRejectModal = false;
              this.popUpRejectForm.reset();
            }
          );
      }
    });
  }
  hideCommentModel() {
    this.showCommentModal = false;
  }
  showComments(product) {
    console.log(product);
    console.log(product.comments);
    this.comments = product.comments;
    if (this.comments.length > 0) {
      this.selectedProductCode =
        product.projectProductResponse.productDetail.productCodeName;
      this.selectedProductFamily =
        product.projectProductResponse.productDetail.productFamilyName;
      this.selectedProductVersion =
        product.projectProductResponse.productDetail.versionName;
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
}
