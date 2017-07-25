"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ModelDrivenFormComponent = (function () {
    function ModelDrivenFormComponent() {
        this.title = "Add Advertisement";
        this.options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }];
        this.productForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            category: new forms_1.FormControl(null, [forms_1.Validators.required]),
            price: new forms_1.FormControl(null, [forms_1.Validators.required]),
            description: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
        });
        this.productEvent = new core_1.EventEmitter();
    }
    ModelDrivenFormComponent.prototype.onSubmit = function () {
        this.productEvent.emit(this.productForm.value);
    };
    return ModelDrivenFormComponent;
}());
ModelDrivenFormComponent = __decorate([
    core_1.Component({
        selector: 'modelDrivenForm',
        templateUrl: "./modeldrivenform.html",
        outputs: ['productEvent']
    })
], ModelDrivenFormComponent);
exports.ModelDrivenFormComponent = ModelDrivenFormComponent;
//# sourceMappingURL=ModelDrivenFormComponent.js.map