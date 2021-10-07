import {createReducer, on} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {addProductAction, loadProductsSuccess} from "./products.action";
import {of} from "rxjs";

export interface ProductsState {
  products: Product[]
}

interface WarenkorbState {
  warenkorb: Product[]
}

export const initialProductsState: ProductsState = {
  products: []
};

export const initialWarenkorbState: WarenkorbState = {
  warenkorb: []
};

export const productReducer = createReducer(
  initialProductsState,
  on(loadProductsSuccess, (productsState, {products}) => {
    console.log('state in productReducer' + productsState.products);
    //console.log('products in productReducer' + products);
    return {
        ...productsState,
        products
      }
})
);

export const warenkorbReducer = createReducer(
  initialWarenkorbState,
  on(addProductAction, (warenkorbState, {product}) => {
    console.log('state in warenkorbReducer' + warenkorbState);
    console.log('product in warenkorbReducer' + product.name);
    return {
      warenkorb: [...warenkorbState.warenkorb,...[product]]
    }
  })
);
