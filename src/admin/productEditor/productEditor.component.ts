import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';

@Component({
  templateUrl: './productEditor.component.html',
})
export class ProductEditorComponent implements OnInit {
  editing = false;
  product!: Product;
  constructor(
    private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      this.product = repository.getProduct(activeRoute.snapshot.params.id);

     }
  }
  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    console.log(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.repository
       .getProduct(id)
       .subscribe((p:any) => (this.product = p[0] ));

  }
}
