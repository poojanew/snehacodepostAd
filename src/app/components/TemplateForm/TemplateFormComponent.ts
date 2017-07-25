import { Component, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/ProductService/ProductService';

@Component({
    selector: 'templateForm',
    templateUrl: `./templateform.html`,
})

export class TemplateFormComponent {
    //prodList:any = [];
   
    titlee = "Add Advertisement";
    options = [{ name: 'Furniture', value: 'Furniture' }, 
                { name: 'Cloths', value: 'Cloths' }, 
                { name: 'Mobile', value: 'Mobile' },
                { name: 'Real Estate', value: 'Real Estate' }];
    constructor(private productService: ProductService) {
    }
     title:any;
     category:any;
     price:any;
     description:any;
    onSubmit(title:any, category:any, price:any, description:any) {
        let obj ={title:title, category:category,price:price,description:description};
            //this.prodList.push(obj);
           
        this.productService.postAd(obj);
    }
}