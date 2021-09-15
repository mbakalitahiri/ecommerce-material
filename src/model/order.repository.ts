import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {
    this.loadOrders();
  }
  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => (this.orders = orders));
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrdersDetaills(id:any): any {
    return this.dataSource.getOrderById(id);
  }
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        1,
        order
      );
    });
  }
  deleteOrder(id: number) {
    alert(id);
    this.dataSource.deleteOrder(id).subscribe();
    // this.dataSource.deleteOrder(id).subscribe((order) => {
    //   console.log(order);
    // });
  }
}
