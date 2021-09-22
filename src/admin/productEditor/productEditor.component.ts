import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
  templateUrl: './productEditor.component.html',
})
export class ProductEditorComponent implements OnInit {
  editing = false;
  id!: number;
  product!: Product;
  constructor(
    private repository: RestDataSource,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';


  }
  save(form: NgForm) {
    this.repository.updateProduct(this.product).subscribe((x) => {
            console.log(x)
          })
          console.log(this.product);
          this.router.navigateByUrl('/admin/main/products');
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((x) => {
      this.repository.getOProductById(x.id).subscribe((x) => {
        this.product = x
      })
    })
  }



}
