import {Product} from "../models/product.model";
import {ProductsState} from "./products/products.reducer";


// TODO: refacto and move somewhere else
interface WarenkorbState {
  warenkorb: Product[]
}

export interface AppState {
  productsState: ProductsState;
  warenkorbState: WarenkorbState;
}
