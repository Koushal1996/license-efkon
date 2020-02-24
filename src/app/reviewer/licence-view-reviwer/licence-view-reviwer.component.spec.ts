import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceViewReviwerComponent } from './licence-view-reviwer.component';

describe('LicenceViewReviwerComponent', () => {
  let component: LicenceViewReviwerComponent;
  let fixture: ComponentFixture<LicenceViewReviwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceViewReviwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceViewReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
