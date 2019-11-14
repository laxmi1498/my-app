import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { GoodProductsService } from '../services/good-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})


export class DescriptionComponent implements OnInit {
  @Input() item: Product;
  // @Input() out: output;

  count= 0;
  // tslint:disable-next-line: new-parens
  @Output() isDeleted = new EventEmitter;
  // tslint:disable-next-line: new-parens
  @Output() incCount =  new EventEmitter;
  id: any;
  myForm: FormGroup;
  constructor(private newProductService: GoodProductsService, private productComp: ProductsComponent) { }
  ngOnInit() {
  }
  delete(id) {
      this.newProductService.deleteProduct(id).subscribe(data => {
        // tslint:disable-next-line: deprecation
        this.isDeleted.emit('deleted');
        alert(' deleted');
      });
  }
  add() {
      // this.productComp.incCount.emit('');
      this.count++;
      console.log(this.count);
  }
}
