import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../list-products/catalogue.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  comTab: any;
  date!: string;
  searchDate!:any
  ladate: any;
  valider:any=true
  annuler:any=false
  constructor(private catalogueService:CatalogueService) { }

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