import { Component, OnInit } from '@angular/core';
import { GoodProductsService } from '../services/good-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product = [];
  constructor(private pro: GoodProductsService) {
  }

getProducts(): void {
  this.product = this.pro.getProducts();
}

  ngOnInit() {
    this.getProducts();
    console.log(this.product.length);
  }

}
// tslint:disable-next-line: no-unused-expression

