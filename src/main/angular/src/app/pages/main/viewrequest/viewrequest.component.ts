import { ProductService } from "./../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viewrequest",
  templateUrl: "./viewrequest.component.html",
  styleUrls: ["./viewrequest.component.scss"],
})
export class ViewrequestComponent implements OnInit {
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    // this.productservice.viewRequest("PENDING").subscribe((data) => {
    //   console.log(data);
    // });
    this.productservice.viewRequestPending().subscribe((data) => {
      console.log(data);
    });
  }
}
