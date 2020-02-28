import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  Login(userId:string,password:string)
  {

       if(userId=='admin' && password=='12345')
        {
          window.localStorage.setItem('adminUserId',userId);
          window.localStorage.setItem('password',password);
          return 'admin'
        }
       else if(userId=='user' && password=='12345')
        {
          window.localStorage.setItem('userUserId',userId);
          window.localStorage.setItem('password',password);
          return 'user'
        }
       else if(userId=='reviewer' && password=='12345')
        {
          window.localStorage.setItem('reviewerUserId',userId);
          window.localStorage.setItem('password',password);
          return 'reviewer'
        }
       else if(userId=='approval' && password=='12345')
        {
          window.localStorage.setItem('approverUserId',userId);
          window.localStorage.setItem('password',password);
          return 'approver'
        }
        else
        {
          return false;
        }
  }
}
