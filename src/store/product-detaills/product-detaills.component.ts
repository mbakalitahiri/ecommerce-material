import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Product } from "../../model/product.model"
import { ProductRepository } from "../../model/product.repository"
import { CartService } from "../../shared/services/cart.service"

@Component({
  selector: 'app-page-detaills',
  templateUrl: './product-detaills.component.html',
  styleUrls: ['./product-detaills.component.scss'],
})
export class ProductDetaillsComponent implements OnInit {
  private id!: number;
  public product!: Product;
  @Output() productAdded = new EventEmitter<Product>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private productRepository: ProductRepository,
    private cartService: CartService
  ) {
    this.activatedRoute.paramMap.subscribe((par: any) => {
      this.productRepository
        .getProduct(par.params.id)
        .subscribe((data: any) => {
          this.product = data[0];
        });
    });
  }

  ngOnInit(): void {}

  addProductToCart(product: Product) {
     this.cartService.updatedDataSelection(product);
  }

  updateQuantity(linea: any, event: any) {
    let updateCantidad = event.target.value;
    this.cartService.updateQuantity(linea, updateCantidad);
    this.cartService.getCartDetaills();
  }
}
