import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  selecetedProduct: BehaviorSubject<any> = new BehaviorSubject<any>({});
  selecetedProject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private api: ApiService) {}
  getProjects() {
    return this.api.get("api/projects");
  }
  getProjectById(Id) {
    return this.api.get(`api/project​/${Id}`);
  }
  addProject(data) {
    return this.api.post("api/project", data);
  }
  updateProject(Id, data) {
    return this.api.put(`api​/project​/${Id}`, data);
  }
  getProduct() {
    return this.api.get("api/project/product");
  }
  addProduct(data) {
    return this.api.post("api/project/product", data);
  }
  deleteProduct(Id) {
    return this.api.delete(`api/project/product/${Id}`);
  }
  updateProduct(Id, data) {
    return this.api.put(`api/project/product/${Id}`, data);
  }
  submitProductStatus(Id, data) {
    return this.api.put(`api/project/product/${Id}/submit`, data);
  }
  reviewProductStatus(Id, data) {
    return this.api.put(`api/project/product/${Id}/review`, data);
  }
  approveProductStatus(Id, data) {
    return this.api.put(`api/project/product/${Id}/approve`, data);
  }
  rejectProductStatus(Id, data) {
    return this.api.put(`api/project/product/${Id}/reject`, data);
  }
  renewProjectProduct(Id, data) {
    return this.api.put(`api/project/product/${Id}​/renew`, data);
  }
  getProjectTypes() {
    return this.api.get("api/project/types");
  }
  getProjectManager() {
    return this.api.get("api/users/project-manager");
  }
  getCustomer() {
    return this.api.get("api/users/customer");
  }
  getProductsByProjectId(projectId) {
    return this.api.get(`api/project/${projectId}/product`);
  }
  getProjectProducts() {
    return this.api.get("api/project/product");
  }
  getProjectProductsExcel() {
    return this.api.getFile("api/project/product/excel");
  }
  getProjectProductsPdf() {
    return this.api.getFile("api/project/product/pdf");
  }
  getLicenseType() {
    return this.api.get("api/license/types");
  }
  updateLicenseType(Id, data) {
    return this.api.put(`api/license/type/${Id}`, data);
  }
  generateLicenseKeyProduct(Id, data) {
    return this.api.put(`api/license​/${Id}​/generate-key`, data);
  }
  updateLicenseKeyProduct(Id, data) {
    return this.api.put(`api/license​/${Id}​/replace`, data);
  }
  getProjectLicenseById(projectId) {
    return this.api.get(`api/project/${projectId}/licenses`);
  }
  createExcelbyProjectId(projectId) {
    return this.api.getFile(`api/project/${projectId}/licenses/excel`);
  }
  createPdfbyProjectId(projectId) {
    return this.api.getFile(`api/project/${projectId}/licenses/pdf`);
  }
  productCountByStatus() {
    return this.api.get("api/dashboard/product-status");
  }
  renewConfiguration() {
    return this.api.get("api/renew-configuration");
  }
  updaterenewConfiguration(data) {
    return this.api.put("api/renew-configuration", data);
  }
  saveProjectLicenseById(projectProductId, data) {
    return this.api.post(
      `api/project/product/${projectProductId}/request`,
      data
    );
  }
}
