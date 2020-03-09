import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from './users-services.service';

@Component({
  selector: 'app-approver-users',
  templateUrl: './approver-users.component.html',
  styleUrls: ['./approver-users.component.scss']
})
export class ApproverUsersComponent implements OnInit {
 myAllUser:any;
  expression:string='green'
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {
    this.myAllUser=this.userServices.users;
    console.log(this.myAllUser);
  }
}
