import { asserts } from "../../../../dev_dependencies.ts";
import { GenericSuccessResponse } from "../../../../src/adapters/presentation/response/generic-success-response.ts";

Deno.test("should have properties statusCode 200 and body", () => {
  const sut = new GenericSuccessResponse();

  const bodyValue = { anyKey: "anyValue" };
  const expectedReturn = {
    statusCode: 200,
    body: bodyValue,
  };

  const response = sut.response(bodyValue);
  asserts.assertEquals(response, expectedReturn);
});
