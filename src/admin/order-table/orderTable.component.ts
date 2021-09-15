import { Observable } from 'rxjs';
// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
import { repeat } from 'rxjs/operators';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';
import { Router } from '@angular/router';

@Component({
  templateUrl: './orderTable.component.html',
  styleUrls: ['./orderTable.component.css'],
})
export class OrderTableComponent implements OnInit {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  constructor(private repository: OrderRepository, private router: Router) {}

  get pageCount(): any {
    return Math.ceil(this.repository.getOrders().length / this.productsPerPage);
  }
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  includeShipped = true;
  orders: any = [];

  public productsPerPage = 10;
  public selectedPage = 1;
  public selectedCategory = null;

  displayedColumns: string[] = [
    'OrderId',
    'Name',
    'Address',
    'City',
    'State',
    'Zip',
    'Total',
    'Items',
    'Shipped',
    'Date',
    'Action',
  ];

  public currentCompany:any;

  ngOnInit() {
    this.orders = this.repository.loadOrders();
    this.repository.getOrders().length;
  }

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /******************* Orders *************************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  getOrders(): Order[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getOrders()
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
    this.router.navigate(['admin/main/orders']);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  public selectCompany(event: any, item: any) {
    this.currentCompany = item.id;
  }

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /******************* Page handlers ******************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
}
