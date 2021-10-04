import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbosComponent } from './abos/abos.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProdukteComponent } from './produkte/produkte.component';

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
