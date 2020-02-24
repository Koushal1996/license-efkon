import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-request-licence-key-user',
  templateUrl: './request-licence-key-user.component.html',
  styleUrls: ['./request-licence-key-user.component.scss']
})
export class RequestLicenceKeyUserComponent implements OnInit {

  checked: boolean = false;
  password: boolean = true;
  eyeStatus: boolean = false;
  model:any={};
  eventVal:string;
  date1:string;
  ShowPeriod:boolean=false;
  myEvent:string;
  ProjectData=[];

   constructor(private projectCreateServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
  }

  // for password show and hide
  onEyeClick()
  {
    this.eyeStatus=!this.eyeStatus;
    this.password=!this.password;
  }
//  for limited date show textfield
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
}
