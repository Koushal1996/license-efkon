import { AdminService } from "./../../../../services/admin/admin.service";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  HostListener,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.scss"],
})
export class CreateRoleComponent implements OnInit {
  selectedItems = [];
  dropdownSettings = {};
  roleId;
  roledata;
  loaderbutton: boolean = false;

  createRoleForm: FormGroup;
  selectedAuthorities: any[] = [];
  authorityIds = [];
  eventValue: boolean;
  authId: any;
  roleValues: any;
  authVal: boolean;
  authorities: any = [];

  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private route: Router,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createRoleForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      authorityIds: this.fb.array([], [Validators.required]),
    });

    this.showAuthoities();

    this.activateroute.params.subscribe((params) => {
      this.roleId = params["id"];
    });

    this.patchavalue();
  }
  showAuthoities() {
    this._adminService.getauthorities().subscribe(
      (data) => {
        this.authorities = data;
      },
      (error) => {}
    );
  }
  onChangeAuthorities(item) {
    let index = this.authorityIds.indexOf(item.id);
    if (index == -1) {
      this.authorityIds.push(item.id);
      this.selectedAuthorities.push(item);
    } else {
      this.authorityIds.splice(index, 1);
      this.selectedAuthorities.splice(index, 1);
    }
    if (!this.authorityIds.length) {
      this.eventValue = true;
    } else {
      this.eventValue = false;
    }
  }
  isChecked(item) {
    if (this.authorityIds) {
      return this.authorityIds.find((id) => {
        return id === item.id;
      });
    } else {
      return false;
    }
  }
  val = true;
  patchavalue() {
    if (this.roleId) {
      this._adminService.selecetedRole.subscribe((data) => {
        if (Object.keys(data).length) {
          console.log(data);
          this.roleValues = data;
          //this.createRoleForm.controls["name"].patchValue(data.name);
          this.createRoleForm.patchValue(data);
          this.roleValues.authorities.forEach((role) => {
            this.authorityIds.push(role.id);
            this.selectedAuthorities.push(role);
          });
        } else {
          this._adminService.getRoleById(this.roleId).subscribe((data) => {
            this.createRoleForm.patchValue(data);
            this.roleValues = data;
            this.roleValues.authorities.forEach((role) => {
              this.authorityIds.push(role.id);
              this.selectedAuthorities.push(role);
            });
          });
        }
      });
    }
  }

  onSubmit(): void {
    console.log(this.createRoleForm.value);
    const object = {
      name: this.createRoleForm.value.name,
      authorityIds: this.authorityIds,
    };
    this.loaderbutton = true;
    if (this.roleId) {
      this._adminService.updateRole(this.roleId, object).subscribe(
        (data) => {
          console.log();
          this.route.navigate(["roles"]);
          swal(`${data.name} updated successfully!`);
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
    } else {
      this._adminService.addRole(object).subscribe(
        (data) => {
          this.route.navigate(["roles"]);
          swal(`New role (${data.name}) added successfully!`);
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
    }
  }

  goback() {
    this.route.navigate(["roles"]);
  }

  cancel() {
    this.patchavalue();
  }
}
