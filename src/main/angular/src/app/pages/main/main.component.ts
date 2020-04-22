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
    { route: '/products', title: 'Products'}
  ]

  constructor(private adminService:AdminService,
    private route:Router ) { }

  ngOnInit() {
    console.log(this.pages);

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

}
