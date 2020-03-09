import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerComponent } from './reviewer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ProjectDetailReviwerComponent } from './project-detail-reviwer/project-detail-reviwer.component';
import { LicenceViewReviwerComponent } from './licence-view-reviwer/licence-view-reviwer.component';
import { ProjectLogsReviwerComponent } from './project-logs-reviwer/project-logs-reviwer.component';
import { ChangePasswordReviwerComponent } from './change-password-reviwer/change-password-reviwer.component';

@NgModule({
  declarations: [ReviewerComponent, ProjectDetailReviwerComponent, LicenceViewReviwerComponent, ProjectLogsReviwerComponent, ChangePasswordReviwerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }
