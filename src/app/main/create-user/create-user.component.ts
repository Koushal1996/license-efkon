import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServicesService } from '../users/users-services.service';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';

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
  myForm: FormGroup
  constructor(private userServices: UsersServicesService, private myRole: MyProjectDetailService) { }

  ngOnInit(): void {
    this.userData = this.userServices.users;
    this.role = this.myRole.Role
    this.myForm = new FormGroup(
      {
        'CustomerName': new FormControl(null, Validators.required),
        'ContactNumber': new FormControl(null,),
        'UserId': new FormControl(null, Validators.required),
        'EmailId': new FormControl(null, [Validators.required, Validators.required]),
        'Password': new FormControl(null, Validators.required),
        'role': new FormControl(null, Validators.required),
      }
    )
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
