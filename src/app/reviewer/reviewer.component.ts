import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss']
})
export class ReviewerComponent implements OnInit {

  constructor(private roter: Router) {

  }

  ngOnInit(): void {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  logout() {
    window.localStorage.removeItem('UserId');
    window.localStorage.removeItem('password');
    this.roter.navigate(['/login'])
  }
  submenu: boolean = false;
  subMenu1() {
    this.submenu = !this.submenu;
  }

}
