import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/list-products/catalogue.service';
import { Commande } from 'src/app/list-products/Produit';

@Component({
  selector: 'app-unecommande',
  templateUrl: './unecommande.component.html',
  styleUrls: ['./unecommande.component.css']
})
export class UnecommandeComponent implements OnInit {
  comTab: any;
  id: any;
  postId: any;

  constructor(private catalogueService:CatalogueService,private http:HttpClient) { }
  @Input()ligne!:Commande

  date!: string;
  searchDate!:any
  ladate: any;
  valider:any=true
  annuler:any=false

  ngOnInit(): void {    

    const observable:Observable<any> = this.catalogueService.getCommandes();
    observable.subscribe(data=>{
      this.comTab = data;
     // console.log( this.comTab);
    })

    this.date = new Date().toISOString().slice(0, 10);
  }

    getDate(unedate:any){
    this.ladate=unedate.value
    //console.log(this.ladate)
  }

  getButton(valider:any,annuler:any){
    //console.log(valider)
    this.valider=false
    this.annuler=true
  }

  getButton1(valider:any,annuler:any){
    //this.valider=true
    this.annuler=false
    console.log(valider)
  }
  getStatus(obj:any){
    //console.log(obj)
    this.id=obj
    this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+this.id,
    { 
      "isEtat": true
    }).subscribe(data => {
       this.postId = data.id;
     })

     setTimeout(function () { location.reload(); }, 5000);
  }

}
