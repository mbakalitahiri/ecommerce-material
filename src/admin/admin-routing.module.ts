/* tslint:disable:quotemark */
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { CartDetaillsComponent } from "./cart-details/cart-detaills.component";
import { OrderTableComponent } from "./order-table/orderTable.component";
import { ProductEditorComponent } from "./productEditor/productEditor.component";
import { ProductTableComponent } from "./productTable/productTable.component";
import { SearchOrdersComponent } from "./search-orders/search-orders.component";

const routing: Route[] = [
  { path: "", component: AuthComponent },
  { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: "main",
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      {
        path: "orders",
        component: OrderTableComponent,
        children: [{ path: "detaills/:id", component: CartDetaillsComponent }],
      },
      { path: "search", component: SearchOrdersComponent },
      { path: "**", redirectTo: "products" },
    ],
  },
  { path: "**", redirectTo: "auth" },
];
@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
