import { ProductService } from "./../../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main/main.service";
import swal from "sweetalert";
declare let $: any;
@Component({
  selector: "app-rejected",
  templateUrl: "./rejected.component.html",
  styleUrls: ["./rejected.component.scss"],
})
export class RejectedComponent implements OnInit {
  productRejectRequests: any;
  comments: any;
  showCommentModal: boolean = false;
  selectedProductVersion: any;
  selectedProductFamily: any;
  selectedProductCode: any;
  userId: any;
  isloader: boolean = true;
  selectedComment: any;

  constructor(
    private productservice: ProductService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.productservice.viewRequestRejected().subscribe((data) => {
      console.log(data);
      this.productRejectRequests = data;
      this.isloader = false;
    });
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
    });
  }
  hideCommentModel(selectedComment) {
    this.showCommentModal = false;
    $("#" + selectedComment.id).removeClass("highlight");
  }
  showComments(product) {
    $("#" + product.id).addClass("highlight");
    this.selectedComment = product;
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
