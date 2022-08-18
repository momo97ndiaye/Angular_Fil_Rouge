import { Details, IProd } from './../list-products/Produit';
import { CatalogueService } from './../list-products/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  comClientTab: any=[];
  showModal!:any
  tabDetails!:Details[];
  etat!: boolean;
  inputId: any;
  postId: any;
  constructor(private catalogueService:CatalogueService,private http:HttpClient) { }

  ngOnInit(): void {
    const observable:Observable<any> = this.catalogueService.getCommandesClient();
    observable.subscribe(data=>{
      console.log(data);
      this.comClientTab = data;
    })
  }

  getProd(input:any){
    this.tabDetails=input.Produits
  }

  getStatus(input:any){
    this.etat=input.isEtat
    this.inputId= input.id
    console.log(this.etat);
    console.log(this.inputId);
  }

  cancelOrder(){
    this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+this.inputId,
    { 
      "isEtat": true
    }).subscribe(data => {
       this.postId = data.id;
     })

     setTimeout(function () { location.reload(); }, 5000);
  }



onUpdateResponse():void{
  this.catalogueService.updateResponse(this.inputId).subscribe(
    (response) => console.log(response),
    (error:any) => console.log(error),
    ()=> console.log("mise a jour")
  )
}
  
}
