import { createAction, props } from "@ngrx/store";
import { Product} from "../../models/product.model";

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
