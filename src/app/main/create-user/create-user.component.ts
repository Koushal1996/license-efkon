import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { UsersServicesService } from '../users/users-services.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  checked: boolean = false;
  password: boolean = true;
  eyeStatus: boolean = false;
  select:boolean=true;
  selectedValue:string="Select Role"
  myAllUser:any;
  myReactiveForm:FormGroup;
  model:any={};
  userData:any;
  role = [
    {id: 4, name: "Approver"},
    {id: 1, name: "Admin"},
    {id: 3, name: "Reviewer"},
    {id: 2, name: "User"},
  ];
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {
    this.userData=this.userServices.users;

  }
  checkBoxClick()
  {
   this.checked=!this.checked;

  }
  onEyeClick()
  {
    this.eyeStatus=!this.eyeStatus;
    this.password=!this.password;
  }

  onSubmit()
  {

console.log((this.model.value))
  }

}
