import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceKeylogsUserComponent } from './view-licence-keylogs-user.component';

describe('ViewLicenceKeylogsUserComponent', () => {
  let component: ViewLicenceKeylogsUserComponent;
  let fixture: ComponentFixture<ViewLicenceKeylogsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceKeylogsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceKeylogsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
