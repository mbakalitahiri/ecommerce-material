/* tslint:disable:quotemark */
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";


import { ProductRepository } from "../../model/product.repository";
import { Product } from "../../model/product.model";
import { Cart } from "../../model/cart.model";

import { CartService} from "../../shared/services/cart.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
})
export class ProductsListComponent implements OnInit {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  public selectedCategory:any ;
  public productsPerPage = 8;
  public selectedPage = 1;

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /******************** cart **************************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  addProductToCart(product: Product) {
    this.cartService.updatedDataSelection(product);
  }

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /****************** products ************************/
  /****************************************************/
  /****************************************************/
  /****************************************************/

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, this.productsPerPage);
  }

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /****************** categories **********************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /******************** pages *************************/
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
  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }

  showSussesfullMessage(btclass:any, message:any) {
    // this.alertService.handleEvent(btclass, message);
  }
}
