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
}
