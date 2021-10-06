import { asserts } from "../../../dev_dependencies.ts";
import { isResult } from "../../../src/domain/validation/Result.ts";
import { Err } from "../../../src/domain/validation/Err.ts";
import { Ok } from "../../../src/domain/validation/Ok.ts";

Deno.test("[Result]: Err -> success === false", () => {
  const err = Err.wrap("test");
  asserts.assert(!err.success);
});

Deno.test("[Result]: Ok -> success === true", () => {
  const ok = Ok.wrap("test");
  asserts.assert(ok.success);
});

Deno.test("[Result]: Ok Unwrap -> Value", () => {
  const ok = Ok.wrap("test");
  asserts.assertEquals(ok.unwrap(), "test");
});

Deno.test("[Result]: Err Unwrap -> Error", () => {
  const err = Err.wrap("test");
  asserts.assertThrows(
    () => err.unwrap(),
    undefined,
    "Tried to unwrap Error: test",
  );
});

Deno.test("[Result]: Ok is Result", () => {
  const possibleResult = Ok.wrap("test");
  asserts.assert(isResult(possibleResult));
});

Deno.test("[Result]: Err is Result", () => {
  const possibleResult = Err.wrap("test");
  asserts.assert(isResult(possibleResult));
});
