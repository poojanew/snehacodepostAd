import { Component } from '@angular/core';
import { ProductService } from '../../services/ProductService/ProductService';

@Component({
  selector: 'my-edit',
  templateUrl: `./EditComponent.html`,
  providers: [ProductService],

})
export class EditComponent {
  constructor(productService: ProductService) {
      
  }
}
