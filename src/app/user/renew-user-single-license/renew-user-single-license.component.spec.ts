import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewUserSingleLicenseComponent } from './renew-user-single-license.component';

describe('RenewUserSingleLicenseComponent', () => {
  let component: RenewUserSingleLicenseComponent;
  let fixture: ComponentFixture<RenewUserSingleLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewUserSingleLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewUserSingleLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
