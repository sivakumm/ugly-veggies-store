import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbosComponent } from './abos/abos.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { HeaderComponent } from './core/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from "./state/products/products.reducer";
import { ProductsEffects } from "./state/products/products.effects";
import { HttpClientModule } from "@angular/common/http";
import { DisplayProdukteComponent } from './produkte/display-produkte/display-produkte.component';
import {ProduktComponent} from "./produkte/display-produkte/produkt/produkt.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produkte', component: ProdukteComponent},
  {path: 'rezepte', component: RezepteComponent},
  {path: 'abos', component: AbosComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'produkte/:produktId', component: ProduktComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];
@NgModule({
  declarations: [
    AppComponent,
    AbosComponent,
    HomeComponent,
    RezepteComponent,
    WarenkorbComponent,
    ProdukteComponent,
    HeaderComponent,
    DisplayProdukteComponent,
    ProduktComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([ProductsEffects]),
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
