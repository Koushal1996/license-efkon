import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewConfigurationComponent } from './renew-configuration.component';

describe('RenewConfigurationComponent', () => {
  let component: RenewConfigurationComponent;
  let fixture: ComponentFixture<RenewConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
