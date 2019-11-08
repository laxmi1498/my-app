import { Component, OnInit } from '@angular/core';
import { GoodProductsService } from '../services/good-products.service';
import { isNgTemplate } from '@angular/compiler';

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
  }

}
// tslint:disable-next-line: no-unused-expression

