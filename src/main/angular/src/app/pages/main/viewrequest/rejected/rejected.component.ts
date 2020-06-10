import { ProductService } from "./../../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rejected",
  templateUrl: "./rejected.component.html",
  styleUrls: ["./rejected.component.scss"],
})
export class RejectedComponent implements OnInit {
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.productservice.viewRequestRejected().subscribe((data) => {
      console.log(data);
    });
  }
}
