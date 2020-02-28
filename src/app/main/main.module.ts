import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UsersComponent } from './users/users.component';
import { LicenceComponent } from './licence/licence.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UsersServicesService } from './users/users-services.service';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { UpdateLicenceComponent } from './update-licence/update-licence.component';
import { RenewLicenceComponent } from './renew-licence/renew-licence.component';
import { GenerateLicenceComponent } from './generate-licence/generate-licence.component';


@NgModule({
  declarations: [
    ProjectDetailComponent,
    UsersComponent,
    LicenceComponent,
    ViewLogsComponent,
    ChangePasswordComponent,
    NotFoundPageComponent,
   CreateUserComponent,
    CreateProjectComponent,
    UpdateLicenceComponent,
    RenewLicenceComponent,
    GenerateLicenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    RouterModule
  ],
  providers :[UsersServicesService]
})
export class MainModule { }
