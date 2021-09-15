import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';

@Component({
  templateUrl: './cart-detaills.component.html',
  selector: 'cart-detaills',
})
export class CartDetaillsComponent implements OnInit {
  data: any = [];
  id!: number;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private order: OrderRepository
  ) {}

  ngOnInit() {
    this.ar.paramMap.subscribe((params:any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.order.getOrdersDetaills(this.id).subscribe((data:any) => {
        this.data = data;
      });
    });
  }
}
