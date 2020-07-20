import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { BehaviorSubject } from "rxjs";
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ReportService {
  constructor(private api: ApiService) {}

  getProjectProductReport() {
    return this.api.get("api/project/product/report");
  }
  getProjectProductReportByEmail(email) {
    return this.api.get("api/project/product/report?customerEmail=" + email);
  }
  getProjectProductReportPdf(email) {
    return this.api.getFile(
      "api​/project​/product​/report​/pdf?customerEmail=" + email
    );
  }
  getProjectProductReportExcel(email) {
    return this.api.getFile(
      "api/project/product/report/excel?customerEmail=" + email
    );
  }
  getLicenseReportByEmail(email) {
    return this.api.get("api/license/report?email=" + email);
  }
  getLicenseReportExcel(email) {
    return this.api.getFile("api/license/report/excel?email=" + email);
  }
  getLicenseReportPdf(email) {
    return this.api.getFile("api/license/report/pdf?email=" + email);
  }
}
