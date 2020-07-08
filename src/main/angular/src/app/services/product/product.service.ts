import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { BehaviorSubject } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private api: ApiService) {}
  selecetedFamily: BehaviorSubject<any> = new BehaviorSubject<any>({});
  selecetedProductPending: BehaviorSubject<any> = new BehaviorSubject<any>({});
  getVersions() {
    return this.api.get("api/versions");
  }
  addVersions(data) {
    return this.api.post("api/version", data);
  }
  deleteVersions(Id) {
    return this.api.delete(`api/version/${Id}`);
  }
  updateVersions(Id, data) {
    return this.api.put(`api/version/${Id}`, data);
  }

  getProductDetails() {
    return this.api.get("api​/product​/details");
  }
  addProductDetail(data) {
    // debugger
    return this.api.post("api​/product​/detail", data);
  }
  deleteProductDetail(Id) {
    return this.api.delete(`api/product/detail/${Id}`);
  }
  updateProductDetail(Id, data) {
    return this.api.put(`api/product/detail/${Id}`, data);
  }
  getProductById(Id) {
    return this.api.get(`api/project/product/${Id}`);
  }
  getProductFamilies() {
    return this.api.get("api/product/families");
  }
  getProductFamiliesAll() {
    return this.api.get("api/product/families/all");
  }
  addProductFamily(data) {
    return this.api.post("api/product/family", data);
  }
  updateProductFamily(Id, data) {
    return this.api.put(`api/product/family/${Id}`, data);
  }
  deleteProductFamily(Id) {
    return this.api.delete(`api/product/family/${Id}`);
  }
  activateProductFamily(Id) {
    return this.api.put(`​api​/product​/family​/reactivate​/${Id}`, {});
  }
  // viewRequest(status: any) {
  //   //debugger;
  //   return this.api.get(`api/project-requests`, { status: status });
  // }
  viewRequestPending() {
    return this.api.get("api/project-requests?status=" + "PENDING");
  }
  viewRequestAccepted() {
    return this.api.get("api/project-requests?status=" + "ACCEPTED");
  }
  viewRequestRejected() {
    return this.api.get("api/project-requests?status=" + "REJECTED");
  }
  updateProductLicenseReject(Id, data) {
    return this.api.put(`api/project-request/${Id}/reject`, data);
  }
  updateProductLicenseAccept(Id, data) {
    return this.api.put(`api/project-request/${Id}/accept`, data);
  }
  viewRequestById(id) {
    return this.api.get(`api/project-request/${id}`);
  }
  getlicenseReport() {
    return this.api.get("api/license/report");
  }
  getlicenseReportbyEmail(email) {
    return this.api.get(`api/license/report/${email}`);
  }
}
