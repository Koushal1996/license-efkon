import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Routes } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginModel:any={};
msg:string;
  constructor(private _loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
      var output=this._loginService.Login(this.loginModel.userid,this.loginModel.password);

     if(output==='admin')
     {
        this.router.navigate(['/main'])
     }
     else if(output==='user')
     {
        this.router.navigate(['/user'])
     }
     else if(output==='reviewer')
     {
        this.router.navigate(['/reviewer'])
     }
     else if(output==='approver')
     {
        this.router.navigate(['/approver'])
     }

     else{
                this.msg="Invalid credentials !"
     }
  }

}
