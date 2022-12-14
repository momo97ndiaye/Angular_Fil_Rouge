import { ListelivraisonsComponent } from './livraisons/listelivraisons/listelivraisons.component';
import { AdminComponent } from './admin.component';
import { ProduitsComponent } from './produits/produits.component';
import { MenuComponent } from './produits/menu/menu.component';
import { ZoneComponent } from './zone/zone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { UnecommandeComponent } from './unecommande/unecommande.component';

const routes: Routes = [
  { path: 'allcommandes',component: AdminComponent,
      children: [
        { path: 'zone', component: ZoneComponent},
        { path: ':id', component: ZoneComponent},
        { path: '', component: UnecommandeComponent},
      ] 
  },
  { path: 'livraisons', component: LivraisonsComponent,
      children:[
        { path: 'livreur', component:LivreurComponent,
            children:[
                { path: ':id', component:LivreurComponent}
            ]  
        },
        {
          path: ':id', component:LivraisonsComponent
        },
        { 
          path: 'liste/livraisons', component: ListelivraisonsComponent
        },

      ]
  },
  { path: 'produits', component: ProduitsComponent,
      children:[
        { path: 'new', component: MenuComponent },
        { path: '', component: ProduitsComponent }
      ]
  },
  { path: '', component: CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
