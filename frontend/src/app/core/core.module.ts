import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ModuleLoadedOnceGuard} from "./module-loaded-once.guard";
import {HeaderComponent} from "./header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  exports: [HeaderComponent, BrowserModule, AppRoutingModule]
})
export class CoreModule extends ModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}


