import { Component } from '@angular/core';
import { ProductService } from './services/ProductService/ProductService';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [ProductService],

})
export class AppComponent {
  constructor(productService: ProductService) {
  }
}
