import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SliderItems} from "../../shareds/models/slider-items";

@Component({
  selector: 'app-product-vip-slider',
  templateUrl: './product-vip-slider.component.html',
  styleUrls: ['./product-vip-slider.component.scss']
})
export class ProductVipSliderComponent implements OnInit {

  // @ts-ignore
  @Input() sliderItemInput: SliderItems
  isDisabled: any = true;
  sliderItem: SliderItems = new SliderItems("","",[])

  ngOnInit(): void {
    this.sliderItem = this.sliderItemInput
  }

}
