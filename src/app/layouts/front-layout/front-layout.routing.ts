import {Routes} from "@angular/router";
import {HomeComponent} from "../../pages/home/home.component";
import {CategoryComponent} from "../../pages/category/category.component";
import {ProductShowComponent} from "../../pages/product-show/product-show.component";

export const FrontRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'detail', component: ProductShowComponent},

];
