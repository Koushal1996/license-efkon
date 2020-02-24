import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceApproverComponent } from './view-licence-approver.component';

describe('ViewLicenceApproverComponent', () => {
  let component: ViewLicenceApproverComponent;
  let fixture: ComponentFixture<ViewLicenceApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
