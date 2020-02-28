import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordApproverComponent } from './change-password-approver.component';

describe('ChangePasswordApproverComponent', () => {
  let component: ChangePasswordApproverComponent;
  let fixture: ComponentFixture<ChangePasswordApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
