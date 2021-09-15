import { NgModule } from '@angular/core';
import { Router, Route, RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { StoreComponent } from './store.component';
import { ProductDetaillsComponent } from './product-detaills/product-detaills.component';
import { HomeComponent } from './home/home.component';
import { CartDetaillComponent } from './cartDetail/cartDetail.component';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: StoreComponent },
  { path: 'cart', component: CartDetaillComponent },
  { path: 'store/:id', component: ProductPageComponent },
  { path: 'product/detaills/:id', component: ProductDetaillsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class StoreRoutingmodule {}
