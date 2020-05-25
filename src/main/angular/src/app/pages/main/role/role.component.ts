import { StorageService } from "./../../../services/storage/storage.service";
import { AdminService } from "./../../../services/admin/admin.service";
import { Component, OnInit } from "@angular/core";
import { _keyValueDiffersFactory } from "@angular/core/src/application_module";
import { hasLifecycleHook } from "@angular/compiler/src/lifecycle_reflector";
import { Router } from "@angular/router";
import swal from "sweetalert";
import { FormGroup, FormBuilder } from "@angular/forms";

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
        this.rolesCopy = data;
        console.log(this.roles);
        this.isloader = false;
      },
      (error) => {
        console.log(error);
      }
    );

    this.serachRoleForm = this.fb.group({
      name: [""],
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
    swal({
      title: "You sure?",
      text: `You want to delete ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      } else {
        this._adminService.deleteRole(item.id).subscribe(
          (data) => {
            item.active = false;
            swal(`${item.name} Delete successfully!`);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
  activaterole(item) {
    swal({
      title: "Are you sure?",
      text: `You want to activate ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      } else {
        this._adminService.activateRole(item.id).subscribe(
          (data) => {
            item.active = true;
            swal(`${item.name} Activate successfully!`);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  createRole() {
    this.route.navigate(["roles/create"]);
  }
  onSearchRole() {
    if (this.serachRoleForm.get("name").value) {
      this.roles = this.roles.filter((item) =>
        item.name
          .toLowerCase()
          .startsWith(this.serachRoleForm.get("name").value)
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
    this.roles.reverse();
  }
}
