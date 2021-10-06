import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AbosComponent} from './abos/abos.component';
import {HomeComponent} from './home/home.component';
import {RezepteComponent} from './rezepte/rezepte.component';
import {WarenkorbComponent} from './warenkorb/warenkorb.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {ProdukteModule} from "./produkte/produkte.module";
import {RezepteModule} from "./rezepte/rezepte.module";

@NgModule({
  declarations: [
    AppComponent,
    AbosComponent,
    HomeComponent,
    WarenkorbComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    ProdukteModule,
    RezepteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
