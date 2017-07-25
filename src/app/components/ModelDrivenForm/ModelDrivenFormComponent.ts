import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'modelDrivenForm',
    templateUrl: `./modeldrivenform.html`,
    outputs: ['productEvent']
})

export class ModelDrivenFormComponent {
    title = "Add Advertisement";
    options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }]
    productForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        category: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
    public productEvent = new EventEmitter<Object>();
    onSubmit() {
        this.productEvent.emit(this.productForm.value);
    }

}