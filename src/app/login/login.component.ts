import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Routes, ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginModel:any={};
msg:string;
loader:boolean=false
SignIn=true;
returnUrl: string;
   AdminreturnUrl: any;
   UserreturnUrl: any;
   ResolverreturnUrl: any;
   ReviewerUserreturnUrl: any;
   ApproverReturnUsrl: any;
   myLoginForm:FormGroup;
   credentials:any;
  userid: any;
  password: any;

  constructor(private _loginService:LoginServiceService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.AdminreturnUrl=this.route.snapshot.queryParams['AdminreturnUrl'] || '/main'
     this.UserreturnUrl=this.route.snapshot.queryParams['UserreturnUrl'] || '/user'
     this.ResolverreturnUrl=this.route.snapshot.queryParams['ResolverreturnUrl'] || '/reviewer'
     this.ApproverReturnUsrl=this.route.snapshot.queryParams['ReviewerUserreturnUrl'] || '/approver'
    //  Reactive Form-
    this.myLoginForm=new FormGroup(
      {
        'userName' :new FormControl(null,Validators.required),
        'password': new FormControl(null,Validators.required)
      }
    )
  }

  onSubmit()
  {


    this.credentials=this.myLoginForm.value  // Credential where we store the formarray value
      this.userid=this.credentials.userName // get UserId from form
      this.password=this.credentials.password // get Password from form


      this.loader = true;
      this.SignIn=false;
      setTimeout(()=>{

        var output=this._loginService.Login(this.userid, this.password);
        this.loader = false;
      this.SignIn=true;


     if(output==='admin')
     {

        this.router.navigate([this.AdminreturnUrl])
     }
     else if(output==='user')
     {
        this.router.navigate([this.UserreturnUrl])
     }
     else if(output==='reviewer')
     {
        this.router.navigate([this.ResolverreturnUrl])
     }
     else if(output==='approver')
     {
        this.router.navigate([this.ApproverReturnUsrl])
     }

     else{
                this.msg="Invalid credentials !"
     }
    }, 2000);
  }

}
