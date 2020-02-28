import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverUsersComponent } from './approver-users.component';

describe('ApproverUsersComponent', () => {
  let component: ApproverUsersComponent;
  let fixture: ComponentFixture<ApproverUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
