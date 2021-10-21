import { DomainValidationError } from "../validation/DomainValidationError.ts";
import { DomainObject } from "../DomainObject.ts";
import { Err } from "../validation/Err.ts";
import { Ok } from "../validation/Ok.ts";
import { Result } from "../validation/Result.ts";

export interface ProductImageUrlInput {
  imageUrl: string;
}
type ProductImageUrlJsonOutput = string;
type ProductImageUrlType = string;

export class ProductImageUrl
  extends DomainObject<
    ProductImageUrlInput,
    ProductImageUrlType,
    ProductImageUrlJsonOutput
  > {
  private readonly _imageUrl: ProductImageUrlType;

  private constructor(input: ProductImageUrlInput) {
    super(input);
    this._imageUrl = input.imageUrl;
  }

  public static create(
    input: ProductImageUrlInput,
  ): Result<ProductImageUrl, DomainValidationError[]> {
    const validationResult = ProductImageUrl.validateInput(input);
    return validationResult.success
      ? Ok.wrap(new ProductImageUrl(input))
      : validationResult;
  }

  private static validateInput(
    input: ProductImageUrlInput,
  ): Result<boolean, DomainValidationError[]> {
    const validationErrors: DomainValidationError[] = [];
    if (input.imageUrl === null || input.imageUrl === undefined) {
      validationErrors.push({
        name: "ProductImageUrl Validation Error",
        message: "ProductImageUrl does not exist!",
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
    return this._imageUrl;
  }

  toJSON() {
    return this._imageUrl;
  }
}
