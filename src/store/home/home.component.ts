import { Component, OnInit } from "@angular/core";
import { CartService } from "../../shared/services/cart.service";
import { ProductRepository } from '../../model/product.repository';
import { Cart } from '../../model/cart.model';
import { Router } from '@angular/router';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  public selectedCategory:string =  "clothes";
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
}
