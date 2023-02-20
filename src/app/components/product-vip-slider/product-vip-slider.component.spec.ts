import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVipSliderComponent } from './product-vip-slider.component';

describe('ProductVipSliderComponent', () => {
  let component: ProductVipSliderComponent;
  let fixture: ComponentFixture<ProductVipSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVipSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVipSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
