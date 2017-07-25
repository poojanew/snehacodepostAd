import { Component, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import  { ProductService } from '../../services/ProductService/ProductService';

@Component({
    selector: 'formbuilderForm',
    templateUrl: `./formbuilder.html`,
})

export class FormBuilderComponent {
    title = "Add Advertisement";
    options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }]
    productForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.productForm = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(6)]],
            category: [null, [Validators.required]],
            price: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        
        console.log(ProductService);
    }

}