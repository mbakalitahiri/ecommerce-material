import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductRepository } from "../../model/product.repository"
import { CartService } from "../../shared/services/cart.service"

@Component({
  selector: 'app-page-detaills',
  templateUrl: './product-detaills.component.html',
  styleUrls: ['./product-detaills.component.scss'],
})
export class ProductDetaillsComponent implements OnInit {
  private id!: number;
  public product$ = new BehaviorSubject<any>(null);
  @Output() productAdded = new EventEmitter<Product>();
  constructor(
    private activatedRoute: ActivatedRoute,
    private productRepository: ProductRepository,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((par: any) => {
      this.id = par.params.id;
       this.product$ = this.productRepository.getProduct(this.id)
    });
  }

  addProductToCart(product: Product) {
    this.cartService.updatedDataSelection(product);
  }

  updateQuantity(linea: any, event: any) {
    let updateCantidad = event.target.value;
    this.cartService.updateQuantity(linea, updateCantidad);
    this.cartService.getCartDetaills();
  }
}
