import { VersionComponent } from "./product/version/version.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { UserComponent } from "./user/user.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { RoleComponent } from "./role/role.component";
import { CreateRoleComponent } from "./role/create-role/create-role.component";
import { ProjectComponent } from "./project/project.component";
import { CreateProjectComponent } from "./project/create-project/create-project.component";
import { ProductComponent } from "./product/product.component";
import { FamilyComponent } from "./product/family/family.component";
import { DetailComponent } from "./product/detail/detail.component";
import { LicensesComponent } from "./product/licenses/licenses.component";
import { TypeComponent } from "./product/type/type.component";

import { AddProductComponent } from "./project/add-product/add-product.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectProductComponent } from "./project-product/project-product.component";
import { CreateFamilyComponent } from "./product/family/create-family/create-family.component";
import { SelectedLicensesComponent } from "./project/selected-licenses/selected-licenses.component";
import { RenewConfigurationComponent } from "./product/renew-configuration/renew-configuration.component";
import { DeshboardComponent } from "./deshboard/deshboard.component";
import { ViewrequestComponent } from "./viewrequest/viewrequest.component";
import { AcceptedComponent } from "./viewrequest/accepted/accepted.component";
import { RejectedComponent } from "./viewrequest/rejected/rejected.component";
import { PendingComponent } from "./viewrequest/pending/pending.component";
import { EditProductComponent } from "./viewrequest/pending/edit-product/edit-product.component";
import { ReportComponent } from "./report/report.component";
import { StatusComponent } from "./deshboard/status/status.component";
import { LicenseComponent } from "./report/license/license.component";
import { TotalProductComponent } from "./report/total-product/total-product.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      //{ path: "", redirectTo: "projects", pathMatch: "full" },
      { path: "roles", component: RoleComponent },
      {
        path: "roles/create",
        component: CreateRoleComponent,
        //canDeactivate:[DeactivateGuard]
      },
      {
        path: "roles/:id",
        component: CreateRoleComponent,
        //canDeactivate:[DeactivateGuard]
      },
      { path: "users", component: UserComponent },
      { path: "users/create", component: CreateUserComponent },
      { path: "users/:id", component: CreateUserComponent },
      { path: "projects", component: ProjectComponent },
      { path: "projects/create", component: CreateProjectComponent },
      { path: "projects/:id", component: CreateProjectComponent },
      { path: "projects/:id/product", component: AddProductComponent },
      { path: "projects/:id/licenses", component: SelectedLicensesComponent },
      {
        path: "projects/:id/product/:productId",
        component: AddProductComponent,
      },
      {
        path: "products",
        component: ProductComponent,
        children: [
          { path: "family", component: FamilyComponent },
          { path: "family/create", component: CreateFamilyComponent },
          { path: "family/:id", component: CreateFamilyComponent },
          { path: "detail", component: DetailComponent },
          { path: "version", component: VersionComponent },
          { path: "license", component: LicensesComponent },
          { path: "type", component: TypeComponent },
          {
            path: "renewconfiguration",
            component: RenewConfigurationComponent,
          },
        ],
      },
      {
        path: "viewrequest",
        component: ViewrequestComponent,
        children: [
          { path: "accepted", component: AcceptedComponent },
          { path: "rejected", component: RejectedComponent },
          { path: "pending", component: PendingComponent },
          // { path: "pending/:id", component: EditProductComponent },
          {
            path: "pending/:id/product/:productId",
            component: EditProductComponent,
          },
        ],
      },
      { path: "profile", component: ProfileComponent },
      { path: "projectproduct", component: ProjectProductComponent },
      { path: "dashboard", component: DeshboardComponent },
      { path: "dashboard/:status", component: StatusComponent },
      {
        path: "report",
        component: ReportComponent,
        // children: [
        //   { path: "emailLicense", component: LicenseComponent },
        //   { path: "emailProduct", component: TotalProductComponent },
        // ],
      },
      { path: "report/:name/:email/license", component: LicenseComponent },
      { path: "report/:name/:email/product", component: TotalProductComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
