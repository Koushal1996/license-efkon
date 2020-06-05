import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjectService } from "src/app/services/project/project.service";
import swal from "sweetalert";

@Component({
  selector: "app-renew-configuration",
  templateUrl: "./renew-configuration.component.html",
  styleUrls: ["./renew-configuration.component.scss"],
})
export class RenewConfigurationComponent implements OnInit {
  renewForm: any;

  constructor(
    private fb: FormBuilder,
    private _projectService: ProjectService
  ) {}

  ngOnInit() {
    this.renewForm = this.initLicenseForm();
  }
  initLicenseForm() {
    return this.fb.group({
      showBeforeDays: ["", [Validators.required, Validators.min(1)]],
      startDateChange: [""],
    });
  }
  onSubmit() {
    this._projectService
      .updaterenewConfiguration(this.renewForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          swal("Configuration Update successfully!");
          this.renewForm.reset();
        },
        (error) => {}
      );
  }
}
