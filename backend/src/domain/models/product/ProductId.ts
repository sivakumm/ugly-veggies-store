import { DomainValidationError } from "../validation/DomainValidationError.ts";
import { DomainObject } from "../DomainObject.ts";
import { Err } from "../validation/Err.ts";
import { Ok } from "../validation/Ok.ts";
import { Result } from "../validation/Result.ts";

export interface ProductIdInput {
  id: string;
}

type ProductIdType = string;

export class ProductId extends DomainObject<ProductIdInput, ProductIdType> {
  private readonly _id: ProductIdType;

  private constructor(input: ProductIdInput) {
    super(input);
    this._id = input.id;
  }

  public static create(
    input: ProductIdInput,
  ): Result<ProductId, DomainValidationError[]> {
    const validationResult = ProductId.validateInput(input);
    return validationResult.success
      ? Ok.wrap(new ProductId(input))
      : validationResult;
  }

  private static validateInput(
    input: ProductIdInput,
  ): Result<boolean, DomainValidationError[]> {
    const validationErrors: DomainValidationError[] = [];
    if (input.id === null || input.id === undefined) {
      validationErrors.push({
        name: "ProductId Validation Error",
        message: "ProductId does not exist!",
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
    return this._id;
  }
}
