import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {SliderItems} from "../../shareds/models/slider-items";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements AfterViewInit, OnInit {

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
      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      })

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      })
    })
    this.autoPlay()

  }

  autoPlay() {
    setInterval(() => {
      let productContainers = document.querySelectorAll('.product-container');
      let cptScroll = 0
      productContainers.forEach((item) => {
        let containerWidth = item.getBoundingClientRect().width
        if (!this.isOver) {
          item.scrollLeft += containerWidth
          cptScroll = item.scrollLeft + cptScroll
          if (item.scrollWidth - containerWidth - cptScroll <= 1) {
            item.scrollLeft -= cptScroll
            cptScroll = 0
          }
        }
      })
    }, 10000)
  }

  mouseIn(b: boolean) {
    this.isDisabled = b
  }

  isOverMethod(b: boolean) {
    this.isOver = b
  }
}
