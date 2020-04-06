import { AdminService } from './../../../../services/admin/admin.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit, AfterViewInit {
  createRoleForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  roleId
  roledata

  constructor(private fb: FormBuilder,
    private _adminService: AdminService,
    private route: Router,
    private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.createRoleForm = this.fb.group({
      name: ['', Validators.required],
      authorityIds: this.fb.array([],[Validators.required])
    })
    this._adminService.getauthorities().subscribe(data => {
      this.dropdownList = data
    },error => {
        
    })

    this._adminService.selecetedRole.subscribe(data => {
      this.createRoleForm.controls['name'].patchValue(data.name);
      this.selectedItems = data.authorities;
      const authorityIds = <FormArray>this.createRoleForm.controls['authorityIds'];
      if(data.authorities)
        data.authorities.forEach(auth => {
          authorityIds.push(new FormControl(auth.id));
        });
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.activateroute.params.subscribe(
      params => {
        this.roleId = params['id'] 
      })
  }

  ngAfterViewInit(){

  }

  onItemSelect(item: any) {
    const authorityIds = <FormArray>this.createRoleForm.controls['authorityIds'];
    authorityIds.push(new FormControl(item.id));
  }

  onItemDeSelect(item: any) {
    const authorityIds = <FormArray>this.createRoleForm.controls['authorityIds'];
    authorityIds.removeAt(authorityIds.value.indexOf(item.id));
  }
  onSelectAll(items: any[]) {
    const authorityIds = <FormArray>this.createRoleForm.controls['authorityIds'];
    items.forEach(e => {
      authorityIds.push(new FormControl(e.id));
    });
  }
  onDeSelect(items: any[])
  {
    const authorityIds = <FormArray>this.createRoleForm.controls['authorityIds'];
    items.forEach(e => {
      authorityIds.removeAt(authorityIds.value.indexOf(e.id));
    });
  }


  onSubmit(): void {
  
    if (this.roleId) {
     this._adminService.updateRole(this.roleId,this.createRoleForm.value)
     .subscribe(data=>{
     
       this.route.navigate(['roles'])
     }, error => {
      console.log(error);
    })
    } else {
      this._adminService.addRole(this.createRoleForm.value)
        .subscribe(data => {
        }, error => {
        })
      this.route.navigate(['roles'])
    }
  }



}
