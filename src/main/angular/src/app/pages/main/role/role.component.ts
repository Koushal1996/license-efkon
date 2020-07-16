import { StorageService } from "./../../../services/storage/storage.service";
import { AdminService } from "./../../../services/admin/admin.service";
import { Component, OnInit } from "@angular/core";
import { _keyValueDiffersFactory } from "@angular/core/src/application_module";
import { hasLifecycleHook } from "@angular/compiler/src/lifecycle_reflector";
import { Router } from "@angular/router";
import swal from "sweetalert";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
declare let $: any;

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
  public roles = [];
  isloader: boolean = true;
  authorities: any;
  AuthoritiesName: any;
  serachRoleForm: FormGroup;
  rolesCopy: any[];
  form: FormGroup;

  constructor(
    private _adminService: AdminService,
    private route: Router,
    private _storageService: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this._adminService.getRoles().subscribe(
      (data) => {
        this.roles = data;
        this.rolesCopy = JSON.parse(JSON.stringify(data));
        console.log(this.roles);
        this.isloader = false;
      },
      (error) => {
        console.log(error);
        this.isloader = false;
      }
    );

    this.serachRoleForm = this.fb.group({
      name: [""],
    });
    this.form = new FormGroup({
      search: new FormControl(null),
    });
  }

  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }

  editrole(item) {
    this._adminService.selecetedRole.next(item);
    this.route.navigate(["roles", item.id]);
  }

  deleterole(item) {
    $("#" + item.id).addClass("highlight");
    swal({
      //title: "You sure?",
      text: `Are you sure, You want to delete ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + item.id).removeClass("highlight");
      } else {
        this._adminService.deleteRole(item.id).subscribe(
          (data) => {
            item.active = false;
            swal(`${item.name} deleted successfully!`);
            $("#" + item.id).removeClass("highlight");
          },
          (error) => {
            console.log(error);
            $("#" + item.id).removeClass("highlight");
          }
        );
      }
    });
  }
  activaterole(item) {
    $("#" + item.id).addClass("highlight");
    swal({
      //title: "Are you sure?",
      text: `Are you sure, You want to activate ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + item.id).removeClass("highlight");
      } else {
        this._adminService.activateRole(item.id).subscribe(
          (data) => {
            item.active = true;
            swal(`${item.name} activated successfully!`);
            $("#" + item.id).removeClass("highlight");
          },
          (error) => {
            $("#" + item.id).removeClass("highlight");
            console.log(error);
          }
        );
      }
    });
  }

  createRole() {
    this.route.navigate(["roles/create"]);
  }
  // onSearchRole() {
  //   if (this.serachRoleForm.get("name").value) {
  //     this.roles = this.roles.filter((item) =>
  //       item.name
  //         .toLowerCase()
  //         .startsWith(this.serachRoleForm.get("name").value)
  //     );
  //   } else {
  //     this.roles = this.rolesCopy;
  //   }
  // }

  onSearchRole() {
    let key = this.serachRoleForm.get("name").value;
    if (key) {
      this.roles = this.rolesCopy.filter(
        (item) => item.name.toLowerCase().indexOf(key.toLowerCase()) > -1
      );
    } else {
      this.roles = this.rolesCopy;
    }
  }

  sortAphabetically() {
    console.log(this.roles);
    this.roles.sort(function (a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  reverseAphabetically() {
    // this.roles.reverse();
    this.roles.sort(function (b, a) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
}
