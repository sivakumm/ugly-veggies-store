import { Err } from "./Err.ts";
import { Ok } from "./Ok.ts";

export interface BaseResult<T, E>
  extends Iterable<T extends Iterable<infer U> ? U : never> {
  /**
   * `true` when the result is Ok
   * `false` when the result is Err
   */
  readonly success: boolean;

  /**
   * Returns the contained `Ok` value.
   * Because this function may throw, its use is generally discouraged.
   * Instead, prefer to handle the `Err` case explicitly.
   *
   * Throws if the value is an `Err`, with a message provided by the `Err`'s value.
   */
  unwrap(): T;
}

export type Result<T, E> = Ok<T> | Err<E>;

export function isResult<T, E>(val: unknown): val is Result<T, E> {
  return val instanceof Err || val instanceof Ok;
}
