import { DomainValidationError } from "../validation/DomainValidationError.ts";
import { DomainObject } from "../DomainObject.ts";
import { Err } from "../validation/Err.ts";
import { Ok } from "../validation/Ok.ts";
import { Result } from "../validation/Result.ts";

export interface ProductNameInput {
  name: string;
}
type ProductNameJsonOutput = string;
type ProductNameType = string;

export class ProductName extends DomainObject<
  ProductNameInput,
  ProductNameType,
  ProductNameJsonOutput
> {
  private readonly _name: ProductNameType;

  private constructor(input: ProductNameInput) {
    super(input);
    this._name = input.name;
  }

  public static create(
    input: ProductNameInput,
  ): Result<ProductName, DomainValidationError[]> {
    const validationResult = ProductName.validateInput(input);
    return validationResult.success
      ? Ok.wrap(new ProductName(input))
      : validationResult;
  }

  private static validateInput(
    input: ProductNameInput,
  ): Result<boolean, DomainValidationError[]> {
    const validationErrors: DomainValidationError[] = [];
    if (input.name === null || input.name === undefined) {
      validationErrors.push({
        name: "ProductName Validation Error",
        message: "Name does not exist!",
      });
      return Err.wrap(validationErrors);
    }
    if (input.name.length > 40) {
      validationErrors.push({
        name: "ProductName Validation Error",
        message: "Name mustn't be longer than 40 characters.",
      });
    }
    if (input.name.length <= 3) {
      validationErrors.push({
        name: "ProductName Validation Error",
        message: "Name must be at least 3 characters long.",
      });
    }
    if (validationErrors.length > 0) {
      return Err.wrap(validationErrors);
    } else {
      return Ok.wrap(true);
    }
  }

  getPrimitiveValue() {
    return this._name;
  }

  toJSON() {
    return this._name;
  }
}
