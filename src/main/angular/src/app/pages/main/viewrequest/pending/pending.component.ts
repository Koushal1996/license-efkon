import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";

@Component({
  selector: "app-pending",
  templateUrl: "./pending.component.html",
  styleUrls: ["./pending.component.scss"],
})
export class PendingComponent implements OnInit {
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.productservice.viewRequestPending().subscribe((data) => {
      console.log(data);
    });
  }
}
