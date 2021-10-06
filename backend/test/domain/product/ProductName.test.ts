import { asserts } from "../../../dev_dependencies.ts";
import { ProductName } from "../../../src/domain/product/ProductName.ts";

Deno.test("[ProductName]: Valid Product Name", () => {
  const input = { name: "Valid Product Name" };
  const productName = ProductName.create(input) as ProductName;
  asserts.assertEquals(productName.getPrimitiveValue(), input.name);
});

Deno.test("[ProductName]: No Name Provided", () => {
  const input = { name: "" };
  asserts.assertThrows(
    () => ProductName.create(input),
    undefined,
    "Must provide a name for the user",
  );
});

Deno.test("[ProductName]: Name Too Short", () => {
  const input = { name: "A" };
  asserts.assertThrows(
    () => ProductName.create(input),
    undefined,
    "Must provide a name for the user",
  );
});

Deno.test("[ProductName]: Name Too Long", () => {
  const input = { name: "This is a very very very very very very very very long Product Name" };
  asserts.assertThrows(
    () => ProductName.create(input),
    undefined,
    "Must provide a name for the user",
  );
});

Deno.test("[ProductName]: Equality Test", () => {
  const input = { name: "Valid Product Name" };
  const o1 = ProductName.create(input) as ProductName;
  const o2 = ProductName.create(input) as ProductName;
  asserts.assert(o1.equals(o2));
});
