import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  product: Array< Product > = [
    {
    name: 'Orchid vase',
    image: '../assets/im1.jfif',
    description: 'Beautiful Orchid Flower Vase',
    price: 250,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: 'Red & White Roses',
    image: '../assets/im2.jfif',
    description: 'Beautiful Red & White Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: 'Pink Roses',
    image: '../assets/im3.jfif',
    description: 'Beautiful Pink Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/artificial-flower/g/n/t/ysk021117-ysk-creation-original-imafjxbgg2u6gfwv.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: ' Roses',
    image: '../assets/im4.jpg',
    description: 'Beautiful Pink Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: false
  },
  {
    name: 'Orchid vase',
    image: '../assets/im1.jfif',
    description: 'Beautiful Orchid Flower Vase',
    price: 250,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: false
  },
  {
    name: 'Red & White Roses',
    image: '../assets/im2.jfif',
    description: 'Beautiful Red & White Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: 'Orchid vase',
    image: '../assets/im1.jfif',
    description: 'Beautiful Orchid Flower Vase',
    price: 250,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: 'Red & White Roses',
    image: '../assets/im2.jfif',
    description: 'Beautiful Red & White Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: false
  },
  {
    name: 'Pink Roses',
    image: '../assets/im3.jfif',
    description: 'Beautiful Pink Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/artificial-flower/g/n/t/ysk021117-ysk-creation-original-imafjxbgg2u6gfwv.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: ' Roses',
    image: '../assets/im4.jpg',
    description: 'Beautiful Pink Roses',
    price: 299,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: true
  },
  {
    name: 'Orchid vase',
    image: '../assets/im1.jfif',
    description: 'Beautiful Orchid Flower Vase',
    price: 250,
    // tslint:disable-next-line: max-line-length
    imageAlt: `https://rukminim1.flixcart.com/image/416/416/jppsqkw0/artificial-flower/f/f/8/just-flowers-artificial-natural-looking-pink-roses-hand-bouquet-original-imafbuyzthqtcrds.jpeg?q=70`,
    isAvailable: false
  }
  
  ];

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
  }

}
// tslint:disable-next-line: no-unused-expression

