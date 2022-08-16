import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ZoneComponent } from './zone/zone.component';
import { MenuComponent } from './produits/menu/menu.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    ZoneComponent,
    MenuComponent,
    LivreurComponent,
    LivraisonsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
