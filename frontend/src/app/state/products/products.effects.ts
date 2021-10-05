import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../../produkte/services/products.service";
import {map, switchMap} from "rxjs/operators";
import {loadProducts, loadProductsSuccess} from "./products.action";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {}

  loadProducts$ = createEffect(() => { return this.actions$.pipe(
    ofType(loadProducts),
    switchMap(() => this.productsService.loadProducts()
      .pipe(
        map(products => loadProductsSuccess({products})),
      )
    )
  ) });
}
