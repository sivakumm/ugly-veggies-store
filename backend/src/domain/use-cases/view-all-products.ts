import { Product } from "../models/product/Product.ts";

export interface ViewAllProducts {
  execute(): Promise<Product[]>;
}
