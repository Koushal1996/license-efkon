import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailReviwerComponent } from './project-detail-reviwer.component';

describe('ProjectDetailReviwerComponent', () => {
  let component: ProjectDetailReviwerComponent;
  let fixture: ComponentFixture<ProjectDetailReviwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailReviwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
