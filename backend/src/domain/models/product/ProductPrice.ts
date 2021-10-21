import { DomainValidationError } from "../validation/DomainValidationError.ts";
import { DomainObject } from "../DomainObject.ts";
import { Err } from "../validation/Err.ts";
import { Ok } from "../validation/Ok.ts";
import { Result } from "../validation/Result.ts";

export interface ProductPriceInput {
  price: number;
}
type ProductPriceJsonOutput = number;
type ProductPriceType = number;

export class ProductPrice
  extends DomainObject<
    ProductPriceInput,
    ProductPriceType,
    ProductPriceJsonOutput
  > {
  private readonly _price: ProductPriceType;

  private constructor(input: ProductPriceInput) {
    super(input);
    this._price = input.price;
  }

  public static create(
    input: ProductPriceInput,
  ): Result<ProductPrice, DomainValidationError[]> {
    const validationResult = ProductPrice.validateInput(input);
    return validationResult.success
      ? Ok.wrap(new ProductPrice(input))
      : validationResult;
  }

  private static validateInput(
    input: ProductPriceInput,
  ): Result<boolean, DomainValidationError[]> {
    const validationErrors: DomainValidationError[] = [];
    if (input.price === null || input.price === undefined) {
      validationErrors.push({
        name: "ProductPrice Validation Error",
        message: "ProductPrice does not exist!",
      });
      return Err.wrap(validationErrors);
    }

    // TODO: add validation logic here

    if (validationErrors.length > 0) {
      return Err.wrap(validationErrors);
    } else {
      return Ok.wrap(true);
    }
  }

  getPrimitiveValue() {
    return this._price;
  }

  toJSON() {
    return this._price;
  }
}
