import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import * as Swal from 'sweetalert';
@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit {

  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }
  // Reject Request
OnRejectRequest()
{
  Swal("Write Your Reason here:", {
    content: {
      element: "input",
      attributes: {
          placeholder: "Type your Reason",
          type: "text",
          minlength :'30',
          required :true
           },
   }
  })
  .then((value) => {

    if(value=="")
    {
      Swal(`You need to write something!`);

    }
    else
    Swal(`Your Reason is : ${value}`);
       console.log(value);

  });
}
// Accept Request
onAccepRequest()
{
  swal("Good job!", "Request has been Accepted!", "success");
}
}
