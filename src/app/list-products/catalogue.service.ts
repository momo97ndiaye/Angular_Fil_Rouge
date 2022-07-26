import { IProduit } from './Produit';
import { IMenu } from './Menu';
import { IBurger } from './Burger';
import { Injectable} from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { }

  


    private burger:Observable<IBurger>=from([
      {
        id:1,
        nom:'Burger simple',
        prix:2000,
        image:'https://img.freepik.com/photos-premium/burger-boeuf-frites_1339-20847.jpg?w=740',
        desc:'rgf'
      },
      {
        id:2,
        nom:'Burger Chicken',
        prix:7000,
        image:'https://img.freepik.com/photos-premium/delicieux-hamburgers-grilles_62847-16.jpg?w=740',
        desc:'rgf'
      },
      {
        id:3,
       nom:'Burger Double',
       prix:3000,
       image:'https://img.freepik.com/photos-gratuite/gros-cheeseburger-frites_140725-2256.jpg?w=740',
       desc:'rgf'
      },
      {
      id:4,
      nom:'Burger Cheese',
      prix:5000,
      image:'https://img.freepik.com/photos-premium/burger-boeuf-fait-maison-delicieux-fast-food-fermer_151349-156.jpg?w=740',
      desc:'rgf'

      },
      {
      id:5,
      nom:'Burger Double Steak',
      prix:6000,
      image:'https://img.freepik.com/photos-gratuite/hamburger-maison-burger-legumes-frais-laitue-au-fromage-mayonnaise-servi-frites-morceaux-papier-brun-table-pierre-noire-concept-restauration-rapide-malbouffe_1150-41842.jpg?t=st=1658580689~exp=1658581289~hmac=ac61496845f0ef3bd83ae89662b3e05b7894ab5e12cfe6b38a0b7f9f0dd2f7d5&w=740',
      desc:'rgf'

      },
      {
      id:6,
      nom:'Burger Chicken',
      prix:7000,
      image:'https://img.freepik.com/photos-premium/delicieux-hamburgers-grilles_62847-16.jpg?w=740',
      desc:'rgf'
      }
      ] 
    );

    private menu:Observable<IMenu>=from([
      {
        id:1,
        nom:'Burger simple',
        prix:2000,
        image:'https://img.freepik.com/photos-premium/burger-boeuf-frites_1339-20847.jpg?w=740',
        desc:'rgf'
      },
      {
        id:2,
        nom:'Burger Chicken',
        prix:7000,
        image:'https://img.freepik.com/photos-premium/delicieux-hamburgers-grilles_62847-16.jpg?w=740',
        desc:'rgf'
      },
      {
        id:3,
       nom:'Burger Double',
       prix:3000,
       image:'https://img.freepik.com/photos-gratuite/gros-cheeseburger-frites_140725-2256.jpg?w=740',
       desc:'rgf'
      },
      {
      id:4,
      nom:'Burger Cheese',
      prix:5000,
      image:'https://img.freepik.com/photos-premium/burger-boeuf-fait-maison-delicieux-fast-food-fermer_151349-156.jpg?w=740',
      desc:'rgf'

      },
      {
      id:5,
      nom:'Burger Double Steak',
      prix:6000,
      image:'https://img.freepik.com/photos-gratuite/hamburger-maison-burger-legumes-frais-laitue-au-fromage-mayonnaise-servi-frites-morceaux-papier-brun-table-pierre-noire-concept-restauration-rapide-malbouffe_1150-41842.jpg?t=st=1658580689~exp=1658581289~hmac=ac61496845f0ef3bd83ae89662b3e05b7894ab5e12cfe6b38a0b7f9f0dd2f7d5&w=740',
      desc:'rgf'

      },
      {
      id:6,
      nom:'Burger Chicken',
      prix:7000,
      image:'https://img.freepik.com/photos-premium/delicieux-hamburgers-grilles_62847-16.jpg?w=740',
      desc:'rgf'
      }
      ] 
    );

    private catalogue:Observable<IProduit>=from([

    ]);   
    getBurger():Observable<IBurger>{
      return this.burger
    }
    getMenu():Observable<IMenu>{
      return this.menu
    }
    getCatalogue():Observable<IProduit>{
      return this.catalogue
    }
}
