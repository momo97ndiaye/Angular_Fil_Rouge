import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './list-products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path:'catalogue',component:ListProductsComponent},
    { path:'',redirectTo:'catalogue',pathMatch:'full'},
    { path:'products/:id',component:ProductDetailComponent},
    { path:'products',component:ListProductsComponent},
    { path:'**',redirectTo:'catalogue',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
