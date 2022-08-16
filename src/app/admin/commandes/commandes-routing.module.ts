import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneComponent } from '../zone/zone.component';

const routes:Routes=[
      { path: 'zone', component: ZoneComponent},
      { path: ':id', component: ZoneComponent},
      { path: '', component: ZoneComponent},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CommandesRoutingModule { }
  