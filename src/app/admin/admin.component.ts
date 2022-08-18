import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../list-products/catalogue.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  comTab!: any;
  date!: string;
  searchDate!:any
  ladate: any;
  valider:any=true
  annuler:any=false
  ligne!:any
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {
    
    const observable:Observable<any> = this.catalogueService.getCommandes();
    observable.subscribe(data=>{
      this.comTab = data;
      console.log(this.comTab);
    })

    this.date = new Date().toISOString().slice(0, 10);
  }

  getDate(unedate:any){
    this.ladate=unedate.value
    console.log(this.ladate)
  }


 
}
