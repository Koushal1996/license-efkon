import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
  Login(userId: string, password: string) {

    if (userId == 'admin' && password == '12345') {
      window.localStorage.setItem('UserId', (userId));
      window.localStorage.setItem('password', password);
      return 'admin'
    }
    else if (userId == 'user' && password == '12345') {
      window.localStorage.setItem('UserId', userId);
      window.localStorage.setItem('password', password);
      return 'user'
    }
    else if (userId == 'reviewer' && password == '12345') {
      window.localStorage.setItem('UserId', userId);
      window.localStorage.setItem('password', password);
      return 'reviewer'
    }
    else if (userId == 'approver' && password == '12345') {
      window.localStorage.setItem('UserId', userId);
      window.localStorage.setItem('password', password);
      return 'approver'
    }
    else {
      return false;
    }
  }
}
