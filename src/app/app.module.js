"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var AdvertisementFormComponent_1 = require("./components/AdvertisementForm/AdvertisementFormComponent");
var TemplateFormComponent_1 = require("./components/TemplateForm/TemplateFormComponent");
var ModelDrivenFormComponent_1 = require("./components/ModelDrivenForm/ModelDrivenFormComponent");
var FormBuilderComponent_1 = require("./components/FormBuilder/FormBuilderComponent");
var AdvertisementTableComponent_1 = require("./components/AdvertisementTable/AdvertisementTableComponent");
var search_pipe_1 = require("./components/SearchPipe/search.pipe");
var forms_1 = require("@angular/forms");
var ProductService_1 = require("./services/ProductService/ProductService");
var router_1 = require("@angular/router");
var HomeComponent_1 = require("./components/HomeComponent");
var EditComponent_1 = require("./components/EditAdvertisement/EditComponent");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: '', component: HomeComponent_1.HomeComponent },
                { path: 'EditProduct', component: EditComponent_1.EditComponent }
            ])
        ],
        declarations: [app_component_1.AppComponent, AdvertisementFormComponent_1.AdvertisementFormComponent, AdvertisementTableComponent_1.AdvertisementTableComponent, search_pipe_1.SearchPipe,
            TemplateFormComponent_1.TemplateFormComponent, ModelDrivenFormComponent_1.ModelDrivenFormComponent, FormBuilderComponent_1.FormBuilderComponent, HomeComponent_1.HomeComponent, EditComponent_1.EditComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [ProductService_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map