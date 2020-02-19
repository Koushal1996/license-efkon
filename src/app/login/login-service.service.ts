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
          window.localStorage.setItem('UserId',userId);
          window.localStorage.setItem('password',password);
          return true
        }
        else
        {
          return false;
        }
  }
}
