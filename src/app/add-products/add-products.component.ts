// tslint:disable-next-line: max-line-length
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodProductsService } from '../services/good-products.service';

// tslint:disable-next-line: no-conflicting-life cycle
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
      // tslint:disable-next-line: max-line-length
      title: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]+$/), Validators.minLength(5), Validators.maxLength(20)]),
      description: new FormControl(''),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
      isAvailable: new FormControl('')
    });
  }
  onSubmit(formData) {
    console.log(this.myForm);
    if (this.myForm.valid) {
    this.newProductService.addNew(this.myForm.value).subscribe(response =>{
      console.log(response);
    });
    } else {
      alert('field data not inserted');
    }
    console.log(formData);
  }
}
