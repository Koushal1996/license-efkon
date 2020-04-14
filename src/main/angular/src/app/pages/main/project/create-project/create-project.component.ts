import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { AdminService } from './../../../../services/admin/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from './../../../../services/project/project.service';
import { Component, OnInit ,OnChanges } from '@angular/core';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectForm:FormGroup;
  projectTypes: any[] = [];
  projectManager: any[] = [];
  projectcustomers: any[]=[];
  searchTerm=[];
  searchtable:boolean=true
  constructor(private fb:FormBuilder, 
    private _projectService: ProjectService,
    private _adminService:AdminService) { }

  ngOnInit() {
    this.getProjectTypes();
    this.getProjectManagers();
    this.getCustomer();
    this.projectForm = this.initProjectForm();
   
  }  

  myFunction()
  {
    console.log(this.projectForm.get('customerName').value)
    let filter = this.projectcustomers.filter(
      (item) => {
        // return item.name  == this.projectForm.get('customerName').value
       // return item.name.indexOf(this.projectForm.get('customerName').value) > -1
        return item.name.toLowerCase().indexOf(this.projectForm.get('customerName').value.toLowerCase()) > -1
      }
    )
    console.log(filter)
    if(this.projectForm.get('customerName').value== ''){
     this.searchTerm = []
    }else{
      this.searchTerm = filter
    }
  }
  initProjectForm(){
    return this.fb.group({
      "customerName":["", [Validators.required]],
      "customerEmail":["", [Validators.required]],
      "isEmailSend":[false],
      "customerContactNo":['', [Validators.maxLength(10),
        Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      "projectTypeId":['', [Validators.required]],
      "projectManagerId":['', [Validators.required]]
    })
  }

  getProjectTypes(){
    this._projectService.getProjectTypes().subscribe(data =>{
      this.projectTypes = data;
    })
  }

  getProjectManagers(){
    this._projectService.getProjectManager().subscribe(data =>{ 
       this.projectManager = data;
     })
  }

  getCustomer()
  {
    this._projectService.getCustomer().subscribe(data =>{
      this.projectcustomers = data
      console.log(this.projectcustomers)
    })
  }


  onSubmit()
  {
    console.log(this.projectForm.value)
    this._projectService.addProject(this.projectForm.value).subscribe(
      data=>{
      console.log(data)
      },
      error=>{}
    )
  }

   
  selectsearchTerm(name, email,contactNo)
  {
  this.projectForm.patchValue({
    customerName:name,
    customerEmail:email,
    customerContactNo:contactNo

  })
 this.searchTerm=[];
  }

}