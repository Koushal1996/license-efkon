import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProductComponent } from './total-product.component';

describe('TotalProductComponent', () => {
  let component: TotalProductComponent;
  let fixture: ComponentFixture<TotalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
