import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../../../../services/product/product.service";
import swal from "sweetalert";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
})
export class FamilyComponent implements OnInit {
  family = [];
  isloader: boolean = true;
  constructor(private _productService: ProductService, private route: Router) {}

  ngOnInit() {
    this._productService.getProductFamilies().subscribe((data) => {
      this.family = data;
      this.isloader = false;
    });
  }
  addProductFamily() {
    this.route.navigate(["products/family/create"]);
  }
  editFamilyDescription(family) {
    this._productService.selecetedFamily.next(family);
    this.route.navigate(["products/family", family.id]);
  }
  deleteFamilyDescription(family) {
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
        this._productService
          .deleteProductFamily(family.id)
          .subscribe((data) => {
            this.family.splice(
              this.family.findIndex((pd) => pd.id == family.id),
              1
            );
          });
        swal("Product family delete successfully!");
      }
    });
  }
}
