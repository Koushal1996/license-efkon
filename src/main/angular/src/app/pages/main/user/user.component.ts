import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AdminService } from "./../../../services/admin/admin.service";
import swal from "sweetalert";
import { StorageService } from "src/app/services/storage/storage.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
declare let $: any;
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  public users = [];
  isloader: boolean = true;
  serachUserForm: FormGroup;
  filter: any[];
  usersCopy: any[] = [];
  showModal: boolean = false;
  selectedAuthorites: any;
  itemId: any;
  roleName: any;
  filterRoleForm: FormGroup;
  form: FormGroup;

  constructor(
    private _admin: AdminService,
    private route: Router,
    private _storageService: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this._admin.getUsers().subscribe(
      (data) => {
        this.users = data;
        // console.log(this.users);
        this.usersCopy = JSON.parse(JSON.stringify(data));
        this.isloader = false;
        this.filterRoleForm.controls["productStatus"].patchValue("All");
      },
      (error) => {}
    );
    this.serachUserForm = this.fb.group({
      name: [""],
    });
    this.filterRoleForm = this.fb.group({
      productStatus: [""],
    });
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  deleteuser(item) {
    //$("#item").addClass("highlight");
    $("#" + item.id).addClass("highlight");
    swal({
      // title: "You sure?",
      text: `Are you sure, You want to delete ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + item.id).removeClass("highlight");
      } else {
        this._admin.deleteUser(item.id).subscribe(
          (data) => {
            item.active = false;
            swal(`${item.name} deleted successfully!`);
            $("#" + item.id).removeClass("highlight");
          },
          (error) => $("#" + item.id).removeClass("highlight")
        );
      }
    });
  }

  createuser() {
    console.log("data");
    this._admin.selecetedUser.subscribe((data) => {
      console.log(data);
    });

    this.route.navigate(["users/create"]);
  }
  edituser(item) {
    this._admin.selecetedUser.next(item);
    this.route.navigate(["users", item.id]);
  }

  activateuser(item) {
    $("#" + item.id).addClass("highlight");
    swal({
      //title: "Are you sure?",
      text: `Are you sure,You want to activate ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $("#" + item.id).removeClass("highlight");
      } else {
        this._admin.activateUser(item.id).subscribe(
          (data) => {
            item.active = true;
            swal(`${item.name} activated successfully!`);
            $("#" + item.id).removeClass("highlight");
          },
          (error) => {
            $("#" + item.id).removeClass("highlight");
          }
        );
      }
    });
  }

  onSearchUser(key) {
    console.log(key);
    if (key) {
      this.users = this.usersCopy.filter(
        (item) =>
          //console.log(item)
          item.name.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
          item.username.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
          item.contactNo.toLowerCase().indexOf(key.toLowerCase()) > -1
      );
    } else {
      this.users = this.usersCopy;
    }
  }
  onFilterUser(key) {
    this.users = this.usersCopy;
    console.log(key);
    if (key) {
      this.users = this.users.filter((item) => {
        if (
          item.roles.filter((data) => {
            // console.log("data:" + JSON.stringify(data);
            if (data.name == key) {
              return data;
            }
          }).length > 0
        ) {
          return item;
        }
      });
      console.log(this.users);
    } else {
      this.users = this.usersCopy;
    }
    if (key == "All") {
      this.users = this.usersCopy;
    }
  }

  sortAphabetically() {
    console.log(this.users);
    this.users.sort(function (a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  reverseAphabetically() {
    this.users.reverse();
  }
  sortUserNameAphabetically() {
    this.users.sort(function (a, b) {
      var nameA = a.username.toLowerCase(),
        nameB = b.username.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  reverseUserNameAphabetically() {
    this.users.reverse();
  }
  showRoleAuthoities(role, item) {
    $("#" + item.id).addClass("highlight");
    console.log(item.id);
    this.itemId = item.id;
    console.log(role.authorities);
    this.selectedAuthorites = role.authorities;
    this.showModal = true;
  }
  hideModel() {
    console.log(this.itemId);
    $("#" + this.itemId).removeClass("highlight");
    this.showModal = false;
    console.log("hide");
    console.log(this.showModal);
  }
}
