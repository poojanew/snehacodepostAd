"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProductService_1 = require("../../services/ProductService/ProductService");
var AdvertisementFormComponent = (function () {
    // public productEvent= new EventEmitter<Object>();
    //     addProduct(name:string,category:string,price:number,desc:string){
    //         let product={name:name,category:category,price:price,description:desc}
    //         this.productEvent.emit(product);
    //     }
    function AdvertisementFormComponent(productService) {
        this.productService = productService;
        this.title = "Add Advertisement";
        this.options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }];
    }
    AdvertisementFormComponent.prototype.addProduct = function (name, category, price, desc) {
        var prod = { name: name, category: category, price: price, description: desc };
        this.productService.addAdvertise(prod);
    };
    return AdvertisementFormComponent;
}());
AdvertisementFormComponent = __decorate([
    core_1.Component({
        selector: 'advertisementForm',
        templateUrl: "./advertisementform.html",
    }),
    __metadata("design:paramtypes", [ProductService_1.ProductService])
], AdvertisementFormComponent);
exports.AdvertisementFormComponent = AdvertisementFormComponent;
//# sourceMappingURL=AdvertisementFormComponent.js.map