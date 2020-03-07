import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';
import { ExcelService } from 'src/app/Services/excel.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';

@Component({
  selector: 'app-update-licence',
  templateUrl: './update-licence.component.html',
  styleUrls: ['./update-licence.component.scss']
})
export class UpdateLicenceComponent implements OnInit {
  model: any = [];
  customerName: any;
  btnDisable: boolean = true;
  myval: string;
  value: boolean = true;
  oldLicenceKey: any;
  excel: any = [];
  emptyArr = [];
  TableData: any;
  excel2: any;
  notallowed = true;
  productCode: any;
  SrNO: any;
  myIndex:any;
  myLicenceKey:boolean=true;
  constructor(private excelService: ExcelService,
    private http: HttpClient,
    private myServices: MyProjectDetailService) { }
  ngOnInit(): void {
    // Get ID/Sr on Submit-
    this.TableData = this.myServices.LicenceViewLog;

    // this.excel=this.myServices.oldLicencekey;
    this.customerName = this.myServices.Customer; //For customers
    this.oldLicenceKey = this.myServices.oldLicencekey //for old licence key
    this.productCode = this.myServices.productCode


  }

  exportAsXLSX(index: number, item): void {
    const exportData = {
      Srno: index + 1,
      LicenceID: item.id,
      NewAccessId: item.newAccessId,
      NewLicenceKey: item.licenseKey

    }

    this.excelService.exportAsExcelFile([exportData], 'Efkon         LicenseKey');


  }

  formSubmit() {
    if (this.model.UniqueAccess === null) { }
    else {
      this.btnDisable = !this.btnDisable;
    }
  }

generateRandomKey(item) {
  var randomNum = Math.random() * 100
  var newRandom = "RLVD-06FG-ASDF" + Math.trunc(randomNum);
  item.licenseKey = newRandom;

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
