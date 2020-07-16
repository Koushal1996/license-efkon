import { ProductService } from "./../../../../services/product/product.service";
import { StorageService } from "src/app/services/storage/storage.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

import { ProjectService } from "./../../../../services/project/project.service";
import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
declare let $: any;

@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent implements OnInit {
  projectTypes: any;
  projectTypeForm: FormGroup;
  showForm: boolean;
  isloader: boolean = true;

  constructor(
    private projectservice: ProjectService,
    private fb: FormBuilder,
    private productservice: ProductService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this.getProjectTypes();

    this.projectTypeForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  getProjectTypes() {
    this.projectservice.getProjectTypes().subscribe(
      (data) => {
        this.projectTypes = data;
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }

  deleteProjectTypes(type) {
    $("#" + type.id).addClass("highlight");
    swal({
      text: `Are you sure, You want to delete Project Type (${type.name})`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + type.id).removeClass("highlight");
      } else {
        console.log(type);
        this.projectservice.deleteProjectTypeById(type.id).subscribe((data) => {
          console.log(data);
          type.active = false;
          swal(`Project Type (${type.name}) deleted successfully!`);

          //this.getProjectTypes();
        });
        $("#" + type.id).removeClass("highlight");
      }
    });
  }
  activateProjectTypes(type) {
    $("#" + type.id).addClass("highlight");
    swal({
      text: `Are you sure, You want to activate Project Type (${type.name})`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + type.id).removeClass("highlight");
      } else {
        console.log(type);
        this.projectservice
          .activateProjectTypeById(type.id)
          .subscribe((data) => {
            console.log(data);
            type.active = true;
            swal(`Project Type (${type.name}) activated successfully!`);
            // this.getProjectTypes();
          });
        $("#" + type.id).removeClass("highlight");
      }
    });
  }
  addProjectType() {
    this.showForm = true;
  }
  goback() {
    this.showForm = false;
  }
  onSubmit() {
    console.log(this.projectTypeForm.value);
    this.projectservice
      .addProjectType(this.projectTypeForm.value.name)
      .subscribe((data) => {
        console.log(data);
        this.showForm = false;
        swal(`New Project Type (${data.name}) added Sucessfully!`);
        this.getProjectTypes();
      });
  }
}
