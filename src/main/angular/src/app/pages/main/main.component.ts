import { StorageService } from "./../../services/storage/storage.service";
import { MainService } from "./../../services/main/main.service";
import { Router } from "@angular/router";
import { AdminService } from "./../../services/admin/admin.service";
import { Component, OnInit } from "@angular/core";
import swal from "sweetalert";
declare let $: any;
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  pages: any[] = [
    {
      route: "/dashboard",
      title: "Dashboard",
      privilege: "DASHBOARD_FETCH",
      imagePath: "assets/images/dashboard.png",
    },
    {
      route: "/projects",
      title: "Projects",
      privilege: "PROJECT_FETCH",
      imagePath: "assets/images/project.png",
    },

    {
      route: "/projectproduct",
      title: "Project-Products",
      privilege: "PROJECT_PRODUCT_FETCH",
      imagePath: "assets/images/product_project.png",
    },
    {
      route: "/viewrequest/pending",
      title: "View-Requests",
      privilege: "LICENSE_REQUEST_FETCH",
      imagePath: "assets/images/view_request.png",
    },
    {
      route: "/report",
      title: "Reports",
      privilege: "REPORT_FETCH",
      imagePath: "assets/images/google.svg",
    },
    {
      route: "/products/family",
      title: "Configuration",
      privilege: "PRODUCT_DETAIL_FETCH",
      imagePath: "assets/images/configuration.png",
    },
    {
      route: "/roles",
      title: "Roles",
      privilege: "ROLE_FETCH",
      imagePath: "assets/images/role.png",
    },
    {
      route: "/users",
      title: "Users",
      privilege: "USER_FETCH",
      imagePath: "assets/images/user.png",
    },
  ];
  UserInfo: any;
  UserAuthorities;
  UserRole: any;
  UserInfoo: any;
  constructor(
    private adminService: AdminService,
    private route: Router,
    private mainService: MainService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    console.log(this.pages);
    this.mainService.getLoginUser().subscribe((data) => {
      console.log(data);
      this.UserInfo = data.name;

      this.UserRole = data.roles;
      this._storageService.storeData("userAuthorities", data.authorities);
    });
  }
  pageAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  ngAfterViewInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  // Open/Close Menu
  myMenu: boolean = true;
  menu() {
    this.myMenu = !this.myMenu;
  }

  logout() {
    swal({
      text: "Are you sure, You want to logout?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      } else {
        this.adminService.logout().subscribe(
          (data) => {
            localStorage.clear();
            this.route.navigate(["login"]);
          },
          (error) => {}
        );
      }
    });
  }
  userProfile() {
    //this.route.navigate(["profile"]);
  }
  activeClass(id: string) {
    $(".main-menu").removeClass("active");
    $("#" + id).addClass("active");
  }
}
