import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  password: boolean = true;
  eyeStatus: boolean = false;
  model:any={};
  eventVal:string;
  ShowPeriod:boolean=false;
  ProjectData=[];
   constructor(private projectCreateServices: ProjectDetailServiceService, private router:Router) { }

  ngOnInit(): void {}

  // for password show and hide
  onEyeClick()
  {
    this.eyeStatus=!this.eyeStatus;
    this.password=!this.password;
  }

//  for limited/lifetime period
  onChangeExp(events:any)
  {
this.eventVal=events.target.value;
    if(this.eventVal==='2')
    {
        this.ShowPeriod=!this.ShowPeriod;
    }
    else if(this.eventVal==='1')
    {
      this.ShowPeriod=!this.ShowPeriod;
    }
  }

  addProduct()
  {
      this.ProjectData.push({
      customername:this.model.customername,
      productFAmily: this.model.productFamily,
      productCode :this.model.productCode,
      Version :this.model.version,
      LicenceType: this.model.LicenceType,
      Users :this.model.users,
      ExpPeriod: this.model.expPeriod,
      StartDate: this.model.date1,
      Period :this.model.period,
      EndDate:this.model.endDate
    })
    console.log(this.ProjectData)
  }

  formSubmit()
  {
   if (!this.ProjectData.length) {
    this.ProjectData.push({
      customername:this.model.customername,
      productFAmily: this.model.productFamily,
      productCode :this.model.productCode,
      Version :this.model.version,
      LicenceType: this.model.LicenceType,
      Users :this.model.users,
      ExpPeriod: this.model.expPeriod,
      StartDate: this.model.date1,
      Period :this.model.period,
      EndDate:this.model.endDate
    })
  }
  console.log(this.ProjectData)
  }

  getChangeEventdate(event:any)
  {
        var x = event.target.value;
        var y=parseInt(x);
        var StartDate = this.model.date1 ? new Date(this.model.date1) : new Date();
        StartDate.setMonth(StartDate.getMonth() + y);
        var year=StartDate.getFullYear();
        var day=StartDate.getDate();
        var month=1+StartDate.getMonth();
        var fullDate= year + '-' + (month >= 10 ? month : '0' + month) + '-' + day;
        console.log(fullDate);
        this.model.endDate = fullDate;
        console.log("Date after " + y + " months:",month+"/"+day+"/"+year  );

  }
  OnSvaeDetail()
  { }

}
