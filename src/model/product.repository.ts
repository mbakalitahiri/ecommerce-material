import { Injectable } from "@angular/core";

import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

// import { StaticDataSource } from './static.datasource';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalService } from 'ngx-bootstrap/modal';
@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getProducts(category: string | null ): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }
  getProduct(id: string): any {
    return this.dataSource.getOProductById(id);
  }
  getCategories(): string[] {
    return this.categories;
  }
  saveProduct(product: Product) {
    console.log(product);
    if (product.productCode == null || product.productCode == null) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.productCode == product.productCode),
          1,
          product
        );
      });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.productCode === id),
        1
      );
    });
  }

  handleError() {
    alert("something terrible happened");
  }
}
