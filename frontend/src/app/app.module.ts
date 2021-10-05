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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produkte', component: ProdukteComponent},
  {path: 'rezepte', component: RezepteComponent},
  {path: 'abos', component: AbosComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
