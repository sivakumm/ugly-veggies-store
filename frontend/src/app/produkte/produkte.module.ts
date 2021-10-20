import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ProdukteComponent} from "./produkte.component";
import {DisplayProdukteComponent} from "./display-produkte/display-produkte.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductsService} from "./services/products.service";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {ProductsEffects} from "../state/products/products.effects";
import {productReducer} from "../state/products/products.reducer";

const routes: Routes = [
  {path: '', component: ProdukteComponent}
]

@NgModule({
  declarations: [ProdukteComponent, DisplayProdukteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    StoreModule.forFeature('products', productReducer, {}),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsService]
})
export class ProdukteModule { }
