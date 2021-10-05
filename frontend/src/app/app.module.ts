import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbosComponent } from './abos/abos.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from "./state/products/products.reducer";
import { ProductsEffects } from "./state/products/products.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AbosComponent,
    HomeComponent,
    RezepteComponent,
    WarenkorbComponent,
    ProdukteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([ProductsEffects]),
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
