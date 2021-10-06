import { DomainObject } from "./DomainObject.ts";
import { ProductId } from "./product/ProductId.ts";
import { ProductName } from "./product/ProductName.ts";
import { ProductPrice } from "./product/ProductPrice.ts";
import { ProductImageUrl } from "./product/ProductImageUrl.ts";
import { DomainValidationError } from "../types/domain/validation.ts";
import { Err } from "./validation/Err.ts";
import { Ok } from "./validation/Ok.ts";
import { Result } from "./validation/Result.ts";

export interface ProductInput {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
  imageUrl: ProductImageUrl;
}

type ProductType = {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
  imageUrl: ProductImageUrl;
};

export class Product extends DomainObject<ProductInput, ProductType> {
  readonly _id: ProductId;
  readonly _name: ProductName;
  readonly _price: ProductPrice;
  readonly _imageUrl: ProductImageUrl;

  private constructor(input: ProductInput) {
    super(input);
    this._id = input.id;
    this._name = input.name;
    this._price = input.price;
    this._imageUrl = input.imageUrl;
  }

  public static create(
    input: ProductInput,
  ): Result<Product, DomainValidationError[]> {
    const validationResult = Product.validateInput(input);
    return validationResult.success
      ? Ok.wrap(new Product(input))
      : validationResult;
  }

  private static validateInput(
    input: ProductInput,
  ): Result<boolean, DomainValidationError[]> {
    const validationErrors: DomainValidationError[] = [];
    if (input === null || input === undefined) {
      validationErrors.push({
        name: "Product Validation Error",
        message: "Product does not exist!",
      });
      return Err.wrap(validationErrors);
    }

    // TODO: add validation logic

    if (validationErrors.length > 0) {
      return Err.wrap(validationErrors);
    } else {
      return Ok.wrap(true);
    }
  }

  getPrimitiveValue() {
    return {
      id: this._id,
      name: this._name,
      price: this._price,
      imageUrl: this._imageUrl,
    };
  }
}
