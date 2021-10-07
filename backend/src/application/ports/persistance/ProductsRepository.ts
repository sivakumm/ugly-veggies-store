import { Product } from "../../../domain/models/product/Product.ts";

export interface ProductsRepository {
  findAll(): Promise<Product[]>;
}
