import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-approver',
  templateUrl: './change-password-approver.component.html',
  styleUrls: ['./change-password-approver.component.scss']
})
export class ChangePasswordApproverComponent implements OnInit {

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
