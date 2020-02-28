import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private roter:Router){

  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  logout()
  {
    window.localStorage.removeItem('UserId');
    window.localStorage.removeItem('password');
     this.roter.navigate(['/login'])
  }
  submenu:boolean=false;
  subMenu1()
  {
    this.submenu=!this.submenu;
  }

}
