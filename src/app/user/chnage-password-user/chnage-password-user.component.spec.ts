import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnagePasswordUserComponent } from './chnage-password-user.component';

describe('ChnagePasswordUserComponent', () => {
  let component: ChnagePasswordUserComponent;
  let fixture: ComponentFixture<ChnagePasswordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChnagePasswordUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChnagePasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
