import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {FrontLayoutComponent} from "./layouts/front-layout/front-layout.component";

const routes: Routes =[
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/front-layout/front-layout.module').then(x=>x.FrontLayoutModule),
      }
      ]
  },
  {
    path: '**',
    redirectTo: 'front'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
