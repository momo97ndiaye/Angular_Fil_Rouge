import { IBurger } from './../Burger';
import { IMenu, IProduit, IFrite, ITaille, Complement } from './../Produit';
import { CatalogueService } from './../catalogue.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PanierService } from 'src/app/panier/panier.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  menu!:IMenu
  burger!:IBurger
  product!:IProduit
  frite!:IProduit
  menus!:IMenu[]
  products!:IProduit[]
  frites!:IProduit[]
  burgers!:IBurger[]
  param!:string
  param2!:string
  id!:any
  ObjFrite!:any
  taille!:any[]|undefined;
  nomBoisson:any=[]
  param3!: any;
  bois!: any[];
  b!: IProduit;
  tabFrites: IProduit[]=[];
  tabBoissons: Complement[]=[];

  productLocal:any
  tailleBoissons: import("/home/ndiaye/Angular_TodoList/src/app/list-products/Produit").ITailleBoissons[] | undefined;
  quantiteBoissons!: number;
  cpt: number=0;
  test: any;
  constructor(
    private route:ActivatedRoute,
    private catalogueService:CatalogueService,
    private sanitizer: DomSanitizer,
    private panierService:PanierService
  ) { }

  ngOnInit(): void {



    const complement:Observable<any> = this.catalogueService.getComplementObs()
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

    this.catalogueService.getFrites().subscribe(data=>{
      console.log(data);
      this.frites = data
    })


    this.catalogueService.getBoissons().subscribe(data=>{
      console.log(data);
      this.bois= data
    })


    this.id = this.route.snapshot.paramMap.get('id');
    this.param = this.id.toString();
    this.catalogueService.getProductsObs().subscribe(data=>{
    this.products = data
      //console.log(this.products);
      this.product = this.catalogueService.getOnProducts(this.param,this.products)
     console.log(this.product);
     this.product.boissons?.forEach(el=>{
        this.quantiteBoissons= el.quantite;
        this.tailleBoissons =el.taille?.tailleBoissons
        console.log(this.tailleBoissons);
        console.log(el.taille?.tailleBoissons?.forEach(el=>{
          this.param3=el.boisson?.id.toString()
          this.nomBoisson=(el.boisson?.nom)
          //console.log(this.bois)
          this.b=this.catalogueService.getOnBoissons(this.param3,this.bois)
      }))
    });

      console.log(this.b)
      
      this.product.frites?.forEach(el=>{
        //console.log(el.frite)
        this.ObjFrite = el.frite
      })

      

      //console.log(this.ObjFrite.id)
      this.param2 = this.ObjFrite.id.toString()
      //console.log(this.param2)
      this.frite = this.catalogueService.getOnFrites(this.param2,this.frites)
      this.ObjFrite.image= this.frite.image
      //console.log(this.ObjFrite)
    })


   
  }
  transformAll(params:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

  
  quantityPlus(product:any){
   if(product.value>0){
    this.cpt++
    console.log(this.cpt)
   }
  }

  quantityMoins(product:any){
    if(+(product.value)>=0){
      this.cpt--
      console.log(this.cpt)
  }
}

  checkItem(product:any) {
    this.panierService.checkItem(product,this.productLocal);
  }
}
