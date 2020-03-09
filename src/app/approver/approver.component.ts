import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.scss']
})
export class ApproverComponent implements OnInit {

  constructor(private roter: Router) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  // Logout
  logout() {
    window.localStorage.removeItem('UserId');
    window.localStorage.removeItem('password');
    this.roter.navigate(['/login'])
  }
  // Submenu of License to hide/show
  submenu: boolean = false;
  subMenu1() {
    this.submenu = !this.submenu;
  }

}
