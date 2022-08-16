import { Observable } from 'rxjs';
import { PanierService } from './panier/panier.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_TodoList';

  constructor(private panierService:PanierService){}

   items$?:Observable<any> = this.panierService.items$

}
