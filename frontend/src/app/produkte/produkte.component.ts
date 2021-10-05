import { Component, OnInit } from '@angular/core';
import { Store} from "@ngrx/store";
import { Product } from "../models/product.model";
import { Observable, of } from "rxjs";
import { loadProducts } from "../state/products/products.action";
import { AppState } from "../state/app.state";

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.scss']
})
export class ProdukteComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.select(state => state.products);
  }
}
