import {createReducer, on} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {loadProductsSuccess} from "./products.action";

export interface ProductsState {
  products: Product[]
}

export const initialState: ProductsState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, {products}) =>
    ({
        ...state,
        products
      }
    ))
);
