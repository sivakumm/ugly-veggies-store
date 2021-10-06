import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleLoadedOnceGuard} from "./module-loaded-once.guard";
import {HeaderComponent} from "./header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent]
})
export class CoreModule extends ModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}


