import { Component } from "@angular/core";
import { Cart } from "../../model/cart.model";
import { CartService } from "../services/cart.service";
@Component({
  selector: "cart-summary",
  templateUrl: "cartSummary.component.html",
  styleUrls: ["./cart-sumarry.css"],
})
export class CartSummaryComponent {
  data = this.carSvc.dataSource$;
  constructor(public cart: Cart, private carSvc: CartService) {}
}
