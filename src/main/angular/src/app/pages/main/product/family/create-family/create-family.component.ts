import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../../../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  FormArray,
} from "@angular/forms";
import swal from "sweetalert";

@Component({
  selector: "app-create-family",
  templateUrl: "./create-family.component.html",
  styleUrls: ["./create-family.component.scss"],
})
export class CreateFamilyComponent implements OnInit {
  createFamilyForm: FormGroup;
  productCodes: FormArray;
  familyId;
  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private route: Router,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateroute.params.subscribe((params) => {
      this.familyId = params["id"];
    });
    this.patchavalue();
  }

  initCreateFamilyForm() {
    return this.fb.group({
      name: ["", [Validators.required]],
      code: ["", [Validators.required]],
      description: ["", [Validators.required]],
      productCodes: this.fb.array([]),
    });
  }
  productCode(id: string, name: string) {
    return this.fb.group({
      id: [id, []],
      name: [name, [Validators.required]],
    });
  }
  onAddName(arId: string, name: string): void {
    this.productCodes = this.createFamilyForm.get("productCodes") as FormArray;
    this.productCodes.push(this.productCode(arId, name));
  }
  onDeleteName(i) {
    console.log(i);
    this.productCodes = this.createFamilyForm.get("productCodes") as FormArray;
    this.productCodes.removeAt(i);
  }

  onSubmit() {
    if (this.familyId) {
      this._productService
        .updateProductFamily(this.familyId, this.createFamilyForm.value)
        .subscribe((data) => {
          this.route.navigate(["products/family"]);
          swal("Product family updated successfully!");
        });
    } else {
      this._productService
        .addProductFamily(this.createFamilyForm.value)
        .subscribe((data) => {
          this.route.navigate(["products/family"]);
          swal("New Product family added successfully!");
        });
    }
  }

  patchavalue() {
    this.createFamilyForm = this.initCreateFamilyForm();
    if (this.familyId) {
      this._productService.selecetedFamily.subscribe((data) => {
        this.createFamilyForm.patchValue(data);
        const productCodeIds = <FormArray>(
          this.createFamilyForm.controls["productCodes"]
        );
        if (data.productCodes)
          data.productCodes.forEach((productCode) => {
            productCodeIds.push(
              this.productCode(productCode.id, productCode.name)
            );
          });
      });
    } else {
      const productCodeIds = <FormArray>(
        this.createFamilyForm.controls["productCodes"]
      );
      productCodeIds.push(this.productCode("", ""));
    }
  }
  back() {
    this.route.navigate(["/products/family"]);
  }
}
