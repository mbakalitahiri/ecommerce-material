import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../../model/order.model";
import { OrderRepository } from "../../model/order.repository";
import { Cart } from "../../model/cart.model";
import { CartService } from "../../shared/services/cart.service";
import { Router } from "@angular/router";
@Component({
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  public lines!: number;
  constructor(
    public repository: OrderRepository,
    public order: Order,
    public cart: Cart,
    private cartSvc: CartService,
    private router: Router
  ) {}
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.order.cart.lines = this.cart.lines;
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.submitted = false;
        this.cartSvc.clear();
        this.cartSvc.recalculate()

        this.router.navigate(["/"]);
      });
    }
  }

  ngOnInit() {
    this.cartSvc.dataSource$.subscribe((d) => {
      if (typeof d !== "undefined") {
        this.order.cart.cartPrice = d.cartPrice;
        this.order.cart.itemCount = d.itemCount;
        this.cart.lines = d.lines;
      }
    });
  }
}
