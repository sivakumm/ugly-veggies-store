import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Observable, of} from "rxjs";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent implements OnInit{

  public warenkorbProducts$: Observable<Product[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.warenkorbProducts$ = this.store.select(appState =>
      appState.warenkorbState.warenkorb
    );
  }
}
