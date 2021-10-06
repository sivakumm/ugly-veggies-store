import { DomainObject } from "../DomainObject.ts";

interface ProductNameInput {
  name: string;
}

type ProductNameType = string;

export class ProductName extends DomainObject<ProductNameInput, ProductNameType> {
  private readonly _name: ProductNameType;

  private constructor(input: ProductNameInput) {
    super(input);
    this._name = input.name;
  }

  public static create(input: ProductNameInput): ProductName | Error {
    const valid = ProductName.validateInput(input);
    if (!valid) {
      // TODO: don't throw here -> return Result instead
      throw new Error("Must provide a name for the user");
    } else {
      return new ProductName(input);
    }
  }

  // TODO: refactor to return Result<Ok, Err> and not a simple boolean as the error information is lost!
  private static validateInput(input: ProductNameInput): boolean {
    if (input?.name === undefined) {
      return false;
    } else if (input.name.length > 30) {
      return false;
    } else if (input.name.length <= 3) {
      return false;
    } else {
      return true;
    }
  }

  getPrimitiveValue() {
    return this._name;
  }
}
