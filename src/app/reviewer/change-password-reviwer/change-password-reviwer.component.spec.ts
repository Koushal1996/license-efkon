import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordReviwerComponent } from './change-password-reviwer.component';

describe('ChangePasswordReviwerComponent', () => {
  let component: ChangePasswordReviwerComponent;
  let fixture: ComponentFixture<ChangePasswordReviwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordReviwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordReviwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
