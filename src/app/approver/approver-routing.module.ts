import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApproverComponent } from './approver.component';
import { ApproverUsersComponent } from './users-approver/approver-users.component';
import { ProjectDetailApproverComponent } from './project-detail-approver/project-detail-approver.component';
import { ViewLicenceApproverComponent } from './view-licence-approver/view-licence-approver.component';
import { ViewLicenceKeyLogsApproverComponent } from './view-licence-key-logs-approver/view-licence-key-logs-approver.component';
import { ChangePasswordApproverComponent } from './change-password-approver/change-password-approver.component';


const routes: Routes = [
  {
    path: '',
    component: ApproverComponent,
    children: [
      {
        path: '',
        redirectTo: 'approverUser',
        pathMatch: 'full'
      },
      {
        path: 'approverUser',
        component: ApproverUsersComponent
      },
      {
        path: 'approverProjectDetail',
        component: ProjectDetailApproverComponent
      },
      {
        path: 'approverViewLicence',
        component: ViewLicenceApproverComponent
      },
      {
        path: 'approverLicenceLogs',
        component: ViewLicenceKeyLogsApproverComponent
      },
      {
        path: 'approverchangePassword',
        component: ChangePasswordApproverComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApproverRoutingModule { }
