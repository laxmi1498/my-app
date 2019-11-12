import { Component, OnInit } from '@angular/core';
import { GoodProductsService } from '../services/good-products.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
product: any;
  constructor(private pro: GoodProductsService) {
  }

getProducts(): void {
  // tslint:disable-next-line: deprecation
  this.pro.getProducts().subscribe(response => {
    console.log(response);
    this.product = response;
  }
      ); // RXJS SUBSCRIBE 
}

  ngOnInit() {
    this.getProducts();
  }

}
// tslint:disable-next-line: no-unused-expression

