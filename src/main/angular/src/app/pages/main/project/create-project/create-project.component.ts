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

  constructor(
    private fb: FormBuilder,
    private _projectService: ProjectService,
    private _adminService: AdminService,
    private route: Router,
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
        }
      });
    }
  }
  initProjectForm() {
    return this.fb.group({
      customerName: ["", [Validators.required]],
      customerEmail: ["", [Validators.required]],
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

  getProjectTypes() {
    this._projectService.getProjectTypes().subscribe((data) => {
      this.projectTypes = data;
    });
  }

  getProjectManagers() {
    this._projectService.getProjectManager().subscribe((data) => {
      this.projectManager = data;
    });
  }

  getCustomer() {
    this._projectService.getCustomer().subscribe((data) => {
      this.projectcustomers = data;
    });
  }

  onSubmit() {
    this.loaderbutton = true;
    if (this.projectId) {
      this._projectService
        .updateProject(this.projectId, this.projectForm.value)
        .subscribe(
          (data) => {
            this.route.navigate(["projects"]);
            swal(" Project Edit successfully!");
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
