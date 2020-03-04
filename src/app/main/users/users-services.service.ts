import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService implements OnInit {
  userData:any
  public users =[
    {username:'Jamshed Ahmad',role:'User', userId:"User-one",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'jmd.amd786@gmail.com',},
    {username:'Rajiv Kumar',role:'Reviewer', userId:"User-Two",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'abd786@gmail.com',},
    {username:'Shani Khan',role:'User', userId:"User-Three",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'asf786@gmail.com',},
    {username:'Rahul Kumar',role:'Approver', userId:"User-Four",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'jkl786@gmail.com',},
    {username:'Yogesh Kumar',role:'Reviewer', userId:"User-Five",MailStatus:'Not Sent',Licencetype:'Lifetime',EmailID:'xyz786@gmail.com',},
    {username:'Preeti Verma',role:'User', userId:"User-Six",MailStatus:'Sent Successfully',Licencetype:'Limited',EmailID:'akl786@gmail.com',},
    {username:'Raj Kumar',role:'Approver', userId:"User-Seven",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'Amd786@gmail.com',},
    {username:'Anjali Verma',role:'User', userId:"User-Eight",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'jmd.amd786@gmail.com',},
  ];
  constructor() { }
  ngOnInit()
  {


  }
  getData()
  {


  }
}
