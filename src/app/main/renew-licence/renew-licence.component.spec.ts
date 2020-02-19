import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewLicenceComponent } from './renew-licence.component';

describe('RenewLicenceComponent', () => {
  let component: RenewLicenceComponent;
  let fixture: ComponentFixture<RenewLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
