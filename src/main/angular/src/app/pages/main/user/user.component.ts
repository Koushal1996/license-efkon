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
        console.log(this.users);
        this.usersCopy = JSON.parse(JSON.stringify(data));
        this.isloader = false;
      },
      (error) => {}
    );
    this.serachUserForm = this.fb.group({
      name: [""],
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
    // var element = document.getElementById("item");
    // element.classList.add("highlight");
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
            swal(`${item.name} Delete successfully!`);
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
    swal({
      //title: "Are you sure?",
      text: `Are you sure,You want to activate ${item.name}?`,
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      } else {
        this._admin.activateUser(item.id).subscribe(
          (data) => {
            item.active = true;
            swal(`${item.name} Activate successfully!`);
          },
          (error) => {}
        );
      }
    });
  }

  onSearchUser(key) {
    console.log(key);
    if (key) {
      this.users = this.users.filter(
        (item) =>
          (item.name && item.name.toLowerCase().startsWith(key)) ||
          (item.username && item.username.toLowerCase().startsWith(key)) ||
          (item.email && item.email.toLowerCase().startsWith(key)) ||
          (item.contactNo && item.contactNo.startsWith(key))
      );
    } else {
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
  showRoleAuthoities(role) {
    console.log(role.id);
    console.log(role.authorities);
    this.selectedAuthorites = role.authorities;
    this.showModal = true;
  }
  hideModel() {
    this.showModal = false;
    console.log("hide");
    console.log(this.showModal);
  }
}
