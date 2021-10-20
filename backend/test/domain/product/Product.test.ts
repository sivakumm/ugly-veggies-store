import { asserts } from "../../../dev_dependencies.ts";
import { Product } from "../../../src/domain/product/Product.ts";

Deno.test("[Product]: Valid Product", () => {
  const input = {
    name: "Valid Product Name",
    id: "id-123456789",
    price: 10,
    imageUrl: "https://image.url",
  };
  const product = Product.create(input).unwrap();
  asserts.assert(product instanceof Product);

  // TODO: more assertions?
});

Deno.test("[Product]: Input to ProductName is too long", () => {
  const input = {
    name: "The product name is way toooooooooooooooo long!",
    id: "id-123456789",
    price: 10,
    imageUrl: "https://image.url",
  };
  const validationErrorNull = Product.create(input);
  asserts.assertEquals(validationErrorNull.value, [{
    name: "ProductName Validation Error",
    message: "Name mustn't be longer than 30 characters.",
  }]);
});

// TODO: add more tests here

Deno.test("[Product]: Equality Test", () => {
  const input = {
    name: "Valid Product Name",
    id: "id-123456789",
    price: 10,
    imageUrl: "https://image.url",
  };
  const o1 = Product.create(input).unwrap();
  const o2 = Product.create(input).unwrap();
  asserts.assert(o1.equals(o2));
});
