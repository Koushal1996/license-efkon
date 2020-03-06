import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSingleLicenceComponent } from './update-single-licence.component';

describe('UpdateSingleLicenceComponent', () => {
  let component: UpdateSingleLicenceComponent;
  let fixture: ComponentFixture<UpdateSingleLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSingleLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSingleLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
