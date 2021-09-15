import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { ConnectionService } from '../../shared/services/connection.service';
import { CartLine, Cart } from '../../model/cart.model';
import { tap, map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cart-detaills',
  templateUrl: './cartDetail.component.html',
})
export class CartDetaillComponent implements OnInit {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  displayedColumns: string[] = [
    'productCode',
    'productName',
    'Price unit',
    'quantity',
    'subtotal',
    'remove',
  ];
  datos: any;
  connected = true;

  datasource = this.carSvc.dataSource$;

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  ngOnInit() {

  }

  constructor(
    private connection: ConnectionService,
    public carSvc: CartService
  ) {
    // this.connected = this.connection.connected;
    // connection.Changes.subscribe((state) => (this.connected = state));
  }

  updateQuantity(linea: any, event:any) {
    let updateCantidad = event.target.value;
     this.carSvc.updateQuantity(linea, updateCantidad);
     this.carSvc.getCartDetaills();
  }

  removeLine(element: CartLine) {

    const idProducto = element.product.productCode;

    this.carSvc.cart.removeLine( idProducto);

  }
  //
}
