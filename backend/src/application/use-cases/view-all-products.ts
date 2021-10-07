import { Product } from "../../domain/models/product/Product.ts";
import { ViewAllProducts } from "../../domain/use-cases/view-all-products.ts";
import { ProductsRepository } from "../ports/persistance/ProductsRepository.ts";

export class ViewAllProductsUseCase implements ViewAllProducts {
  constructor(private readonly productsRepository: ProductsRepository) {
  }

  execute(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }
}
