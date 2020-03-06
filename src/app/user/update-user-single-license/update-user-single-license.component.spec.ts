import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSingleLicenseComponent } from './update-user-single-license.component';

describe('UpdateUserSingleLicenseComponent', () => {
  let component: UpdateUserSingleLicenseComponent;
  let fixture: ComponentFixture<UpdateUserSingleLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserSingleLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserSingleLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
