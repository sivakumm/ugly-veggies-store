import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbosComponent } from './abos/abos.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './core/header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from "./state/products/products.reducer";
import { ProductsEffects } from "./state/products/products.effects";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DisplayProdukteComponent } from './produkte/display-produkte/display-produkte.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormatErrorPipe } from './general/pipes/format-error.pipe';
import { FormErrorComponent } from './general/error/form-error/form-error.component';
import { userReducer } from "./state/users/users.reducer";
import { UsersEffects } from "./state/users/users.effects";
import { ProdukteComponent } from './produkte/produkte.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { LogoutComponent } from './user/logout/logout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginRegisterMaskComponent } from './core/header/mask/login-register-mask.component';
import {AuthenticationInterceptor} from "./general/interceptors/authentication.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    WarenkorbComponent,
    LoginComponent,
    RegisterComponent,
    FormatErrorPipe,
    FormErrorComponent,
    LogoutComponent,
    LoginRegisterMaskComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([ProductsEffects, UsersEffects]),
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer, user: userReducer }, {}),
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    CoreModule,
    RezepteModule,
    HomeModule,
    AbosModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
