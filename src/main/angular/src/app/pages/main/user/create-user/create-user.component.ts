import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit, OnChanges } from "@angular/core";
import { AdminService } from "./../../../../services/admin/admin.service";
import swal from "sweetalert";
import { Observable } from "rxjs";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userId;
  loaderbutton: boolean = false;
  selectedRole: any = [];
  Role: any = [];
  selected: boolean;
  selectedRoles: any[] = [];
  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private route: Router,
    private activate: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createUserForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      username: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      contactNo: [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9-]*$"),
          Validators.minLength(10),
          Validators.maxLength(15),
        ],
      ],
      roleIds: this.fb.array([], [Validators.required]),
    });

    this._adminService.getRoles().subscribe(
      (data) => {
        this.dropdownList = data;
        this.Role = data;
        console.log(this.dropdownList);
      },
      (error) => {}
    );

    this.activate.params.subscribe((params) => {
      this.userId = params["id"];
    });

    this.patchavalue();
  }
  onChangeRole(item) {
    let index = this.selectedRole.indexOf(item.id);
    if (index === -1) {
      this.selectedRole.push(item.id);
      this.selectedRoles.push(item);
    } else {
      this.selectedRole.splice(index, 1);
      this.selectedRoles.splice(index, 1);
    }
    if (!this.selectedRole.length) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }
  isChecked(item) {
    if (this.selectedRole) {
      return this.selectedRole.find((id) => {
        return id === item.id;
      });
    } else {
      return false;
    }
  }
  patchavalue() {
    if (this.userId) {
      this._adminService.selecetedUser.subscribe((data) => {
        if (Object.keys(data).length) {
          this.createUserForm.patchValue(data);
          this.selectedItems = data.roles;
          const roleIds = <FormArray>this.createUserForm.controls["roleIds"];
          if (data.roles) {
            data.roles.forEach((role) => {
              roleIds.push(new FormControl(role.id));
            });
          }
        } else {
          this._adminService.getUserById(this.userId).subscribe((data) => {
            this.createUserForm.patchValue(data);
            this.selectedItems = data.roles;
            const roleIds = <FormArray>this.createUserForm.controls["roleIds"];
            if (data.roles) {
              data.roles.forEach((role) => {
                roleIds.push(new FormControl(role.id));
              });
            }
          });
        }
      });
    }
  }

  onSubmit() {
    this.loaderbutton = true;
    console.log(this.createUserForm.value);
    const object = {
      name: this.createUserForm.value.name,
      username: this.createUserForm.value.name,
      email: this.createUserForm.value.email,
      contactNo: this.createUserForm.value.contactNo,
      roleIds: this.selectedRole,
    };
    if (this.userId) {
      this._adminService.updateUser(this.userId, object).subscribe(
        (data) => {
          console.log(data);
          this.route.navigate(["users"]);
          swal(`${data.name} updated Successfully!`);
        },
        (error) => {}
      );
    } else {
      this._adminService.addUser(object).subscribe(
        (data) => {
          console.log(data);
          this.route.navigate(["users"]);
          swal(`New User (${data.name}) Added Successfully!`);
        },
        (error) => {}
      );
    }
  }
  goback() {
    this.route.navigate(["users"]);
  }
  cancel() {
    this.patchavalue();
  }
}
