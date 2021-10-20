import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WarenkorbComponent} from './warenkorb/warenkorb.component';
import {RouterModule} from "@angular/router";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {productReducer} from "./state/products/products.reducer";
import {ProductsEffects} from "./state/products/products.effects";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './core/user/login/login.component';
import {RegisterComponent} from './core/user/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormatErrorPipe} from './general/pipes/format-error.pipe';
import {FormErrorComponent} from './general/error/form-error/form-error.component';
import {userReducer} from "./state/users/users.reducer";
import {UsersEffects} from "./state/users/users.effects";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {LogoutComponent} from './core/user/logout/logout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginRegisterMaskComponent} from './core/header/mask/login-register-mask.component';
import {AuthenticationInterceptor} from "./general/interceptors/authentication.interceptor";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {AbosModule} from "./abos/abos.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RezepteModule} from "./rezepte/rezepte.module";
import {CoreModule} from "./core/core.module";
import {WarenkorbModule} from "./warenkorb/warenkorb.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    RezepteModule,
    HomeModule,
    AbosModule,
    WarenkorbModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
