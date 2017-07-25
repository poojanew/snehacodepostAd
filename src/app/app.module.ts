import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AdvertisementFormComponent } from './components/AdvertisementForm/AdvertisementFormComponent';
import { TemplateFormComponent } from './components/TemplateForm/TemplateFormComponent';
import { ModelDrivenFormComponent } from './components/ModelDrivenForm/ModelDrivenFormComponent';
import { FormBuilderComponent } from './components/FormBuilder/FormBuilderComponent';
import { AdvertisementTableComponent } from './components/AdvertisementTable/AdvertisementTableComponent';
import { SearchPipe } from './components/SearchPipe/search.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from './services/ProductService/ProductService';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './components/HomeComponent';
import {EditComponent} from './components/EditAdvertisement/EditComponent';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot([ 
    {path: '', component: HomeComponent}, 
    {path: 'EditProduct', component: EditComponent} ])
 ],
  declarations: [ AppComponent,AdvertisementFormComponent,AdvertisementTableComponent,SearchPipe,
                TemplateFormComponent, ModelDrivenFormComponent, FormBuilderComponent,HomeComponent, EditComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})
export class AppModule { }
