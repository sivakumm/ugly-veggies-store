import {createReducer, on} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {loadProductsSuccess} from "./products.action";

export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }): Product[] => products)
);
