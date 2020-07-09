import { StorageService } from "src/app/services/storage/storage.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";
import swal from "sweetalert";
declare let $: any;
@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
})
export class FamilyComponent implements OnInit {
  family = [];
  isloader: boolean = true;
  constructor(
    private _productService: ProductService,
    private route: Router,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this._productService.getProductFamiliesAll().subscribe(
      (data) => {
        this.family = data;
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  addProductFamily() {
    this.route.navigate(["products/family/create"]);
  }
  editFamilyDescription(family) {
    this._productService.selecetedFamily.next(family);
    this.route.navigate(["products/family", family.id]);
  }
  deleteFamilyDescription(family) {
    $("#" + family.id).addClass("highlight");
    swal({
      text: `Are you sure, You want to delete Product family (${family.name})?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + family.id).removeClass("highlight");
      } else {
        this._productService
          .deleteProductFamily(family.id)
          .subscribe((data) => {
            // this.family.splice(
            //   this.family.findIndex((pd) => pd.id == family.id),
            //   1
            // );
            console.log(data);
            family.active = false;
            swal(`Product family (${family.name}) deleted successfully!`);
          });
        $("#" + family.id).removeClass("highlight");
      }
    });
  }
  activateFamilyDescription(family) {
    $("#" + family.id).addClass("highlight");
    swal({
      text: `Are you sure, You want to activate Product family (${family.name})?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + family.id).removeClass("highlight");
      } else {
        this._productService
          .activateProductFamily(family.id)
          .subscribe((data) => {
            console.log(data);
            family.active = true;
            swal(`Product family (${family.name}) activated successfully!`);
          });
        $("#" + family.id).removeClass("highlight");
      }
    });
  }
}
