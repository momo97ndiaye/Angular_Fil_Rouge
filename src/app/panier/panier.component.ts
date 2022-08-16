import { HttpClient } from '@angular/common/http';
import { CatalogueService } from './../list-products/catalogue.service';
import { IBurger, IMenu, IProduit, IFrite, IBoisson, Boisson, Complement } from './../list-products/Produit';
import { Component, OnInit ,ViewChildren,QueryList,ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from './panier.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  postId: any;
  tabZone: any=[];
  tabFrites: IProduit[]=[];
  tabBoissons: Complement[]=[];
  tabBois: any=[];
  options: boolean=false;
  value!: boolean
  block!: boolean;
  zone!: any
  inputId!: any

  constructor(private panierService:PanierService,private sanitizer: DomSanitizer,private listproducts:CatalogueService,private http:HttpClient){}

  ngOnInit(): void {


    const observable:Observable<IProduit> = this.panierService.getAllProductsObs()
    observable.subscribe(products=>{
      console.log(products);

      const observable2:Observable<any> = this.panierService.getAllZoneObs();
      observable2.subscribe(zone=>{
        this.tabZone = zone;
        console.log(this.tabZone);
      })

      const complement:Observable<any> = this.listproducts.getComplementObs()
      complement.subscribe(data=>{
        this.tabFrites = data.frites;
        this.tabBoissons = data.boissons;
        this.tabFrites.forEach(el=>{
          console.log(el)
        });
        console.log(this.tabBoissons);
        this.tabBoissons.forEach(el=>{ 
          //this.tabBois=el
          console.log(el)
        })
      })

   
    })

    this.panierService.loadCart();
    this.items = this.panierService.getItems();
    this.updateTotal()
    this.items$.subscribe(
      ((value)=>this.items2 = value)
    )

  }



  showInputValue(input:any){
    this.inputId=+input.id
    console.log(this.inputId)
  }
  showPlace(){
    this.options=true
  }
  showLivrer(){
  this.value=true
  this.options=false
  }
  blocker(){
   this.block=true
  }

  currencyPipe: any;

  sum!:number

items=[]
ligneCommandes:any[]=[]
   items2!: IBurger[]|IMenu[];

   transformAll(params:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

   get total() {
    return this.items.reduce(
      (sum, x:any) => ({
        qtetotal: 1,
        prix: sum.prix + x.qtetotal * x.prix
      }),
      { qtetotal: 1, prix: 0 }
    ).prix;
  }

  addToCart(item:any) {
    if (!this.panierService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.panierService.addToCart(item); //add items in cart
      this.items = [...this.panierService.getItems()];
    }
  }


  //----- remove specific item
  removeFromCart(item:IBurger| IMenu) {
    this.panierService.removeItem(item);
    this.items = this.panierService.getItems();
  }

  //----- clear cart item
  clearCart(items: any) {
    // this.items.forEach((item, index) => this.panierService.removeItem(index));
    this.panierService.clearCart(items);
    this.items = [...this.panierService.getItems()];
  }

  //----- add item to cart

  removeItemFromCart(item: any){
    return this.panierService.removeItemFromCart(item);
  }

  items$:Observable<IBurger[]|IMenu[]> = this.panierService.items$
  itemsProd$:Observable<IProduit[]> = this.panierService.itemsProd$

 
  productLocal:any

  checkItem(product:any) {
    this.panierService.checkItem(product,this.productLocal);
  }



  
  updateTotal(){
    this.sum= this.panierService.updateTotal()
    return this.sum
  }

  update(product:any,quantite:any){
    return this.panierService.update(product,quantite)
  }

  commande(){
    this.panierService.tab().forEach(el=>{
    console.log(el.id,+el.qte)
    this.ligneCommandes.push(
      {      
      "produit": "/api/produits/"+el.id,
      "quantite": +el.qte
      }
    )
    })
    console.log(this.ligneCommandes)
    return this.ligneCommandes
  }

  sendRequest(){
    console.log(this.ligneCommandes)
    this.http.post<any>('http://127.0.0.1:8000/api/commandes',
     { 
      "Produits": this.ligneCommandes,
      "client":"/api/clients/48",
      "zone":"/api/zones/"+this.inputId,
      "prixTotal": this.sum
     }).subscribe(data => {
        this.postId = data.id;
      })
      console.log(this.http)
      this.panierService.items = []
      localStorage.removeItem('products')
  }

}
