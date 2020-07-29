import { StorageService } from "src/app/services/storage/storage.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ProjectService } from "src/app/services/project/project.service";
import swal from "sweetalert";

@Component({
  selector: "app-licenses",
  templateUrl: "./licenses.component.html",
  styleUrls: ["./licenses.component.scss"],
})
export class LicensesComponent implements OnInit {
  LicenseForm: FormGroup;
  licenseType: any;
  licenseTypeId: any;
  selectedLicenseTypeId: any;
  monthCount;
  showForm: boolean = false;
  isloader: boolean = true;
  showBeforeDays: any;
  startDateChange: any;
  isBeforeDaysEdit: boolean = true;
  isValidMinInput: boolean = true;
  isValidMaxInput: boolean = true;
  projectTypeForm: FormGroup;
  licenseTypeName: any;
  maxMonthCount: any;
  constructor(
    private fb: FormBuilder,
    private _storageService: StorageService,
    private projectservice: ProjectService
  ) {}

  ngOnInit() {
    this.getLicenseType();
    this.getrenewConfiguration();
    this.projectTypeForm = new FormGroup({
      maxMonthCount: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
    });
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  getLicenseType() {
    this.projectservice.getLicenseType().subscribe(
      (data) => {
        this.licenseType = data;
        console.log(data);
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }

  editMonthCount(e) {
    //this.getLicenseType();
    this.selectedLicenseTypeId = e.id;
    e.edit = true;
    console.log(e);
  }

  ////// for renew configuration

  getrenewConfiguration() {
    this.projectservice.renewConfiguration().subscribe((data) => {
      console.log("getrenewConfiguration");
      console.log(data);
      this.showBeforeDays = data.showBeforeDays;
      this.startDateChange = data.startDateChange;
    });
  }
  editshowBeforeDays() {
    this.isBeforeDaysEdit = false;
  }
  onSubmitRenewConfiguration(startDateChange, showBeforeDays) {
    console.log(startDateChange);
    console.log(showBeforeDays);
    const object = {
      showBeforeDays: showBeforeDays,
      startDateChange: startDateChange,
    };
    if (object) {
      this.projectservice.updaterenewConfiguration(object).subscribe(
        (data) => {
          console.log(data);
          swal("Renew Configuration updated successfully!");
          this.isBeforeDaysEdit = true;
        },
        (error) => {}
      );
    }
  }
  onBackRenew() {
    this.isBeforeDaysEdit = true;
    this.getrenewConfiguration();
  }

  getToday(license) {
    console.log(license);
    if ((license.name = "DEMO")) {
    }
  }
  checkMaxValue(e) {
    console.log(e);
    if (e <= 0) {
      console.log("error");
      this.isValidMinInput = false;
    } else if (e > 120) {
      this.isValidMaxInput = false;
    } else {
      this.isValidMinInput = true;
      this.isValidMaxInput = true;
      //this.isValidInput = true;
    }
  }
  editExeryMonth(license) {
    this.showForm = true;
    console.log(license);
    this.licenseTypeName = license.name;
    this.selectedLicenseTypeId = license.id;
    this.projectTypeForm.controls["maxMonthCount"].patchValue(
      license.maxMonthCount
    );
    this.projectTypeForm.controls["name"].patchValue(license.name);
    this.projectTypeForm.controls["name"].disable();
    if (this.licenseTypeName == "COMMERCIAL") {
      this.projectTypeForm.controls["maxMonthCount"].setValidators([
        Validators.max(360),
        Validators.min(1),
      ]);
      this.maxMonthCount = 360;
    } else if (this.licenseTypeName == "DEMO") {
      this.projectTypeForm.controls["maxMonthCount"].setValidators([
        Validators.max(12),
        Validators.min(1),
      ]);
      this.maxMonthCount = 12;
    }
  }

  onSubmit() {
    console.log(this.projectTypeForm.value);
    const object = {
      monthCount: this.projectTypeForm.value.maxMonthCount,
    };
    this.projectservice
      .updateLicenseType(this.selectedLicenseTypeId, object)
      .subscribe(
        (data) => {
          console.log(data);
          swal("Expiry Period Limit updated successfully!");
          this.showForm = false;
          this.getLicenseType();
        },
        (error) => {
          this.showForm = false;
        }
      );
  }
  goback() {
    this.showForm = false;
    this.projectTypeForm.reset();
  }
  experyPeriodChange(e) {
    console.log(e);
  }
}
