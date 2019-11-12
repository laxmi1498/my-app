// tslint:disable-next-line: max-line-length
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodProductsService } from '../services/good-products.service';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line: no-conflicting-life cycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  id: any;
  sub: any;
  id1: string;
  data: any;

  constructor(private newProductService: GoodProductsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      title: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]+$/), Validators.minLength(5), Validators.maxLength(20)]),
      description: new FormControl(''),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
      isAvailable: new FormControl('')
    });
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id){
        console.log(params);
        this.newProductService.filterProduct(this.id).subscribe(response => {
          this.data = response;
          this.myForm.patchValue({
            title: this.data.title,
            description: this.data.description,
            imageUrl: this.data.imageUrl,
            price: this.data.price,
            isAvailable: this.data.isAvailable
          });
          console.log(this.data.title);

        });

    }
  });
}
  onSubmit(formData) {
    // tslint:disable-next-line: deprecation
   // this.route.params.subscribe(params => {
      if (this.id) {
        this.newProductService.updateProduct(this.myForm.value, this.id).subscribe(response => {
          console.log(response);
        });

      } else {
        this.newProductService.addNew(this.myForm.value).subscribe(response => {
          console.log(response);
        });
      }
//});
}
}
