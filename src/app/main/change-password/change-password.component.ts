import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  model:any={};
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function(){
      $(this).scrollTop(0);
    });
  }
  onSubmit()
  {
   if(this.model.newPsw !== this.model.cnfPsw){
    alert("wrong pasword")
   }
  }
}
