import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GoodProductsService {
  router: any;
  actionUrl: string = environment.baseUrl;

  constructor( private http: HttpClient)  { }

  // static data
//  private product: Array< Product > = [
//     {
//     title: 'Orchid vase',
//     imageUrl: '../assets/im1.jfif',
//     description: 'Beautiful Orchid Flower Vase',
//     price: 250,
//     isAvailable: true
//   },
//   {
//     title: 'Red & White Roses',
//     imageUrl: '../assets/im2.jfif',
//     description: 'Beautiful Red & White Roses',
//     price: 299,
//     isAvailable: true
//   },
//   { 
//     : 'Pink Roses',
//     image: '../assets/im3.jfif',
//     description: 'Beautiful Pink Roses',
//     price: 299,
//     // tslint:disable-next-line: max-line-length
//     imageAlt: `https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/artificial-flower/g/n/t/ysk021117-ysk-creation-original-imafjxbgg2u6gfwv.jpeg?q=70`,
//     isAvailable: true
//   },
//   {
//     name: ' Roses',
//     image: '../assets/im4.jpg',
//     description: 'Beautiful Pink Roses',
//     price: 299,
//     // tslint:disable-next-line: max-line-length
//     imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
//     isAvailable: false
//   },
//   {
//     name: 'Orchid vase',
//     image: '../assets/im1.jfif',
//     description: 'Beautiful Orchid Flower Vase',
//     price: 250,
//     // tslint:disable-next-line: max-line-length
//     imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
//     isAvailable: false
//   },
//   {
//     name: 'Red & White Roses',
//     image: '../assets/im2.jfif',
//     description: 'Beautiful Red & White Roses',
//     price: 299,
//     // tslint:disable-next-line: max-line-length
//     imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
//     isAvailable: true
//   },
//   
//   ];
  getProducts() {
    return this.http.get(this.actionUrl + '/product');
  }
  addNew(formData) {
    return this.http.post(this.actionUrl + '/product', formData);
  }
  filterProduct(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  updateProduct(formData, id){
    return this.http.put(this.actionUrl + '/product/' + id, formData);

  }
  deleteProduct(id){
    return this.http.delete(this.actionUrl + '/product/' + id);

  }
  // inc(id){
  //   return this.http.put(this.actionUrl + '/product/' + id);
  // }
}
