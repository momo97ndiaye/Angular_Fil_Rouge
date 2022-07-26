import { CatalogueService } from './catalogue.service';
import { Component, OnInit } from '@angular/core';
import { IMenu } from './Menu';
import { IBurger } from './Burger';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private listproducts:CatalogueService) { }

  public menus: IMenu[]=[]
  public burgers: IBurger[]=[]
  public catalogue:any[] =[]
  ngOnInit(): void {
    this.listproducts.getBurger().subscribe({ 
      next : (d:IBurger)=>{
          this.burgers.push(d);
      },
      error: (error)=> console.log(` erreur ${error}`),
      complete: ()=> console.log('complet 1')
    
  });

  this.listproducts.getMenu().subscribe({ 
    next : (item:IMenu)=>{
      this.menus.push(item);
    },
    error: (error)=> console.log(` erreur ${error}`),
    complete: ()=> console.log('complet 2')
  })

}
}