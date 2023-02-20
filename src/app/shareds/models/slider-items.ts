import {Product} from "./product";

export class SliderItems {
  title: string
  url: string
  items: Product[]


  constructor(title: string, url: string, items: Product[]) {
    this.title = title;
    this.url = url;
    this.items = items;
  }
}
