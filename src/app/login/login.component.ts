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

     if(output===true)
     {
        this.router.navigate(['/main'])
     }
     else{
                this.msg="Invalid credentials !"
     }
  }

}
