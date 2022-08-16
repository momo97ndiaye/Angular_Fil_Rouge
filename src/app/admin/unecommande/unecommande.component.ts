import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/list-products/catalogue.service';

@Component({
  selector: 'app-unecommande',
  templateUrl: './unecommande.component.html',
  styleUrls: ['./unecommande.component.css']
})
export class UnecommandeComponent implements OnInit {


  constructor(private catalogueService:CatalogueService) { }

  comTab: any;
  date!: string;
  searchDate!:any
  ladate: any;
  valider:any=true
  annuler:any=false

  ngOnInit(): void {

    const observable:Observable<any> = this.catalogueService.getCommandes();
    observable.subscribe(data=>{
      console.log(data);
      this.comTab = data;
    })

    this.date = new Date().toISOString().slice(0, 10);
  }

  getDate(unedate:any){
    this.ladate=unedate.value
    console.log(this.ladate)
  }

  getButton(valider:any,annuler:any){
    console.log(valider)
    this.valider=false
    this.annuler=true
  }

  getButton1(valider:any,annuler:any){
    this.valider=true
    this.annuler=false
    console.log(valider)
  }

}
