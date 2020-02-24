import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';


import { GenerateLicenceUserComponent } from './generate-licence-user/generate-licence-user.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { RequestLicenceKeyUserComponent } from './request-licence-key-user/request-licence-key-user.component';
import { ViewProjectUserComponent } from './view-project-user/view-project-user.component';
import { UpdateLicenceKeyUserComponent } from './update-licence-key-user/update-licence-key-user.component';
import { RenewLicenceKeyUserComponent } from './renew-licence-key-user/renew-licence-key-user.component';
import { ViewLicenceKeylogsUserComponent } from './view-licence-keylogs-user/view-licence-keylogs-user.component';
import { ChnagePasswordUserComponent } from './chnage-password-user/chnage-password-user.component';
import { ViewLicenceUserComponent } from './view-licence-user/view-licence-user.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { UpdateRequestComponent } from './update-request/update-request.component';

@NgModule({
  declarations: [
    UserComponent,
    GenerateLicenceUserComponent,
    RequestLicenceKeyUserComponent,
    ViewProjectUserComponent,
    UpdateLicenceKeyUserComponent,
    RenewLicenceKeyUserComponent,
    ViewLicenceKeylogsUserComponent,
    ChnagePasswordUserComponent,
    ViewLicenceUserComponent,
    RequestStatusComponent,
    UpdateRequestComponent,

],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule

  ],

})
export class UserModule { }
