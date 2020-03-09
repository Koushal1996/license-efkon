import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Routes, ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string;
  loader: boolean = false
  SignIn = true;
  AdminreturnUrl: any;
  UserreturnUrl: any;
  ResolverreturnUrl: any;
  ApproverReturnUsrl: any;
  myLoginForm: FormGroup;
  credentials: any;
  userid: any;
  password: any;
  code: string;
  captchaVAlue = false;
  firstVAlue: string;
  myCaptchaValue: string;
  captchaMsg: string = "Invalid Captcha";
  constructor(private _loginService: LoginServiceService, private router: Router, private route: ActivatedRoute) {

    const adminCredentials = window.localStorage.getItem('UserId')
    console.log(adminCredentials);
    if (adminCredentials === 'admin') {
      this.router.navigate(['/main'])
    }
    else if (adminCredentials === 'user') {
      this.router.navigate(['/user'])
    }
    else if (adminCredentials === 'reviewer') {
      this.router.navigate(['/reviewer'])
    }
    else if (adminCredentials === 'approver') {
      this.router.navigate(['/approver'])
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.AdminreturnUrl = this.route.snapshot.queryParams['AdminreturnUrl'] || '/main'
    this.UserreturnUrl = this.route.snapshot.queryParams['UserreturnUrl'] || '/user'
    this.ResolverreturnUrl = this.route.snapshot.queryParams['ResolverreturnUrl'] || '/reviewer'
    this.ApproverReturnUsrl = this.route.snapshot.queryParams['ReviewerUserreturnUrl'] || '/approver'

    //  Reactive Form-
    this.myLoginForm = new FormGroup(
      {
        'userName': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
        'myCaptchaValue': new FormControl(null, Validators.required)
      }
    )
    this.generateCaptcha();
  }
  onSubmit() {
    this.credentials = this.myLoginForm.value  // Credential where we store the formarray value
    this.userid = this.credentials.userName // get UserId from form
    this.password = this.credentials.password // get Password from form
    this.loader = true; //loader on sign in button
    this.SignIn = false; //For text change on button
    setTimeout(() => {
      var output = this._loginService.Login(this.userid, this.password);
      this.loader = false;
      this.SignIn = true;
      if (output === 'admin') {
        if (this.firstVAlue === this.code) {
          this.router.navigate([this.AdminreturnUrl])
        }
        else {
          this.captchaVAlue = true
        }
      }
      else if (output === 'user') {
        if (this.firstVAlue === this.code) {
          this.router.navigate([this.UserreturnUrl])
        }
        else {
          this.captchaVAlue = true
        }
      }
      else if (output === 'reviewer') {
        if (this.firstVAlue === this.code) {
          this.router.navigate([this.ResolverreturnUrl])
        }
        else {
          this.captchaVAlue = true
        }
      }
      else if (output === 'approver') {
        if (this.firstVAlue === this.code) {
          this.router.navigate([this.ApproverReturnUsrl])
        }
        else {
          this.captchaVAlue = true
        }
      }
      else {
        this.msg = "Invalid credentials !"
      }
    }, 2000);
  }
  // Code For Captcha
  generateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 4; i++) {
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var captcha = a + '' + b + '' + '' + c + '' + d + '' + e;
    this.code = captcha;

  }
  // Onchange Value of Captcha
  onChangeCaptcha(getCAptchaValue) {
    console.log(getCAptchaValue);
    console.log("On change value" + getCAptchaValue);
    this.firstVAlue = getCAptchaValue;
    if (getCAptchaValue != this.code) {
      this.captchaVAlue = true;
    }
    else {
      this.captchaVAlue = false;
    }
  }
}
