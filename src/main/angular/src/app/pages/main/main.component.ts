import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pages: [
    { route: '/roles', title: 'Roles' },
    { route: '/users', title: 'Users' }
  ]

  constructor() { }

  ngOnInit() {
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

  }

}
