import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"

import { AuthService } from "../shared/services/auth.service"
import { ConnectionService } from "../shared/services/connection.service"
import { Cart } from "./cart.model"
import { Order } from "./order.model"
import { OrderRepository } from "./order.repository"
import { ProductRepository } from "./product.repository"
import { RestDataSource } from "./rest.datasource"
import { StaticDataSource } from "./static.datasource"

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
    ConnectionService,
  ],
})
export class ModelModule {}
