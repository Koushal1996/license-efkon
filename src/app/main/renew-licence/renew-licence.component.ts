import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import { ExcelService } from 'src/app/Services/excel.service';
import { HttpClient } from '@angular/common/http';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';

@Component({
  selector: 'app-renew-licence',
  templateUrl: './renew-licence.component.html',
  styleUrls: ['./renew-licence.component.scss']
})
export class RenewLicenceComponent implements OnInit {
  model: any = [];
  customerName: any;
  btnDisable: boolean = true;
  oldLicenceKey: any;
  tableData: any;
  productCode: any;
  generate: boolean = true;

  constructor(private excelService: ExcelService,
    private http: HttpClient,
    private myService: ProjectDetailServiceService,
    private myServices: MyProjectDetailService) { }

  ngOnInit(): void {
    this.customerName = this.myService.ViewLog;

    // Get ID/Sr on Submit-
    this.tableData = this.myServices.LicenceViewLog;
    this.customerName = this.myServices.Customer; //For customers
    this.oldLicenceKey = this.myServices.oldLicencekey //for old licence key
    this.productCode = this.myServices.productCode

  }
  exportAsXLSX(index: number, item): void {
    item.excelLoader = true;
    const exportData = {
      Srno: index + 1,
      LicenceID: item.id,
      NewExpPeriod: item.newExpPeriod,
      NewAccessId: item.AccessId,
      NewLicenceKey: item.licenseKey,

    }
    setTimeout(() => {
      this.excelService.exportAsExcelFile([exportData], 'Efkon LicenseKey');
      item.excelLoader = false;
    }, 2000);
  }
  formSubmit() {
    if (this.model.UniqueAccess === null) { }
    else {
      this.btnDisable = !this.btnDisable;
    }
  }
  generateRandomKey(item) {
    item.loader = true;
    item.generate = false;
    setTimeout(() => {
      var randomNum = Math.random() * 100
      var newRandom = "RLVD-06FG-ASDF" + Math.trunc(randomNum);
      item.licenseKey = newRandom;
      item.loader = false
      this.generate = true;

    }, 3000);

  }

  // Input for unique access key
  index1: number;
  disable: boolean = true;
  inputData: boolean = true;
  inputValue: string;
  inputChange(index) {

    this.inputValue = index;
    console.log(index)
    if (index != "") {
      this.disable = false;

    }
  }
}
