/* Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CartDetaillsComponent } from './cart-details/cart-detaills.component';
import { OrderTableComponent } from './order-table/orderTable.component';
import { CounterAdminDirective } from './productEditor/counteradmin.directive';
import { ProductEditorComponent } from './productEditor/productEditor.component';
import { ProductTableComponent } from './productTable/productTable.component';
import { SearchOrdersComponent } from './search-orders/search-orders.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AdminComponent,
    AuthComponent,
    ProductTableComponent,
    ProductEditorComponent,
    CartDetaillsComponent,
    CounterAdminDirective,
    SearchOrdersComponent,
    OrderTableComponent,
  ],
  exports: [],
  providers: [AuthGuard],
})
export class AdminModule {}
