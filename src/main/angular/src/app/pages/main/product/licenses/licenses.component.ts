import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  startRenewDateChange: any;
  showBeforeRenewDays: any;
  configuration;
  constructor(
    private fb: FormBuilder,
    private projectservice: ProjectService
  ) {}

  ngOnInit() {
    this.getLicenseType();
    this.getrenewConfiguration();
  }

  getLicenseType() {
    this.projectservice.getLicenseType().subscribe((data) => {
      this.licenseType = data;
      console.log(data);
      this.isloader = false;
    });
  }

  editMonthCount(license) {
    this.selectedLicenseTypeId = license.id;
    license.edit = true;
    console.log(license);
  }
  onSubmit(license) {
    console.log(license);
    const object = {
      monthCount: license.maxMonthCount,
    };
    this.projectservice
      .updateLicenseType(this.selectedLicenseTypeId, object)
      .subscribe(
        (data) => {
          console.log(data);
          swal("Expiry Period Limit Updated Successfully");
          license.edit = false;
        },
        (error) => {}
      );
  }
  onBack(license) {
    license.edit = false;
    this.getLicenseType();
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
          swal("Configuration Update successfully!");
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
}
