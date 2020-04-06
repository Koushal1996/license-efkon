import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Router }  from '@angular/router';
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
    this._adminService.selecetedRole.next(item);
    this.route.navigate(['roles',item.id])

  }
  deleterole(item) {
    this._adminService.deleteRole(item.id).subscribe(data => {
      item.active = false;
    },
      error => {
        console.log(error);

      })

  }
  activaterole(item)
  {this._adminService.deleteRole(item.id).subscribe(data => {
    item.active = true;
  },
    error => {
      console.log(error);

    })
  }
  createRole(){
   this.route.navigate(['roles/create'])
  }
}
