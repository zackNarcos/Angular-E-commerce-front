import {Routes} from "@angular/router";
import {HomeComponent} from "../../pages/home/home.component";
import {CategoryComponent} from "../../pages/category/category.component";
import {ProductShowComponent} from "../../pages/product-show/product-show.component";
import {MainCategoryComponent} from "../../pages/main-category/main-category.component";

export const FrontRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: MainCategoryComponent},
  {path: 'ss-categories', component: CategoryComponent},
  {path: 'detail', component: ProductShowComponent},

];
