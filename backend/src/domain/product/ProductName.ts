import { DomainObject } from "../DomainObject.ts";

interface ProductNameInput {
  name: string;
}

type ProductNameType = string;

export class ProductName extends DomainObject<ProductNameInput, ProductNameType> {
  private readonly _name: ProductNameType;

  get name(): ProductNameType {
    return this._name;
  }

  private constructor(input: ProductNameInput) {
    super(input);
    this._name = input.name;
  }

  public static create(input: ProductNameInput) {
    if (input.name === null || input.name === undefined) {
      // TODO: don't throw here -> return Result instead
      throw new Error("Must provide a name for the user");
    } else {
      return new ProductName(input);
    }
  }
}
