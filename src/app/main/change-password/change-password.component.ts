import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  model: any = {};
  constructor() {
    var val1 = this.model.newPsw;
    var val2 = this.model.cnfPsw
    console.log(val1 + " " + val2);
    if (val1 != val2) {
      this.msg = "Password does not match"
    }
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }

  msg: string;
  onSubmit() {
    if (this.model.newPsw !== this.model.cnfPsw) {
      alert("wrong pasword")
    }
  }
}
