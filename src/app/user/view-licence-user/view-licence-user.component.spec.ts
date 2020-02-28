import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceUserComponent } from './view-licence-user.component';

describe('ViewLicenceUserComponent', () => {
  let component: ViewLicenceUserComponent;
  let fixture: ComponentFixture<ViewLicenceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
