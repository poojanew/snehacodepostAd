import { Component } from '@angular/core';
import { ProductService } from '../../services/ProductService/ProductService';
import { Router } from '@angular/router';

@Component({
selector: 'advertisementTable',
templateUrl: `./advertisementtable.html`,
})

export class AdvertisementTableComponent{ 
    constructor(private productService: ProductService, private router: Router) {
    }
    displayAd(){
        return this.productService.getAllAdvertises();
    }
    deleteObject(index:any){
        return this.productService.deleteAdvertise(index);
    }  
     editObject(index:any){
        this.router.navigate(['/EditProduct']);
    }  
}
