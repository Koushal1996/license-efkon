import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviwerUserComponent } from './reviwer-user.component';

describe('ReviwerUserComponent', () => {
  let component: ReviwerUserComponent;
  let fixture: ComponentFixture<ReviwerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviwerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviwerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
