import { AdminModule } from './admin/admin.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './list-products/product-detail/product-detail.component';
import { PanierComponent } from './panier/panier.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductDetailComponent,
    PanierComponent,
    ListeCommandesComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgModule,
    AdminModule,
    RouterModule.forRoot([
    { path:'catalogue',component:ListProductsComponent},
    { path:'panier',component:PanierComponent},
    { path:'commandes',component:ListeCommandesComponent},
    { path:'admin',component:AdminComponent},
    { path:'products/:id',component:ProductDetailComponent},
    { path:'products',component:ListProductsComponent},
    { path:'**',redirectTo:'catalogue',pathMatch:'full'},
    { path:'',redirectTo:'catalogue',pathMatch:'full'},
    ]),
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
