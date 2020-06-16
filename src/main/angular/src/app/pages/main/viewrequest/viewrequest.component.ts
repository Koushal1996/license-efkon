import { ProductService } from "./../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage/storage.service";
declare let $: any;

@Component({
  selector: "app-viewrequest",
  templateUrl: "./viewrequest.component.html",
  styleUrls: ["./viewrequest.component.scss"],
})
export class ViewrequestComponent implements OnInit {
  constructor(
    private productservice: ProductService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    // this.productservice.viewRequest("PENDING").subscribe((data) => {
    //   console.log(data);
    // });
    // this.productservice.viewRequestPending().subscribe((data) => {
    //   console.log(data);
    // });
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  activeParentTab() {
    $("#View-Request").addClass("active");
  }
}
