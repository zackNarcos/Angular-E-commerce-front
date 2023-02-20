import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SliderItems} from "../../shareds/models/slider-items";

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.scss']
})
export class CategoriesSliderComponent implements AfterViewInit, OnInit {

  // @ts-ignore
  @Input() sliderItemInput: SliderItems
  isDisabled: any = true;
  isOver: any = false;
  sliderItem: SliderItems = new SliderItems("","",[])

  ngOnInit(): void {
    this.sliderItem = this.sliderItemInput
  }

  ngAfterViewInit(): void {
    let productContainers = document.querySelectorAll('.product-container');
    let nxtBtn = document.querySelectorAll('.nxt-btn');
    let preBtn = document.querySelectorAll('.pre-btn');

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
      if (nxtBtn[i]){
        nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
        })
      }
      if (preBtn[i]){
        preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
        })
      }
    })
  }

  mouseIn(b: boolean) {
    this.isDisabled = b
  }

  isOverMethod(b: boolean) {
    this.isOver = b
  }
}
