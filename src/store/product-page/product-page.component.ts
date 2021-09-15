import { ActivatedRoute, Router } from "@angular/router"
import { Cart } from "../../model/cart.model"
import { Component, Input, OnInit } from "@angular/core"
import { Product } from "../../model/product.model"
import { ProductRepository } from "../../model/product.repository"
import { CartService } from "../../shared/services/cart.service"

@Component({
  selector: "product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
  public id!: string
  @Input() product!: Product

  constructor(
    private pr: ProductRepository,
    public cart: Cart,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProductToCart(product: Product) {
    this.cartService.updatedDataSelection(product)
  }
  // showSussesfullMessage(btclass, message) {
  //   // this.alertService.handleEvent(btclass, message)
  // }

  // goToCheckOut() {
  //   if (this.cart.itemCount > 0) {
  //     this.router.navigate(["/checkout"])
  //   }
  // }
}
