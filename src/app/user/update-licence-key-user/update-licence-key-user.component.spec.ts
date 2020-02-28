import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLicenceKeyUserComponent } from './update-licence-key-user.component';

describe('UpdateLicenceKeyUserComponent', () => {
  let component: UpdateLicenceKeyUserComponent;
  let fixture: ComponentFixture<UpdateLicenceKeyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLicenceKeyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLicenceKeyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
