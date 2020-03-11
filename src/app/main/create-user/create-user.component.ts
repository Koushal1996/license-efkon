import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServicesService } from '../users/users-services.service';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';

import * as $ from 'jquery';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  // All vriable user

  checked: boolean = false; // For Checkbox
  password: boolean = true; // For Password
  eyeStatus: boolean = false;
  userData: any;
  role: any;
  myForm: FormGroup;
  customerPattern='/^[a-z]{0,3}+$/';
  contactNumberPattern='[7-9]{1}[0-9]{9}';
  emailPattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
  exampleData: ({ id: string; text: string; disabled?: undefined; } | { id: string; disabled: boolean; text: string; })[];
  value: string[];
  options: { width: string; multiple: boolean; tags: boolean; };
  searchSubmitEvent: any;
  constructor(private userServices: UsersServicesService, private myRole: MyProjectDetailService) { }

  ngOnInit(): void {

    $(document).ready(function() {
      var country = ["Australia", "Bangladesh", "Denmark", "Hong Kong", "Indonesia", "Netherlands", "New Zealand", "South Africa"];
      $("#country").select2({
        data: country
      });
    });


    this.userData = this.userServices.users;
    this.role = this.myRole.Role
    this.myForm = new FormGroup(
      {
        'CustomerName': new FormControl('', ),
        'ContactNumber': new FormControl(null,[Validators.required,Validators.pattern(this.contactNumberPattern)]),
        'UserId': new FormControl(null, Validators.required),
        'EmailId': new FormControl(null, [Validators.required,Validators.pattern(this.emailPattern)]),
        'Password': new FormControl(null, [Validators.pattern(this.passwordPattern)]),
        'role': new FormControl(null, Validators.required),
      }
    )
    
  }
  onSearchSubmit(btnType: string) {
    this.searchSubmitEvent.emit({ button_type: btnType });
     }
  checkBoxClick() {
    this.checked = !this.checked;
  }
  onEyeClick() {
    this.eyeStatus = !this.eyeStatus;
    this.password = !this.password;
  }

  onSubmit() {
    console.log((this.myForm.value))
  }

  // Reset form
  onResetForm() {
    this.myForm.reset();
  }
 
}
