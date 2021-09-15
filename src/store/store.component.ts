import { Router } from "@angular/router"
import { Component } from "@angular/core"
import { map } from "rxjs/operators"

import { Observable, empty, Subject, pipe } from "rxjs"
import { catchError } from "rxjs/operators"

/* Modal */
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { AlertModalService } from '../../shared/services/alert-modal.service';
import { ProductRepository } from "../model/product.repository"
import { Cart } from "../model/cart.model"
import { Product } from "../model/product.model"

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent {
  public selectedCategory:any
  public productsPerPage = 4
  public selectedPage = 1

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router // private alertService: AlertModalService, //
  ) {
   }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, this.productsPerPage)
  }
  get categories(): string[] {
    return this.repository.getCategories()
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory
  }
  changePage(newPage: number) {
    this.selectedPage = newPage
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize)
    this.changePage(1)
  }
  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    )
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product)
    this.showSussesfullMessage("success", "Product has been added to your cart")
  }

  toAdminLogin() {}

  showSussesfullMessage(btclass:any, message:any) {
    // this.alertService.handleEvent(btclass, message);
  }
}
