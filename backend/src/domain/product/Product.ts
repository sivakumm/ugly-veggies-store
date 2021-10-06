import { DomainObject } from "../DomainObject.ts";
import { ProductId } from "../product/ProductId.ts";
import { ProductName } from "../product/ProductName.ts";
import { ProductPrice } from "../product/ProductPrice.ts";
import { ProductImageUrl } from "../product/ProductImageUrl.ts";
import { DomainValidationError } from "../../types/domain/validation.ts";
import { Err } from "../validation/Err.ts";
import { Ok } from "../validation/Ok.ts";
import { Result } from "../validation/Result.ts";

interface RawProductInput {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductInput {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
  imageUrl: ProductImageUrl;
}

type ProductType = ProductInput;

// TODO: fix the type chaos -> inputs should be in the raw format
// but the internal representation should be of the correct Domain Objects

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
    input: RawProductInput,
  ): Result<Product, DomainValidationError[]> {
    const validationResult = Product.validateInput(input);
    if (!validationResult.success) {
      return validationResult;
    }
    const idResult = ProductId.create({ id: input.id });
    if (!idResult.success) {
      return idResult;
    }
    const nameResult = ProductName.create({ name: input.name });
    if (!nameResult.success) {
      return nameResult;
    }
    const priceResult = ProductPrice.create({ price: input.price });
    if (!priceResult.success) {
      return priceResult;
    }
    const imageUrlResult = ProductImageUrl.create({ imageUrl: input.imageUrl });
    if (!imageUrlResult.success) {
      return imageUrlResult;
    }
    return Ok.wrap(
      new Product({
        id: idResult.unwrap(),
        name: nameResult.unwrap(),
        price: priceResult.unwrap(),
        imageUrl: imageUrlResult.unwrap(),
      }),
    );
  }

  private static validateInput(
    input: RawProductInput,
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
