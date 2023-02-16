import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NavSidebarComponent} from './nav-sidebar/nav-sidebar.component';
import {HeaderSidebarsComponent} from './header-sidebars/header-sidebars.component';
import {RouterLink} from "@angular/router";
import {ProductSliderComponent} from "./product-slider/product-slider.component";
import { ProductRecentlyViewComponent } from './product-recently-view/product-recently-view.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavSidebarComponent,
    HeaderSidebarsComponent,
    ProductSliderComponent,
    ProductRecentlyViewComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductSliderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class ComponentsModule {
}
