import { asserts } from "../../../dev_dependencies.ts";
import { add } from "../../../src/application/usecases/addTwoNumbers.ts";

Deno.test("[addTwoNumbers]: should add 1 and 2", () => {
  asserts.assertEquals(add(1, 2), 3);
});
