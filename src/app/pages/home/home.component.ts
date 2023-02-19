import {AfterViewInit, Component, OnInit} from '@angular/core';

declare interface Category {
  icon: string
  path: string
  title: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  // @ts-ignore
  categorys: Category[] = [
    { icon: "shop", path: "/boutiques-officielles", title: "Boutiques Officielles"},
    { icon: "phone", path: "/téléphones-tablettes", title: "Téléphones & Tablettes"},
    { icon: "collection-play", path: "/electronique", title: "Électronique"},
    { icon: "lamp", path: "/electroménager", title: "Electroménager"},
    { icon: "heart-pulse", path: "/santé-beauté", title: "Santé & Beauté"},
    { icon: "pc-display", path: "/informatique", title: "Informatique"},
    { icon: "universal-access", path: "mode", title: "Mode"},
    { icon: "house-up", path: "maison-bureau", title: "Maison et bureau"},
    { icon: "balloon", path: "produits-bébés", title: "Produits pour bébés"},
    { icon: "cone", path: "articles-sport", title: "Articles de sport"},
    { icon: "controller", path: "jeux-vidéos-consoles", title: "Jeux vidéos & Consoles"},
  ]

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

}
