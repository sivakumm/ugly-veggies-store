import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WarenkorbComponent} from './warenkorb/warenkorb.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {RezepteModule} from "./rezepte/rezepte.module";
import {HomeModule} from "./home/home.module";
import {AbosModule} from "./abos/abos.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    WarenkorbComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    RezepteModule,
    HomeModule,
    AbosModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
