import { ResponseModel } from "../../../application/ports/response/response-model.ts";
import { ResponseHandler } from "../../../application/ports/response/response-handler.ts";

export class GenericSuccessResponse<T> implements ResponseHandler<T> {
  response(body: T): ResponseModel<T> {
    return { statusCode: 200, body };
  }
}
