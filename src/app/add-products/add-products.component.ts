// tslint:disable-next-line: max-line-length
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodProductsService } from '../services/good-products.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private newProductService: GoodProductsService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/[0-9,a-z]/)]),
      description: new FormControl('', Validators.maxLength(50)),
      price: new FormControl(''),
      image: new FormControl(''),
      imageAlt: new FormControl(''),
      isAvailable: new FormControl('')
    });
  }
  onSubmit(formdata) {
    this.newProductService.addNew(this.myForm.value);
    console.log(this.myForm.value);
  }
}
