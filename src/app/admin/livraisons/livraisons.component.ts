import { PanierService } from 'src/app/panier/panier.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/list-products/catalogue.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  id: any;
  showModal!:any
  block: boolean=false;
  tabCom: any[]=[];
  b: boolean=false;
  idLiv: any;
  val: boolean=false;
  postId: any;
  constructor(private catalogueService:CatalogueService,private panierService:PanierService,private http:HttpClient) { }

  tabZone: any=[];
  tabLiv: any=[];
  searchText!:any
  ngOnInit(): void {
   
    const obs:Observable<any> = this.panierService.getAllZoneObs()
    obs.subscribe(data=>{
      this.tabZone = data
      console.log(this.tabZone)
    })
  }

  validerLivraison(){
    this.val=true
  }
  getValue(nom:any){
    console.log(nom)
    this.searchText=nom
  }

  getCommande(com:any){
  this.tabCom.push(com)
  console.log(this.tabCom)
  }

  showValider(){
    this.b=true
  }

  
  showValiderLiv(){
    this.val=true
    this.http.post<any>('http://127.0.0.1:8000/api/livraisons',
    {
      "livreur": "/api/users/"+this.idLiv,
      "commandes":[
                  "/api/commandes/23"
      ]
    }).subscribe(data => {
      this.postId = data.id;
    })

  }
  

  blocker(){
    this.block=true
   }

  getIdZone(zone:any){
    console.log(zone.value)

  }
   getLivreurs(){
    const liv:Observable<any> = this.panierService.getAllLivreursObs();
    liv.subscribe(data=>{
      this.tabLiv= data
      console.log(this.tabLiv)
    })
   }

   getLivreur(livreur:any){
    console.log(livreur.id)
    this.idLiv=livreur.id
   }

  getCommandesByIdZone(){
    const observable:Observable<any> = this.catalogueService.getZoneCommandes(this.id);
    observable.subscribe(data=>{
      console.log(data)
    })
  }

}
