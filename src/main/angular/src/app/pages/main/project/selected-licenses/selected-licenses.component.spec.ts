import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLicensesComponent } from './selected-licenses.component';

describe('SelectedLicensesComponent', () => {
  let component: SelectedLicensesComponent;
  let fixture: ComponentFixture<SelectedLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
