import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ModuleLoadedOnceGuard} from "./module-loaded-once.guard";
import {HeaderComponent} from "./header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersEffects} from "../state/users/users.effects";
import {userReducer} from "../state/users/users.reducer";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {FormatErrorPipe} from "../general/pipes/format-error.pipe";
import {FormErrorComponent} from "../general/error/form-error/form-error.component";
import {LogoutComponent} from "./user/logout/logout.component";
import {LoginRegisterMaskComponent} from "./header/mask/login-register-mask.component";

@NgModule({
  declarations: [
    HeaderComponent,
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
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot({user: userReducer}),
  ],
  exports: [HeaderComponent, BrowserModule, AppRoutingModule]
})
export class CoreModule extends ModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}


