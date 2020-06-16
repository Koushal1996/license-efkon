import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";
import swal from "sweetalert";
import { MainService } from "src/app/services/main/main.service";

@Component({
  selector: "app-accepted",
  templateUrl: "./accepted.component.html",
  styleUrls: ["./accepted.component.scss"],
})
export class AcceptedComponent implements OnInit {
  productAcceptedRequests: any;
  comments: any;
  showCommentModal: boolean = false;
  selectedProductVersion: any;
  selectedProductFamily: any;
  selectedProductCode: any;
  userId: any;
  isloader: boolean = true;

  constructor(
    private productservice: ProductService,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.productservice.viewRequestAccepted().subscribe((data) => {
      console.log(data);
      this.productAcceptedRequests = data;
      this.isloader = false;
    });
    this.mainService.getLoginUser().subscribe((data) => {
      this.userId = data.id;
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
