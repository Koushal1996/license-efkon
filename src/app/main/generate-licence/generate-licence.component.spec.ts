import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLicenceComponent } from './generate-licence.component';

describe('GenerateLicenceComponent', () => {
  let component: GenerateLicenceComponent;
  let fixture: ComponentFixture<GenerateLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
