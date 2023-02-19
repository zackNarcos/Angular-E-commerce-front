import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {SliderItems} from "../../shareds/models/slider-items";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements AfterViewInit, OnInit {

  products: Product[] = [
    {
      id: 1,
      nom: "Game de creme a cheveux",
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
      nom: "Lettre type de demande de documentation sur un produit",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.dynamique-mag.com/wp-content/uploads/demande-de-documentation-sur-un-produit.jpg"
    },
    {
      id: 1,
      nom: "Stockage des produits chimiques, comment procéder ? - Virages",
      description: "ce-ci est une description breve d'un produit qui sera commercialiser dans l'avenir",
      isSolde: true,
      oldPrice: 50000,
      newPrice: 34000,
      img: "https://www.virages.com/Images/Blog/Bidons-Produits-Dangereux-960px.jpg"
    },
    {
      id: 1,
      nom: "Doser et diluer les produits de nettoyage professionnels ? - Article-blog Delcourt.fr",
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
