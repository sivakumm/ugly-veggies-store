import { Err } from "./ResultErr.ts";
import { Ok } from "./ResultOk.ts";

export interface BaseResult<T, E> extends Iterable<T extends Iterable<infer U> ? U : never> {
  /** `true` when the result is Ok */ readonly ok: boolean;
  /** `true` when the result is Err */ readonly err: boolean;

  /**
   * Returns the contained `Ok` value.
   * Because this function may throw, its use is generally discouraged.
   * Instead, prefer to handle the `Err` case explicitly.
   *
   * Throws if the value is an `Err`, with a message provided by the `Err`'s value.
   */
  unwrap(): T;

  /**
   * Returns the contained `Ok` value or a provided default.
   *
   *  (This is the `unwrap_or` in rust)
   */
  unwrapOr<T2>(val: T2): T | T2;

  /**
   * Calls `mapper` if the result is `Ok`, otherwise returns the `Err` value of self.
   * This function can be used for control flow based on `Result` values.
   */
  andThen<T2>(mapper: (val: T) => Ok<T2>): Result<T2, E>;
  andThen<E2>(mapper: (val: T) => Err<E2>): Result<T, E | E2>;
  andThen<T2, E2>(mapper: (val: T) => Result<T2, E2>): Result<T2, E | E2>;
  andThen<T2, E2>(mapper: (val: T) => Result<T2, E2>): Result<T2, E | E2>;

  /**
   * Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained `Ok` value,
   * leaving an `Err` value untouched.
   *
   * This function can be used to compose the results of two functions.
   */
  map<U>(mapper: (val: T) => U): Result<U, E>;

  /**
   * Maps a `Result<T, E>` to `Result<T, F>` by applying a function to a contained `Err` value,
   * leaving an `Ok` value untouched.
   *
   * This function can be used to pass through a successful result while handling an error.
   */
  mapErr<F>(mapper: (val: E) => F): Result<T, F>;
}

export type Result<T, E> = Ok<T> | Err<E>;

export function isResult<T, E>(val: unknown): val is Result<T, E> {
  return val instanceof Err || val instanceof Ok;
}
