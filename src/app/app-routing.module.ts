import { ProductsListComponent } from '../store/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from '../store/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: 'store',
    loadChildren: () =>
      import('../store/store.module').then((m) => m.StoreModule),
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: 'products', component: ProductsListComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../store/store.module').then((m) => m.StoreModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
