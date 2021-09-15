import { Component } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';

@Component({
  templateUrl: './productTable.component.html',
})
export class ProductTableComponent {
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /*********** Declaracion de variables ***************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  public productsPerPage = 5;
  public selectedPage = 1;
  public selectedCategory!: any;

  displayedColumns: string[] = [
    'productCode',
    'productName',
    'category',
    'ProductDescription',
    'quantityInStock',
    'MSRP',
    'actions',
  ];

  /****************************************************/
  /****************************************************/
  /****************************************************/
  /* ********* Declaracion de metodos *****************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  /****************************************************/
  constructor(private repository: ProductRepository) {}
  getProducts(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, this.productsPerPage);
  }
  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

  // tslint:disable-next-line:typedef
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  // tslint:disable-next-line:typedef
  changePageSize(newSize: Event) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): any {
    return Math.ceil(
      this.repository.getProducts(null).length / this.productsPerPage
    );
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
  }
}
