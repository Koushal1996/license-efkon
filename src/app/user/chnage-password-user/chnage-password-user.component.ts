import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chnage-password-user',
  templateUrl: './chnage-password-user.component.html',
  styleUrls: ['./chnage-password-user.component.scss']
})
export class ChnagePasswordUserComponent implements OnInit {
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
