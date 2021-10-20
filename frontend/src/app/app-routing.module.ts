import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProdukteComponent} from "./produkte/produkte.component";
import {RezepteComponent} from "./rezepte/rezepte.component";
import {AbosComponent} from "./abos/abos.component";
import {WarenkorbComponent} from "./warenkorb/warenkorb.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produkte', loadChildren: () => import('./produkte/produkte.module').then(m => m.ProdukteModule)},
  {path: 'rezepte', component: RezepteComponent},
  {path: 'abos', component: AbosComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'produkte/:produktId', component: ProdukteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
