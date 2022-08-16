import { Catalogue } from './Produit';
import { BehaviorSubject, Observable } from 'rxjs';
import { PanierService } from './../panier/panier.service';
import { CatalogueService } from './catalogue.service';
import { Component, OnInit } from '@angular/core';
import { IMenu } from './Produit';
import { DomSanitizer } from '@angular/platform-browser';
import { IBurger } from './Burger';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private listproducts:CatalogueService ,private panierService:PanierService, private sanitizer: DomSanitizer) { }

  public menus: IMenu[]=[]
  public burgers: IBurger[]=[]
  public catalogue:any[] =[]
  searchText!:string
  productLocal:any
  ngOnInit(): void {
    const observable:Observable<Catalogue> = this.listproducts.getCatalogueObs();
    observable.subscribe(catalogue=>{
      console.log(catalogue);
      this.burgers = catalogue.burgers;
      this.menus = catalogue.menus;
    })
  }
  
  transformAll(params:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

  addToCart(product: IBurger| IMenu) {
    this.panierService.addToCart(product);
    this.panierService.prixTotal(product)
   
  }
  checkItem(product:any) {
    this.panierService.checkItem(product,this.productLocal);
  }

  onSelectProduct(product:IMenu|undefined){

  }


}