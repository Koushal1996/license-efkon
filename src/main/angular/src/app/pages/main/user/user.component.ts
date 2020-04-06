import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _admin: AdminService,
    private route: Router) { }
  public users = []
  isloader:boolean=true
  ngOnInit() {
    this._admin.getUsers().subscribe
      (data => {
        this.users = data
        this.isloader=false
      },
        error => {
        }
      )
  }



  deleteuser(item) {
    this._admin.deleteUser(item.id).subscribe
      (data => {
        item.active = false
      },
        error => {
        })
  }

  createuser() {
    this.route.navigate(['users/create'])

  }
  edituser(item) {
    this._admin.selecetedUser.next(item);
    this.route.navigate(['users', item.id])
  }
  activateuser(item){
    this._admin.activateUser(item.id).subscribe(data => {
      item.active = true
    },
      error => {
      })
  }
}
