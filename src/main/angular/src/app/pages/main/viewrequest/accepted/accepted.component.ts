import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";

@Component({
  selector: "app-accepted",
  templateUrl: "./accepted.component.html",
  styleUrls: ["./accepted.component.scss"],
})
export class AcceptedComponent implements OnInit {
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.productservice.viewRequestAccepted().subscribe((data) => {
      console.log(data);
    });
  }
}
