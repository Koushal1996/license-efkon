import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-update-licence-key-user',
  templateUrl: './update-licence-key-user.component.html',
  styleUrls: ['./update-licence-key-user.component.scss']
})
export class UpdateLicenceKeyUserComponent implements OnInit {
  model:any=[];
  customerName:any;
  btnDisable:boolean=true;
  myval:string;
  value:boolean=true;
  constructor(private myServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
this.customerName=this.myServices.ViewLog;
  }

  formSubmit()
  {
    if(this.model.UniqueAccess===null){}
    else{
    this.btnDisable=!this.btnDisable;
    }
  }
  generateRandomKey()
  {
    var randomNum=Math.random()*100
    var newRandom="RLVD-06FG-ASDF"+Math.trunc(randomNum);
    this.value=!this.value;
       this.myval=newRandom;

  }

}
