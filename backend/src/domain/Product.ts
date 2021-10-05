import { ProductInput } from "../types/product.ts";
import { DomainObject } from "./DomainObject.ts";
import { ProductName } from "./product/ProductName.ts";

type ProductType = {
  // id: ProductId;
  name: ProductName;
  // price: ProductPrice;
  // imageUrl: ImageUrl;
};

export class Product extends DomainObject<ProductInput, ProductType> {
  // TODO: add implementation
}
