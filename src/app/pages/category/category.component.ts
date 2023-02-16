import {Component, OnInit} from '@angular/core';

declare interface CategoryInfo {
  path: string;
  title: string;
  icon: string;
}

declare interface FromInfo {
  from: string;
  value: boolean;
}

declare interface BrandInfo {
  title: string;
  value: boolean;
}

declare interface ColorInfo {
  title: string;
  value: boolean;
  color: string;
}

declare interface SizeInfo {
  from: string;
  value: boolean;
  size: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryInfos: CategoryInfo[] = [
    {path: '/telephones-tablettes', title: 'Téléphones & tablettes', icon: 'shopping_box'},
    {path: '/electronique', title: 'Electronique', icon: 'shopping_box'},
    {path: '/electromenager', title: 'Electroménager', icon: 'shopping_box'},
    {path: '/vehicules', title: 'Vehicules', icon: 'shopping_box'},
    {path: '/maison-bureau', title: 'Maison et Bureau', icon: 'files_paper'},
    {path: '/sante-beaute', title: 'Santé & beauté', icon: 'location_map-big'},
    {path: '/produit-bebes', title: 'Produits pour bébé', icon: 'location_map-big'},
    {path: '/mode', title: 'Mode', icon: 'location_map-big'},
    {path: '/matériaux-outils-équipements', title: 'Matériaux, outils & équipements', icon: 'location_map-big'},
    {path: '/animaux', title: 'Animalerie', icon: 'arrows-1_cloud-upload-94'},
    {path: '/sports-loisirs', title: 'Sports, loisirs & voyages', icon: 'arrows-1_cloud-upload-94'},
    {path: '/agroalimentaire', title: 'Super Marché', icon: 'objects_spaceship'},
  ];
  brandInfos: BrandInfo[] = [
    {title: 'Samsung', value: false},
    {title: 'Apple', value: true},
    {title: 'Nokia', value: false},
    {title: 'H&M', value: false},
    {title: 'Tecno', value: false},
    {title: 'Zara', value: false},
    {title: 'H&M', value: false},
    {title: 'Tecno', value: false},
    {title: 'Zara', value: false},
  ]
  fromInfos: FromInfo[] = [
    {from: 'Etranger', value: false},
    {from: 'Gabon', value: false},
  ]
  sizeInfos: SizeInfo[] = [
    {from: 'EUR', value: false, size: '36'},
    {from: 'EUR', value: false, size: '36'},
    {from: 'EUR', value: false, size: '37'},
    {from: 'EUR', value: false, size: '38'},
    {from: 'EUR', value: false, size: '39'},
    {from: 'EUR', value: false, size: '40'},
    {from: 'EUR', value: false, size: '41'},
    {from: 'EUR', value: false, size: '42'},
    {from: 'EUR', value: false, size: '43'},
    {from: 'EUR', value: false, size: '44'},
    {from: 'EUR', value: false, size: '45'},
    {from: 'EUR', value: false, size: '46'},
    {from: 'EUR', value: false, size: '47'},
    {from: 'UK', value: false, size: '3'},
    {from: 'UK', value: false, size: '4'},
    {from: 'UK', value: false, size: '5'},
    {from: 'UK', value: false, size: '6'},
    {from: 'UK', value: false, size: '7'},
    {from: 'UK', value: false, size: '8'},
    {from: 'UK', value: false, size: '9'},
    {from: 'UK', value: false, size: '10'},
    {from: 'UK', value: false, size: '11'},
    {from: 'UK', value: false, size: '12'},
    {from: 'UK', value: false, size: '13'},


  ]
  colorInfos: ColorInfo[] = [
    {title: 'Rouge', value: false, color: '#FF0000'},
    {title: 'Orange', value: false, color: '#FFA500'},
    {title: 'Jaune', value: false, color: '#FFFF00'},
    {title: 'Vert', value: false, color: '#008000'},
    {title: 'Bleu', value: false, color: '#0000FF'},
    {title: 'Violet', value: false, color: '#800080'},
    {title: 'Rose', value: false, color: '#FFC0CB'},
    {title: 'Marron', value: false, color: '#A52A2A'},
    {title: 'Noir', value: false, color: '#000000'},
    {title: 'Blanc', value: false, color: '#FFFFFF'},
    {title: 'Gris', value: false, color: '#808080'},
    {title: 'Cyan', value: false, color: '#00FFFF'},
    {title: 'Magenta', value: false, color: '#FF00FF'},
    {title: 'Rose pâle', value: false, color: '#FFE4E1'},
    {title: 'Kaki', value: false, color: '#C3B091'},
    {title: 'Bordeaux', value: false, color: '#800000'},
    {title: 'Beige', value: false, color: '#F5F5DC'},
    {title: 'Turquoise', value: false, color: '#40E0D0'},
    {title: 'Vert pâle', value: false, color: '#98FB98'},
    {title: 'Bleu clair', value: false, color: '#ADD8E6'},
  ]
  myValue: string = "valeur à transmettre";

  ngOnInit(): void {
  }

  display(dispay: HTMLButtonElement) {
    // @ts-ignore
    document.querySelector('.list').classList.remove('bg-body-secondary');
    // @ts-ignore
    document.querySelector('.grid').classList.remove('bg-body-secondary');
    dispay.classList.add('bg-body-secondary')
    if (dispay.value == '2') {
      // @ts-ignore
      document.querySelector('.display-list').classList.remove('d-none');
      // @ts-ignore
      document.querySelector('.display-grid').classList.add('d-none');
    }
    if (dispay.value == '1') {
      // @ts-ignore
      document.querySelector('.display-grid').classList.remove('d-none');
      // @ts-ignore
      document.querySelector('.display-list').classList.add('d-none');
    }
  }

}
