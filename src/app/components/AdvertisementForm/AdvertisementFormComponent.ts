import { Component, EventEmitter} from '@angular/core';
import { ProductService } from '../../services/ProductService/ProductService';

@Component({
selector: 'advertisementForm',
templateUrl: `./advertisementform.html`,
//outputs:['productEvent']
})

export class AdvertisementFormComponent{ 
    title="Add Advertisement";
    options=[{name:'Furniture',value:'furniture'},{name:'Hardware',value:'hardware'},{name:'Mobile',value:'mobile'}]
    // public productEvent= new EventEmitter<Object>();
    //     addProduct(name:string,category:string,price:number,desc:string){
    //         let product={name:name,category:category,price:price,description:desc}
    //         this.productEvent.emit(product);
    //     }
    constructor(private productService: ProductService) {
      }
     addProduct(name:string,category:string,price:number,desc:string){
             let prod={name:name,category:category,price:price,description:desc}
             this.productService.addAdvertise(prod);
  }  
}