import { asserts } from "../../../dev_dependencies.ts";
import {
  ProductName,
  ProductNameInput,
} from "../../../src/domain/models/product/ProductName.ts";

Deno.test("[ProductName]: Valid Product Name", () => {
  const input = { name: "Valid Product Name" };
  const productName = ProductName.create(input).unwrap();
  asserts.assertEquals(productName.getPrimitiveValue(), input.name);
});

Deno.test("[ProductName]: No Name Provided", () => {
  const inputNull = { name: null } as unknown as ProductNameInput;
  const validationErrorNull = ProductName.create(inputNull);
  asserts.assertEquals(validationErrorNull.value, [{
    name: "ProductName Validation Error",
    message: "Name does not exist!",
  }]);

  const inputUndefined = { name: undefined } as unknown as ProductNameInput;
  const validationErrorUndefined = ProductName.create(inputUndefined);
  asserts.assertEquals(validationErrorUndefined.value, [{
    name: "ProductName Validation Error",
    message: "Name does not exist!",
  }]);
});

Deno.test("[ProductName]: Name Too Short", () => {
  const input = { name: "A" };
  const validationError = ProductName.create(input);
  asserts.assertEquals(validationError.value, [{
    name: "ProductName Validation Error",
    message: "Name must be at least 3 characters long.",
  }]);
});

Deno.test("[ProductName]: Name Too Long", () => {
  const input = {
    name: "This is a very very very very very very very very long Product Name",
  };
  const validationError = ProductName.create(input);
  asserts.assertEquals(validationError.value, [{
    name: "ProductName Validation Error",
    message: "Name mustn't be longer than 40 characters.",
  }]);
});

Deno.test("[ProductName]: Equality Test", () => {
  const input = { name: "Valid Product Name" };
  const o1 = ProductName.create(input).unwrap();
  const o2 = ProductName.create(input).unwrap();
  asserts.assert(o1.equals(o2));
});

Deno.test("[ProductName]: toJSON Test", () => {
  const input = { name: "Valid Product Name" };
  const o1 = ProductName.create(input).unwrap();
  asserts.assertEquals(o1.toJSON(), input.name);
});
