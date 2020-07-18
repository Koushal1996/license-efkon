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
import { SpaceValidator } from "./../../space.validators";

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
  authoritiesCopy: any;
  checkbox: boolean;
  totalAuthoritiesCopy: any;
  serachAuthorityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private route: Router,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createRoleForm = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          SpaceValidator.cannotContainSpace,
          Validators.pattern("^[a-zA-Z ]*$"),
        ],
      ],
      //authorityIds: this.fb.array([]),
      authorityIds: ["", Validators.required],
    });

    this.showAuthoities();

    this.activateroute.params.subscribe((params) => {
      this.roleId = params["id"];
    });

    this.patchavalue();
    this.serachAuthorityForm = this.fb.group({
      name: [""],
    });
  }
  showAuthoities() {
    this._adminService.getauthorities().subscribe(
      (data) => {
        this.authorities = data;
        this.authoritiesCopy = data;
        //console.log(
        // " this.authoritiesCopy.length:" + this.authoritiesCopy.length
        //);
        this.totalAuthoritiesCopy = this.authoritiesCopy.length;
        //console.log("get" + this.roleValues.authorities.length);
        //console.log("gettttcopy" + this.roleValues);
        if (this.roleValues != undefined) {
          if (this.totalAuthoritiesCopy == this.roleValues.authorities.length) {
            this.checkbox = true;
          }
        }
      },
      (error) => {}
    );
  }
  onChangeAuthorities(item) {
    console.log(item);
    let index = this.authorityIds.indexOf(item.id);
    console.log(index);
    if (index == -1) {
      this.authorityIds.push(item.id);
      //this.selectedAuthorities.push(item);
    } else {
      this.authorityIds.splice(index, 1);
      this.checkbox = false;
      //this.selectedAuthorities.splice(index, 1);
    }
    if (!this.authorityIds.length) {
      this.eventValue = true;
    } else {
      this.eventValue = false;
    }
    console.log(this.authorityIds);
    this.createRoleForm.controls["authorityIds"].patchValue(this.authorityIds);
  }

  onSelectDeselectAll(e) {
    this.checkbox = e.target.checked;
    console.log(this.checkbox);
    if (this.checkbox == true) {
      this.authorityIds = [];
      //this.authorities = this.authoritiesCopy;
      this.authoritiesCopy.forEach((role) => {
        this.authorityIds.push(role.id);
        console.log(this.authorityIds);
        this.createRoleForm.controls["authorityIds"].patchValue(
          this.authorityIds
        );
        // this.eventValue =
      });
    } else if (this.checkbox == false) {
      this.authorityIds = [];
      this.createRoleForm.controls["authorityIds"].patchValue(
        this.authorityIds
      );
      // this.authoritiesCopy.forEach((role) => {
      //   this.authorityIds.splice(role.id);
      // });
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
          //console.log(data);
          this.roleValues = data;
          //this.createRoleForm.controls["name"].patchValue(data.name);
          this.createRoleForm.patchValue(data);
          this.roleValues.authorities.forEach((role) => {
            this.authorityIds.push(role.id);
            this.selectedAuthorities.push(role);
            this.createRoleForm.controls["authorityIds"].patchValue(
              this.authorityIds
            );
          });
          this.showAuthoities();
          // console.log("get" + this.roleValues.authorities.length);
          // console.log("gettttcopy" + this.totalAuthoritiesCopy);
          // if (
          //   this.totalAuthoritiesCopy === this.roleValues.authorities.length
          // ) {
          //   this.checkbox = false;
          // }
        } else {
          this._adminService.getRoleById(this.roleId).subscribe((data) => {
            this.createRoleForm.patchValue(data);
            this.roleValues = data;
            this.roleValues.authorities.forEach((role) => {
              this.authorityIds.push(role.id);
              this.selectedAuthorities.push(role);
              this.createRoleForm.controls["authorityIds"].patchValue(
                this.authorityIds
              );
            });
            this.showAuthoities();
          });
        }
      });
    }
  }

  onSubmit(): void {
    console.log(this.createRoleForm.value);
    // const object = {
    //   name: this.createRoleForm.value.name,
    //   authorityIds: this.authorityIds,
    // };
    this.loaderbutton = true;
    if (this.roleId) {
      this._adminService
        .updateRole(this.roleId, this.createRoleForm.value)
        .subscribe(
          (data) => {
            console.log();
            this.route.navigate(["roles"]);
            swal(`Role (${data.name}) updated successfully!`);
          },
          (error) => {
            this.loaderbutton = false;
          }
        );
    } else {
      this._adminService.addRole(this.createRoleForm.value).subscribe(
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
  onSearchAuthority() {
    let key = this.serachAuthorityForm.get("name").value;
    console.log(key);
    if (key) {
      this.authorities = this.authoritiesCopy.filter(
        (item) =>
          //console.log(item)
          item.name.toLowerCase().indexOf(key.toLowerCase()) > -1
      );
    } else {
      this.authorities = this.authoritiesCopy;
    }
  }
}
