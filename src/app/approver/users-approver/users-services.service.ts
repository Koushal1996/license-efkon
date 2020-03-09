import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  public users =[
    {username:'Jamshed Ahmad', userId:"User1",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'jmd.amd786@gmail.com',},
    {username:'Rajiv Kumar', userId:"User2",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'abd786@gmail.com',},
    {username:'Shani Khan', userId:"User3",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'asf786@gmail.com',},
    {username:'Rahul Kumar', userId:"User4",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'jkl786@gmail.com',},
    {username:'Yogesh Kumar', userId:"User5",MailStatus:'Not Sent',Licencetype:'Lifetime',EmailID:'xyz786@gmail.com',},
    {username:'Preeti Verma', userId:"User6",MailStatus:'Sent Successfully',Licencetype:'Limited',EmailID:'akl786@gmail.com',},
    {username:'Raj Kumar', userId:"User7",MailStatus:'Not Sent',Licencetype:'Limited',EmailID:'Amd786@gmail.com',},
    {username:'Anjali Verma', userId:"User8",MailStatus:'Sent Successfully',Licencetype:'Lifetime',EmailID:'jmd.amd786@gmail.com',},
  ];

}
