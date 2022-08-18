import { CatalogueService } from 'src/app/list-products/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listelivraisons',
  templateUrl: './listelivraisons.component.html',
  styleUrls: ['./listelivraisons.component.css']
})
export class ListelivraisonsComponent implements OnInit {
  tabLivraisons: any;

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {
    const obs:Observable<any> = this.catalogueService.getLivraisons()
    obs.subscribe(data=>{
      this.tabLivraisons = data
      console.log(this.tabLivraisons)
    })
  }

}
