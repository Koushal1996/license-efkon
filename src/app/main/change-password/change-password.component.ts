import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  model:any={};
  constructor() {}

  ngOnInit(): void {
  }
  onSubmit()
  {
   if(this.model.newPsw !== this.model.cnfPsw){
    alert("wrong pasword")
   }
  }
}
