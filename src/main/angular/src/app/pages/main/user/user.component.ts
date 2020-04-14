import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin/admin.service';
import swal from 'sweetalert';

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
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to deleted this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["Yes","No"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    this._admin.deleteUser(item.id).subscribe
      (data => {
        item.active = false
        swal("Delete successfully!");
      },
        error => {
        })
        
      }
    });
  }

  createuser() {
    console.log("data")
    this._admin.selecetedUser.subscribe(data =>{
      console.log(data)
    })
   
    this.route.navigate(['users/create'])

  }
  edituser(item) {
    this._admin.selecetedUser.next(item);
    this.route.navigate(['users', item.id])
  }



  activateuser(item){
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to activate this?",
      icon: "warning",
      closeOnClickOutside:false,
      buttons:["Yes","No"],
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {    
      }
      else {
    this._admin.activateUser(item.id).subscribe(data => {
      item.active = true
      swal("Activate successfully!");
    },
      error => {
      })
      
    }
    })
  }
}
