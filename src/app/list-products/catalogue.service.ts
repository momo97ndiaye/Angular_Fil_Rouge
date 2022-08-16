import {  IProduit, IFrite } from './Produit';
import { Catalogue } from './Produit';
import  { HttpClient} from '@angular/common/http';

import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:8000/api/catalogues";
  url2 = "http://127.0.0.1:8000/api/produits";
  urlfrite = "http://127.0.0.1:8000/api/frites";
  urlboisson = "http://127.0.0.1:8000/api/boissons";
 urlComClient="http://127.0.0.1:8000/api/clients/48/commandes"
 urlCommmandes="http://127.0.0.1:8000/api/commandes"
 urlComplement="http://127.0.0.1:8000/api/complements"
 urlZoneCommandes="http://127.0.0.1:8000/api/zones/2/commandes"


  getCatalogueObs():Observable<Catalogue>{
    return this.http.get<Catalogue>(this.url);
  }

  getComplementObs():Observable<any>{
    return this.http.get<any>(this.urlComplement);
  }

  getProductsObs():Observable<IProduit[]>{
    return this.http.get<IProduit[]>(this.url2);
  }

  getFrites():Observable<IFrite[]>{
    return this.http.get<IFrite[]>(this.urlfrite);
  }

  getBoissons():Observable<any[]>{
    return this.http.get<any[]>(this.urlboisson);
  }

  getCommandesClient():Observable<any[]>{
    return this.http.get<any[]>(this.urlComClient);
  }

  getCommandes():Observable<any[]>{
    return this.http.get<any[]>(this.urlCommmandes);
  }

  getZoneCommandes(id:any):Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/zones/'+id+'/commandes');
  }

getOnProducts(id:string,products:IProduit[]):IProduit{
  const product= products.find((product)=>{
    return product.id.toString() === id;
  })
  if (!product) {
    throw new Error(`Could not find product`);
  }else{
    return product
  }
}

getOnFrites(id:string,products:IProduit[]):IProduit{
  const product= products.find((product)=>{
    return product.id.toString() === id;
  })
  if (!product) {
    throw new Error(`Could not find product`);
  }else{
    return product
  }
} 

getOnBoissons(id:string,products:any[]):any{
  const product= products.find((product)=>{
    return product.id.toString() === id;
  })
  if (!product) {
    throw new Error(`Could not find product`);
  }else{
    return product
  }
} 

getOnCommandeClient(){
  
}

updateResponse( input: number): Observable<any> {
  return this.http.patch<any>(`http://127.0.0.1:8000/api/commandes/${input}`,
  { 
    "isEtat": true
  });

  
}

}
