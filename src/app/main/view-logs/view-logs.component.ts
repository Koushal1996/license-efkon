import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styleUrls: ['./view-logs.component.scss']
})
export class ViewLogsComponent implements OnInit {
  logs:any;
  item=5;
  Searchvalue:number=1;
SortValue:number=1;
msg1: string;
msg:boolean=false;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;

  }
  // Get value for Search element
OnselectSearch(event)
{
  this.Searchvalue=event;
  console.log("Event in search "+event)
}
  // Code For search
onKeydownEvent() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td =tr[i].getElementsByTagName("td")[this.Searchvalue]  ;
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";

      } else {
        tr[i].style.display = "none";
       this.msg=true
      }
    }
  }
}

// Code For Sorting
OnselectSortItem(event) {
  console.log("In search item"+event);
  if(event==5)
  {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[event];
        y = rows[i + 1].getElementsByTagName("TD")[event];
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  else{
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[event];
      y = rows[i + 1].getElementsByTagName("TD")[event];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  }

}
// Pgination
OnPagination(event)
{
this.item=event
}
}
