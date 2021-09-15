import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
  public id!: number;
  public name!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public country!: string;
  public shipped: boolean = false ;
  public d: Date = new Date();
  public cartPrice!: number;

  constructor(public cart: Cart) {}

  clear() {
    this.id! = 0 ;
    this.name = this.address = this.city = '';
    this.state = this.zip = this.country = '';
    this.shipped = false;
    this.cart.clear();
  }
}
