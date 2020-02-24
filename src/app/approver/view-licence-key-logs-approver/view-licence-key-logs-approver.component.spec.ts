import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceKeyLogsApproverComponent } from './view-licence-key-logs-approver.component';

describe('ViewLicenceKeyLogsApproverComponent', () => {
  let component: ViewLicenceKeyLogsApproverComponent;
  let fixture: ComponentFixture<ViewLicenceKeyLogsApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceKeyLogsApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceKeyLogsApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
