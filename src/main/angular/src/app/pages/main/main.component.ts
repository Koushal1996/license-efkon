import { MainService } from './../../services/main/main.service';
import { Router } from '@angular/router';
import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pages: any[] = [
    { route: '/roles', title: 'Roles' },
    { route: '/users', title: 'Users' },
    { route: '/projects', title: 'Projects'},
    { route: '/products/detail', title: 'Products'}
  ]
  UserInfo: any;

  constructor(private adminService:AdminService,
    private route:Router,
    private mainService:MainService ) { }

  ngOnInit() {
    console.log(this.pages);
    this.mainService.getLoginUser().subscribe(data=>{
      console.log(data)
      this.UserInfo = data.name

    })

  }

  ngAfterViewInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  // Open/Close Menu
  myMenu: boolean = true
  menu() {
    this.myMenu = !this.myMenu
  }

  logout() {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to logout?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["Yes","No"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    this.adminService.logout().subscribe(
      data=>{
        localStorage.clear()
        this.route.navigate(['login'])
      },
      error=>{
        
      }
    )
  }
  })
  }
  userProfile()
  {
    this.route.navigate(['profile'])
  }
}
