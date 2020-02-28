import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectUserComponent } from './view-project-user.component';

describe('ViewProjectUserComponent', () => {
  let component: ViewProjectUserComponent;
  let fixture: ComponentFixture<ViewProjectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
