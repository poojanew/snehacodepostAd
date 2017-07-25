import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService {

    constructor(private _http:Http){}
    products: Array<any>=[];
    getAllAdvertises() {
        return this.products;
    }
    addAdvertise(item:Object){
        this.products.push(item);
        console.log(this.products);
    }
    deleteAdvertise(index:any){
        if (index !== -1) {
        this.products.splice(index, 1);
        }
    }

    postAd(item:any){
        let url = "http://192.168.3.144:9000/postAd"; 
         let headers = new Headers();
        headers.append('auth-token', '5976ea511c0edf75e32798d4');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {title: item.title, name:item.price, category: item.category, description:item.description};
        console.log(jsonReq);
        let obj =this._http.post(url, jsonReq, options).map((response: Response)=>response.json());
        obj.subscribe((data)=>console.log(data));

    }


}