import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerComponent } from './reviewer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewerRoutingModule } from './reviewer-routing.module';




@NgModule({
  declarations: [ReviewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }
