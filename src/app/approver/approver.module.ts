import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproverRoutingModule } from './approver-routing.module';
import { RouterModule } from '@angular/router';
import { ApproverComponent } from './approver.component';
import { ProjectDetailApproverComponent } from './project-detail-approver/project-detail-approver.component';
import { ViewLicenceApproverComponent } from './view-licence-approver/view-licence-approver.component';
import { ViewLicenceKeyLogsApproverComponent } from './view-licence-key-logs-approver/view-licence-key-logs-approver.component';
import { ChangePasswordApproverComponent } from './change-password-approver/change-password-approver.component';
import { UsersServicesService } from './users-approver/users-services.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   ApproverComponent,
   ProjectDetailApproverComponent,
   ViewLicenceApproverComponent,
   ViewLicenceKeyLogsApproverComponent,
   ChangePasswordApproverComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ApproverRoutingModule
  ],
      providers:[UsersServicesService]
})
export class ApproverModule { }
