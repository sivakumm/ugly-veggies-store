import { ResponseModel } from "./response-model.ts";

export interface ResponseHandler<T> {
  response(body: T): ResponseModel<T>;
}
