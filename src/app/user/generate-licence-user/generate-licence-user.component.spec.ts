import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLicenceUserComponent } from './generate-licence-user.component';

describe('GenerateLicenceUserComponent', () => {
  let component: GenerateLicenceUserComponent;
  let fixture: ComponentFixture<GenerateLicenceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLicenceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLicenceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
