import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService/ProductService';

@Component({
  selector: 'my-home',
  template: `<templateForm></templateForm>
             <advertisementTable></advertisementTable>`,
  providers: [ProductService],

})
export class HomeComponent {
  constructor(productService: ProductService) {
  }
}
