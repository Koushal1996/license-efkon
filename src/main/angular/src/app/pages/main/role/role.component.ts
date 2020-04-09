import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Router }  from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  public roles = [];
  isloader:boolean=true
  constructor(private _adminService: AdminService,
    private route:Router ) { }

  ngOnInit() {
    this._adminService.getRoles()
      .subscribe(data => {
        this.roles = data
        this.isloader=false
      },
        error => {
          console.log(error);

        })
  }
  editrole(item) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to edit this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["yes","no"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    this._adminService.selecetedRole.next(item);
    this.route.navigate(['roles',item.id])

  }
});

  }
  deleterole(item) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to deleted this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["yes","no"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
        this._adminService.deleteRole(item.id).subscribe(data => {
          item.active = false;
        },
          error => {
            console.log(error);
    
          })
        swal("Delete successfully!");
      }
    });
   

  }
  activaterole(item)
  {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to activate this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["yes","no"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    this._adminService.deleteRole(item.id).subscribe(data => {
    item.active = true;
  },
    error => {
      console.log(error);

    })
    swal("Activate successfully!");
  }
  })
  }
   
  createRole(){
   this.route.navigate(['roles/create'])
  }
}
