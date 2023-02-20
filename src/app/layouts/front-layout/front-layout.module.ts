import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FrontRoutes} from "./front-layout.routing";
import {HomeComponent} from '../../pages/home/home.component';
import {CategoryComponent} from '../../pages/category/category.component';
import {FormsModule} from "@angular/forms";
import {ProductShowComponent} from '../../pages/product-show/product-show.component';
import {ComponentsModule} from "../../components/components.module";
import { MainCategoryComponent } from '../../pages/main-category/main-category.component';


@NgModule({
  declarations: [

    HomeComponent,
    CategoryComponent,
    ProductShowComponent,
    MainCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FrontRoutes),
    FormsModule,
    ComponentsModule,
  ]
})
export class FrontLayoutModule {
}
