import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjectService } from "src/app/services/project/project.service";

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
  constructor(
    private fb: FormBuilder,
    private projectservice: ProjectService
  ) {}

  ngOnInit() {
    this.LicenseForm = this.initLicenseForm();
    this.getLicenseType();
  }
  initLicenseForm() {
    return this.fb.group({
      name: [""],
      monthCount: ["", [Validators.required]],
    });
  }
  getLicenseType() {
    this.projectservice.getLicenseType().subscribe((data) => {
      this.licenseType = data;
      console.log(data);
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
          license.edit = false;
        },
        (error) => {}
      );
  }

  // editMonthCount(license) {
  //   console.log(license);
  //   this.selectedLicenseTypeId = license.id;
  //   console.log(license);
  //   this.showForm = true;
  //   this.LicenseForm.patchValue({
  //     monthCount: license.maxMonthCount,
  //     name: license.name,
  //   });
  //   this.LicenseForm.controls["name"].disable();
  //   // if (license.name == "COMMERCIAL") {
  //   //   this.LicenseForm.controls["monthCount"].setValidators(
  //   //     Validators.max(240)
  //   //   );
  //   // } else if (license.name == "DEMO") {
  //   //   this.LicenseForm.controls["monthCount"].setValidators(Validators.max(2));
  //   // }
  // }
  // onSubmit(license) {
  //   console.log(this.LicenseForm.value);
  //   console.log(this.selectedLicenseTypeId);
  //   this.projectservice
  //     .updateLicenseType(this.selectedLicenseTypeId, this.LicenseForm.value)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.showForm = false;
  //       },
  //       (error) => {
  //         this.showForm = false;
  //       }
  //     );
  // }
}
