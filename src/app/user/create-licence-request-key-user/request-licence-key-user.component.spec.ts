import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLicenceKeyUserComponent } from './request-licence-key-user.component';

describe('RequestLicenceKeyUserComponent', () => {
  let component: RequestLicenceKeyUserComponent;
  let fixture: ComponentFixture<RequestLicenceKeyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLicenceKeyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLicenceKeyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
