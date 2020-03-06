import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewSingleLicenceComponent } from './renew-single-licence.component';

describe('RenewSingleLicenceComponent', () => {
  let component: RenewSingleLicenceComponent;
  let fixture: ComponentFixture<RenewSingleLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewSingleLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewSingleLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
