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
var TemplateFormComponent = (function () {
    function TemplateFormComponent(productService) {
        this.productService = productService;
        //prodList:any = [];
        this.titlee = "Add Advertisement";
        this.options = [{ name: 'Furniture', value: 'Furniture' },
            { name: 'Cloths', value: 'Cloths' },
            { name: 'Mobile', value: 'Mobile' },
            { name: 'Real Estate', value: 'Real Estate' }];
    }
    TemplateFormComponent.prototype.onSubmit = function (title, category, price, description) {
        var obj = { title: title, category: category, price: price, description: description };
        //this.prodList.push(obj);
        this.productService.postAd(obj);
    };
    return TemplateFormComponent;
}());
TemplateFormComponent = __decorate([
    core_1.Component({
        selector: 'templateForm',
        templateUrl: "./templateform.html",
    }),
    __metadata("design:paramtypes", [ProductService_1.ProductService])
], TemplateFormComponent);
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=TemplateFormComponent.js.map