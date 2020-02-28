import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/approver/users-approver/users-services.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  checked: boolean = false;
  password: boolean = true;
  eyeStatus: boolean = false;
  select:boolean=true;
  selectedValue:string="Select Role"
  myAllUser:any;
  gmail:string='Jamshed'
  model:any={};
  role = [
    {id: 1, name: "Admin"},
    {id: 2, name: "User"},
    {id: 3, name: "Reviewer"},
    {id: 4, name: "Approver"},
  ];
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {

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
console.log(this.model)
  }
}
