import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnecommandeComponent } from './unecommande/unecommande.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ZoneComponent } from './zone/zone.component';
import { MenuComponent } from './produits/menu/menu.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RowComponent } from './unecommande/row/row.component';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    ZoneComponent,
    MenuComponent,
    LivreurComponent,
    LivraisonsComponent,
    RowComponent,
    UnecommandeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
