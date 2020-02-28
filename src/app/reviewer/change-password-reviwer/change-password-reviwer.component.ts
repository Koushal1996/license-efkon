import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-reviwer',
  templateUrl: './change-password-reviwer.component.html',
  styleUrls: ['./change-password-reviwer.component.scss']
})
export class ChangePasswordReviwerComponent implements OnInit {

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
