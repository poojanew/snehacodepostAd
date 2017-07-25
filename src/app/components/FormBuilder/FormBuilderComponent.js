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
var forms_1 = require("@angular/forms");
var ProductService_1 = require("../../services/ProductService/ProductService");
var FormBuilderComponent = (function () {
    function FormBuilderComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = "Add Advertisement";
        this.options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }];
        this.productForm = this.formBuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            category: [null, [forms_1.Validators.required]],
            price: [null, [forms_1.Validators.required]],
            description: [null, [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    }
    FormBuilderComponent.prototype.onSubmit = function () {
        console.log(ProductService_1.ProductService);
    };
    return FormBuilderComponent;
}());
FormBuilderComponent = __decorate([
    core_1.Component({
        selector: 'formbuilderForm',
        templateUrl: "./formbuilder.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormBuilderComponent);
exports.FormBuilderComponent = FormBuilderComponent;
//# sourceMappingURL=FormBuilderComponent.js.map