import { StorageService } from "src/app/services/storage/storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AdminService } from "./../../../../services/admin/admin.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjectService } from "./../../../../services/project/project.service";
import { Component, OnInit, OnChanges } from "@angular/core";
import swal from "sweetalert";

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  projectTypes: any[] = [];
  projectManager: any[] = [];
  projectcustomers: any[] = [];
  loaderbutton: boolean = false;
  projectId: any;
  activeProjectType: any[];

  constructor(
    private fb: FormBuilder,
    private _projectService: ProjectService,
    private _adminService: AdminService,
    private route: Router,
    private _storageService: StorageService,
    private routeparam: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProjectTypes();
    this.getProjectManagers();
    this.getCustomer();
    this.projectForm = this.initProjectForm();
    this.routeparam.params.subscribe((params) => {
      this.projectId = params["id"];
    });
    console.log(this.projectId);
    this.patchavalue();
  }
  patchavalue() {
    if (this.projectId) {
      this._projectService.selecetedProject.subscribe((data) => {
        if (Object.keys(data).length) {
          console.log(data);
          this.projectForm.patchValue(data);
          this.projectForm.controls["projectTypeId"].disable();
          this.projectForm.controls["customerEmail"].disable();
        } else {
          this._projectService
            .getProjectById(this.projectId)
            .subscribe((data) => {
              this.projectForm.patchValue(data);
              this.projectForm.controls["projectTypeId"].disable();
              this.projectForm.controls["customerEmail"].disable();
            });
        }
      });
    }
  }
  initProjectForm() {
    return this.fb.group({
      customerName: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
      ],
      customerEmail: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      isEmailSend: [""],
      customerContactNo: [
        "",
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      projectTypeId: ["", [Validators.required]],
      projectManagerId: ["", [Validators.required]],
    });
  }
  hasAuthority(authority) {
    const authorities: any[] = this._storageService
      .getData("userAuthorities")
      .map((a) => a.name);
    return authorities.includes(authority);
  }
  getProjectTypes() {
    this._projectService.getProjectTypes().subscribe((data) => {
      this.projectTypes = data;
      console.log(data);
      this.activeProjectType = this.projectTypes.filter((p) => p.active);
      console.log(this.activeProjectType);
    });
  }

  getProjectManagers() {
    this._projectService.getProjectManager().subscribe((data) => {
      this.projectManager = data;
      console.log(data);
    });
  }

  getCustomer() {
    this._projectService.getCustomer().subscribe((data) => {
      this.projectcustomers = data;
      console.log(data);
    });
  }

  onSubmit() {
    this.loaderbutton = true;
    // console.log(this.projectForm.value);
    const requestBody = this.projectForm.getRawValue();
    //console.log(requestBody);
    if (this.projectId) {
      this._projectService.updateProject(this.projectId, requestBody).subscribe(
        (data) => {
          this.route.navigate(["projects"]);
          swal(" Project Updated successfully!");
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
    } else {
      this._projectService.addProject(this.projectForm.value).subscribe(
        (data) => {
          this.route.navigate(["projects"]);
          swal("New Project Added successfully!");
        },
        (error) => {
          this.loaderbutton = false;
        }
      );
    }
  }

  selectSearchTerm(name) {
    if (!this.projectId) {
      const customer = this.projectcustomers.find((c) => c.name === name);
      if (customer) {
        this.projectForm.patchValue({
          customerEmail: customer.email,
          customerContactNo: customer.contactNo,
        });
      } else {
        this.projectForm.reset();
      }
    }
  }
  backCreateProjectForm() {
    this.route.navigate(["/projects"]);
  }
}
