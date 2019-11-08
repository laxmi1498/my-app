// tslint:disable-next-line: max-line-length
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements  OnInit, OnChanges , DoCheck , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
      }
  ngDoCheck() {
    console.log('ngDoCheck');

  }
  ngAfterContentInit() {
    console.log('AfterContentInit');

  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked');

  }
  ngAfterViewInit() {
      console.log('AfterviewInit');

  }
  ngAfterViewChecked() {
    console.log('Afterviewchecked');
}
ngOnDestroy(){
  console.log('ngOnDestroy');
}

}
