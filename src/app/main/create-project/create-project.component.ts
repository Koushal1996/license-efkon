import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import { Router } from '@angular/router';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ProductFamily } from './productFamily';
import { ProductCode } from './ProductCode';
import { NgIf } from '@angular/common';
import  Swal from 'sweetalert';
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
  model: any = {};
  eventVal: string;
  date1: string;
  ShowPeriod: boolean = false;
  ConfirmVal: boolean = false;
  customerName: any;
  myCreateProjectForm: FormGroup;
  constructor(private myServices: MyProjectDetailService,
    private router: Router,) { }

  ngOnInit(): void {
    this.customerName = this.myServices.Customer

    // Get value of Reactive Form in Create project-
    this.myCreateProjectForm = new FormGroup({
      'customer': new FormControl(null, Validators.required),
      'ProductFamily': new FormControl(null, Validators.required),
      'ProductCode': new FormControl(null, Validators.required),
      'Version': new FormControl(null, Validators.required),
      'LicenceType': new FormControl(null, Validators.required),
      'LicenceCount': new FormControl(null,[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern('^[1-9][0-9]*$')]),
      'ExpPeriod': new FormControl(null, Validators.required),
      'Startdate': new FormControl(null, Validators.required),
      'endDate': new FormControl(null, Validators.required),
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
  // End Product Family Code


  // Show/Hide Password
  onEyeClick() {
    this.eyeStatus = !this.eyeStatus;
    this.password = !this.password;
  }

  // Change expiration Period
  onChangeExp(events: any) {
    this.eventVal = events.target.value;
    if (this.eventVal === '1') {
      this.ShowPeriod = false;
    }
    else if (this.eventVal === '2') {
      this.ShowPeriod = true;
    }
  }


  // Submit Customer Form
  onSubmitCustomerForm(form:NgForm)
  {
   console.log(this.model);
   form.reset();
  }
  // Auto Fill Date After Input Period
  getChangeEventdate(event: any) {
    var x = event.target.value;
    var y = parseInt(x);
    var StartDate = this.model.date1 ? new Date(this.model.date1) : new Date();
    StartDate.setMonth(StartDate.getMonth() + y);
    var year = StartDate.getFullYear();
    var day = StartDate.getDate();
    var month = 1 + StartDate.getMonth();
    var fullDate = (month >= 10 ? month : '0' + month) + '-' + day + '-' + year;
    console.log(fullDate);
    this.model.endDate = fullDate;
    console.log("Date after " + y + " months:", month + "/" + day + "/" + year);
  }
  OnSvaeDetail() {
    var ConfirmValue = confirm("Press ok to Add more Project ?");
    if (ConfirmValue) {
      this.ConfirmVal = !this.ConfirmVal;
    }
    if (!ConfirmValue) {
      alert("Save Successfully")
      this.router.navigate(['/main/projectDetail'])
    }
  }

  // Create Project
  onSubmit() {
    console.log(this.myCreateProjectForm.value);
    Swal({
      title: "Are you sure?",
      text: "Do You want to add more projects ",
      icon: "warning",
      buttons: ["YES","NO"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Swal("Your Project has been Craeted !", {
          icon: "success",
        });
        this.router.navigate(['/main/projectDetail'])
      }

    });
  }

  // On Check CheckBox
  checkBoxClick()
  {
   this.checked=!this.checked;

  }

  // Clear Crate Project Form
  onClear() {
    this.myCreateProjectForm.reset();
  }

  // Clear Crate Customer Form

  OnClearCustomerForm(myForm:NgForm)
  {

     myForm.form.reset();
  }

}
