import { asserts } from "../../../dev_dependencies.ts";
import { ProductName } from "../../../src/domain/product/ProductName.ts";

Deno.test("[ProductName]: Valid Product Name", () => {
  const input = { name: "Valid Product Name" };
  const productName = ProductName.create(input);
  asserts.assertEquals(productName.name, input.name);
});

Deno.test("[ProductName]: No Name Provided", () => {
  const input = { name: "" };
  asserts.assertThrows(() => ProductName.create(input), undefined, "Must provide a name for the user");
});

Deno.test("[ProductName]: Name Too Short", () => {
  const input = { name: "A" };
  asserts.assertThrows(() => ProductName.create(input), undefined, "Must provide a name for the user");
});

Deno.test("[ProductName]: Name Too Long", () => {
  const input = { name: "This is a very very very very very very very very long Product Name" };
  asserts.assertThrows(() => ProductName.create(input), undefined, "Must provide a name for the user");
});
