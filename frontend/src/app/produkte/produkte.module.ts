import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ProdukteComponent} from "./produkte.component";
import {DisplayProdukteComponent} from "./display-produkte/display-produkte.component";



@NgModule({
  declarations: [ProdukteComponent, DisplayProdukteComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProdukteComponent
  ]
})
export class ProdukteModule { }
