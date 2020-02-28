import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLogsReviwerComponent } from './project-logs-reviwer.component';

describe('ProjectLogsReviwerComponent', () => {
  let component: ProjectLogsReviwerComponent;
  let fixture: ComponentFixture<ProjectLogsReviwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLogsReviwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLogsReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
