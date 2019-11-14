import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AppRoutingModule } from './app-routing.module';
import { DescriptionComponent } from './description/description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'addProduct', component: AddProductsComponent },
  { path: 'addProduct/:id', component: AddProductsComponent },
  { path: 'edit/:id', component: AddProductsComponent },
  { path: '**', redirectTo: ''}

];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ProductsComponent,
    FooterComponent,
    AddProductsComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
