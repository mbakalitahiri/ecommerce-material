import { Cart, CartLine } from './../../model/cart.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  cart = new Cart();
  public itemCount = 0;
  public cartPrice = 0;

  dataSource = new BehaviorSubject<any>(null);
  dataSource$ = this.dataSource.asObservable();

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  constructor(cart: Cart) {
    this.cart = new Cart();
  }

  updatedDataSelection(p: Product) {
    this.cart.addLine(p);
    this.dataSource.next(this.cart);
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.cart.lines.find(
      (line) => line.product.productCode == product.productCode
    );

    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  public recalculate() {
    this.cart.itemCount = 0;
    this.cart.cartPrice = 0;
    this.cart.lines.forEach((l) => {
      this.cart.itemCount += l.quantity;
      this.cart.cartPrice += l.quantity * l.product.MSRP;
    });

    this.dataSource.next(this.cart);
  }

  removeLine(id: number) {
    this.cart.lines.splice(id, 1)
    this.recalculate()
    this.dataSource.next(this.cart)

  }
  clear() {
    this.cart.cartPrice = 0;
    this.cart.itemCount = 0;
    this.cart.lines.splice(0, this.cart.lines.length );
  }

  getCartDetaills() {
    this.cart.lines.forEach((line) => {
      console.log(line);
    });
    console.log(
      `ItemCount:  ${this.cart.itemCount} CartPrice: ${this.cart.cartPrice}`
    );
  }
}
