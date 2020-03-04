import { Component, OnInit } from '@angular/core';
import * as bootbox from 'bootbox/bootbox.js'
import { UsersServicesService } from './users-services.service';
import { Routes } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  model:any;
  val:number=1;
   router:Routes =[
    {path:'createUser',component:CreateUserComponent}
  ]
  myAllUser:any;
  expression:string='green'
  constructor(private userServices:UsersServicesService) { }

  ngOnInit(): void {
    this.myAllUser=this.userServices.users;
    console.log(this.myAllUser);

  }
  Onselect(event)
  {
    this.val=event;
console.log(event)
  }
// Serach here Code-
onKeydownEvent(event: KeyboardEvent) {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td =tr[i].getElementsByTagName("td")[this.val]  ;
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
}
