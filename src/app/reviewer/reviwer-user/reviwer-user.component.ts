import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/approver/users-approver/users-services.service';

@Component({
  selector: 'app-reviwer-user',
  templateUrl: './reviwer-user.component.html',
  styleUrls: ['./reviwer-user.component.scss']
})
export class ReviwerUserComponent implements OnInit {

  myAllUser:any;
  expression:string='green'
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {
    this.myAllUser=this.userServices.users;
    console.log(this.myAllUser);

  }
}
