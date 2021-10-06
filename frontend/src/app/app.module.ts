import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbosComponent } from './abos/abos.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from "./state/products/products.reducer";
import { ProductsEffects } from "./state/products/products.effects";
import { HttpClientModule } from "@angular/common/http";
import { DisplayProdukteComponent } from './produkte/display-produkte/display-produkte.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormatErrorPipe } from './general/pipes/format-error.pipe';
import { FormErrorComponent } from './general/error/form-error/form-error.component';
import { userReducer } from "./state/users/users.reducer";
import { UsersEffects } from "./state/users/users.effects";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
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
    DisplayProdukteComponent,
    LoginComponent,
    RegisterComponent,
    FormatErrorPipe,
    FormErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([ProductsEffects, UsersEffects]),
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer, user: userReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
