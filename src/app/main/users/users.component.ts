import { Component, OnInit } from '@angular/core';
import * as bootbox from 'bootbox/bootbox.js'
import { UsersServicesService } from './users-services.service';
import { Routes } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   router:Routes =[
    {path:'createUser',component:CreateUserComponent}
  ]
  myAllUser:any;
  expression:string='green'
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {
    this.myAllUser=this.userServices.users;
    console.log(this.myAllUser);

  }

}
