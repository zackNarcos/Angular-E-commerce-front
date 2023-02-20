import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {CategoryInfo} from "../../shareds/models/categoryInfo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  // @ts-ignore
  categorys: CategoryInfo[] = [
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

  productsRecommended: Product[] =  [
    {
      id: 1,
      nom: "Game de creme a",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.lascom.com/wp-content/uploads/2021/03/Bland_Cosmetic_Product_Packaging_Unit_500x400.jpg"
    },
    {
      id: 1,
      nom: "Produit entretien",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://im.qccdn.fr/term/thematique-produit-d-entretien-53/principal-69.jpg"
    },
    {
      id: 1,
      nom: "lotion",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://netatmostatic.blob.core.windows.net/static/images/guides/weather/air-care/faq/cleaning-products-780w.jpg"
    },
    {
      id: 1,
      nom: "produit mayance",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.mayence.com/wp-content/uploads/2020/12/Mise-en-avant-produit-1.png"
    },
    {
      id: 1,
      nom: "evolution",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.manager-go.com/assets/Uploads/definir-evolution-min.jpg"
    },
    {
      id: 1,
      nom: "produit cheveux",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.lebriochin.com/19-pdt_360/super-decapant-cuisine.jpg"
    },
    {
      id: 1,
      nom: "Lettre type de demande",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.dynamique-mag.com/wp-content/uploads/demande-de-documentation-sur-un-produit.jpg"
    },
    {
      id: 1,
      nom: "Stockage des produits",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.virages.com/Images/Blog/Bidons-Produits-Dangereux-960px.jpg"
    },
    {
      id: 1,
      nom: "Doser et diluer les",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.delcourt.fr/img/cms/Blog/doser-et-diluer-produits-nettoyage.jpg"
    },
    {
      id: 1,
      nom: "Liquide vaisselle",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.delcourt.fr/3269-large_default/Decapant-universel-DELCOURT-5-litres.jpg"
    },
    {
      id: 1,
      nom: "Le produit – M'SIEUR",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://msieur319005310.files.wordpress.com/2019/12/tsarvna.jpg?w=404"
    },
    {
      id: 1,
      nom: "Le produit – M'SIEUR",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.dove.com/content/dam/unilever/dove/france/pack_shot/08712561384100_8986060_dove_savon_liquide_karite_vanille_250ml_fop-png_hd-959776.png"
    },
  ]

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

}
