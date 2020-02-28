import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewLicenceKeyUserComponent } from './renew-licence-key-user.component';

describe('RenewLicenceKeyUserComponent', () => {
  let component: RenewLicenceKeyUserComponent;
  let fixture: ComponentFixture<RenewLicenceKeyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewLicenceKeyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewLicenceKeyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
