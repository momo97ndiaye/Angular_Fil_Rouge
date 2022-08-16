import { IBurger } from './../list-products/Burger';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, ElementRef } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { IMenu } from '../list-products/Menu';
import  { HttpClient} from '@angular/common/http';
import { IProduit } from '../list-products/Produit';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  constructor(private http: HttpClient) {
    let existingCartItems = JSON.parse(localStorage.getItem('products')||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  url2 = "http://127.0.0.1:8000/api/produits";

  getAllProductsObs():Observable<IProduit>{
    return this.http.get<IProduit>(this.url2);
  }

  urlZone = "http://127.0.0.1:8000/api/zones";

  getAllZoneObs():Observable<any>{
    return this.http.get<any>(this.urlZone);
  }

  urlLivreurs = "http://127.0.0.1:8000/api/livreurs";

  getAllLivreursObs():Observable<any>{
    return this.http.get<any>(this.urlLivreurs);
  }

  total:number =0

  items = [];

  tabPanier:any[]= []

  commande:any[]=[]

  zones:any[] =[]

  private itemsSubject = new BehaviorSubject<IBurger[]>([]);
  items$ = this.itemsSubject.asObservable();

  private itemsSubjectProd = new BehaviorSubject<IProduit[]>([]);
  itemsProd$ = this.itemsSubjectProd.asObservable();

  //private itemsSubjectZone = new BehaviorSubject<any[]>([]);
  //itemsZone$ = this.itemsSubjectZone.asObservable();




  addToCart(product: IBurger) {
    this.items$.pipe(
      take(1),
      map((products) => {
        product.qte = 1
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
    this.saveEtat()
  }

  checkItem(product:any,productLocal:any){
    this.items$.subscribe(
      value=>
      {
        productLocal=value.find(item=>product.id==item.id)
        if(productLocal===undefined){
          this.addToCart(product)
        }else{
          productLocal.qte++
          this.saveEtat()
        }
      }
      )
  }




  removeItemFromCart(product:any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.splice(product,1);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
    this.saveCart();
  }
 


  getItems() {
    return this.items;
  } 

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")||'[]') ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  clearCart(items: any) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(item:IBurger | IMenu) {
    const index = this.items.findIndex((o:any) => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item:any): boolean {
    return this.items.findIndex((o:any) => o.id === item.id) > -1;
  }

  prixTotal(product:IBurger| IMenu){
    this.total+= product.prix
  }


  getTotal(){
    return this.total
  }

  tab(){
    this.items$.subscribe(value=>
      this.tabPanier=value
      )
      return this.tabPanier
  }

  saveEtat(){
    return  localStorage.setItem('panier', JSON.stringify(this.tab()));
  }


  updateTotal(){
    let sum=0
    this.items$.subscribe(
      ((value)=>{
        value.forEach((item:any)=>{
          sum+=item.prix*item.qte
        })
       
      })
    )
    this.saveEtat()
    return sum
   }


   update(product:any,quantite:number){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach(el =>{
          if(el.id ==product.id){
            product.qte=quantite          
             localStorage.setItem('products', JSON.stringify(products));
            }
        })
      }),
    ).subscribe();
    this.saveEtat()
   }


  
}


