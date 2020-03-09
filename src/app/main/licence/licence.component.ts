import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss']
})
export class LicenceComponent implements OnInit {

  logs: any;
  Searchvalue: number = 1;
  SortValue: number = 1;
  msg: boolean = false;
  item = 5;
  msg1: string;
  constructor(private _viewLog: ProjectDetailServiceService) { }

  ngOnInit(): void {
    this.logs = this._viewLog.ViewLog;
  }

  // Get value for Search element
  OnselectSearch(event) {
    this.Searchvalue = event;
    console.log("Event in search " + event)
  }

  // Code For search
  onKeydownEvent() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[this.Searchvalue];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          this.msg1 = "Sorry, Data not available !!"
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
          this.msg = true
        }
      }
    }
  }

  // Code For Sorting
  OnselectSortItem(event) {
    console.log("In search item" + event);
    if (event == 5) {
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
    else {
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

  // Code for Pagination
  OnPagination(event) {
    this.item = event
  }
}
