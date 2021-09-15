import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable()
export class Cart {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find(
      (line) => line.product.productCode == product.productCode
    );
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    console.log(product, quantity);
    let line = this.lines.find(
      (line) => line.product.productCode == product.productCode
    );
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  /* Borramos por id del producto */
  removeLine(id: number) {
    this.lines = this.lines.filter((elemento:any) => {
      if (elemento.product.productCode !== id) {
        return elemento;
      }
    });

    this.recalculate();
  }
  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.product.MSRP;
    });
  }
}
export class CartLine {
  constructor(public product: Product, public quantity: number) {}
  get lineTotal() {
    return this.quantity * this.product.MSRP;
  }
}
