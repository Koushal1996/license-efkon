import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailApproverComponent } from './project-detail-approver.component';

describe('ProjectDetailApproverComponent', () => {
  let component: ProjectDetailApproverComponent;
  let fixture: ComponentFixture<ProjectDetailApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
