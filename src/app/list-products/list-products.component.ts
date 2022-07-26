import { CatalogueService } from './catalogue.service';
import { Component, OnInit } from '@angular/core';
import { IMenu } from './Menu';
import { IBurger } from './Burger';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private listproducts:CatalogueService) { }

  public menus: IMenu[]=[]
  public burgers: IBurger[]=[]
  ngOnInit(): void {
    this.listproducts.getMenu().subscribe({ 
      next : (item:IBurger)=>{
        this.burgers.push(item);
      },
      error: (error)=> console.log(` erreur ${error}`),
      complete: ()=> console.log('complet')
    
  });
/*     this.subscribe1 = this.listproducts.getBurger().subscribe(console.log)
 */
  }

}
