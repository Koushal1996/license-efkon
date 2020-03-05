import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import { Router } from '@angular/router';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFamily } from './productFamily';
import { ProductCode } from './ProductCode';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
// Variables---
  checked: boolean = false;
  password: boolean = true;
  eyeStatus: boolean = false;
  model:any={};
  eventVal:string;
  date1:string;
  ShowPeriod:boolean=false;
  myEvent:string;
  ProjectData=[];
  ConfirmVal:boolean=false;
 customerName:any;
 myCreateProjectForm:FormGroup;
   constructor(private myServices: MyProjectDetailService,
     private router:Router,   ) { }

  ngOnInit(): void {
    this.customerName=this.myServices.Customer

// Get value of Reactive Form in Create project-
    this.myCreateProjectForm=new FormGroup({
      'customer':new FormControl(null,Validators.required),
      'ProductFamily':new FormControl(null,Validators.required),
      'ProductCode':new FormControl(null,Validators.required),
      'Version':new FormControl(null,Validators.required),
      'LicenceType':new FormControl(null,Validators.required),
      'LicenceCount':new FormControl(null,Validators.required),
      'ExpPeriod':new FormControl(null,Validators.required),
      'Startdate':new FormControl(null,Validators.required),
      'endDate':new FormControl(null,Validators.required),
    });

    // Select ProductFamily n Code-
  this.countries = this.myServices.getCountries();
  this.onSelect(this.selectedCountry.id);
  }

  selectedCountry: ProductFamily = new ProductFamily(1, 'EES');
  countries: ProductFamily[];
  productcode: ProductCode[];
  onSelect(countryid) {
    this.productcode = this.myServices.getStates().filter((item) => item.countryid == countryid);
  }
  onEyeClick()
  {
    this.eyeStatus=!this.eyeStatus;
    this.password=!this.password;
  }
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
  {
      var ConfirmValue= confirm("Press ok to Add more Project ?");
      if(ConfirmValue)
      {
           this.ConfirmVal=!this.ConfirmVal;
      }
      if(!ConfirmValue)
      {
        alert("Save Successfully")
        this.router.navigate(['/main/projectDetail'])
      }
    }
  // Create Project
  onSubmit()
  {
  console.log(this.myCreateProjectForm.value);


  }
// Clear Crate Project Form
onClear()
{
  this.myCreateProjectForm.reset();
}


  }
