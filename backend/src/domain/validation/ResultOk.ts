import { BaseResult, Result } from "./Result.ts";
import { Err } from "./ResultErr.ts";

export class OkImpl<T> implements BaseResult<T, never> {
  static readonly EMPTY = new OkImpl<void>(undefined);

  readonly ok!: true;
  readonly err!: false;
  readonly val!: T;

  /**
   * Helper function if you know you have an Ok<T> and T is iterable
   */
  [Symbol.iterator](): Iterator<T extends Iterable<infer U> ? U : never> {
    const obj = Object(this.val) as Iterable<never>;

    return Symbol.iterator in obj ? obj[Symbol.iterator]() : {
      next(): IteratorResult<never, never> {
        return { done: true, value: undefined! };
      },
    };
  }

  constructor(val: T) {
    if (!(this instanceof OkImpl)) {
      return new OkImpl(val);
    }

    this.ok = true;
    this.err = false;
    this.val = val;
  }

  unwrapOr(_val: unknown): T {
    return this.val;
  }

  unwrap(): T {
    return this.val;
  }

  map<T2>(mapper: (val: T) => T2): Ok<T2> {
    return new Ok(mapper(this.val));
  }

  andThen<T2>(mapper: (val: T) => Ok<T2>): Ok<T2>;
  andThen<E2>(mapper: (val: T) => Err<E2>): Result<T, E2>;
  andThen<T2, E2>(mapper: (val: T) => Result<T2, E2>): Result<T2, E2>;
  andThen<T2, E2>(mapper: (val: T) => Result<T2, E2>): Result<T2, E2> {
    return mapper(this.val);
  }

  mapErr(_mapper: unknown): Ok<T> {
    return this;
  }

  /**
   * Returns the contained `Ok` value, but never throws.
   * Unlike `unwrap()`, this method doesn't throw and is only callable on an Ok<T>
   *
   * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
   * that will fail to compile if the error type of the Result is later changed to an error that can actually occur.
   *
   * (this is the `into_ok()` in rust)
   */
  safeUnwrap(): T {
    return this.val;
  }

  toString(): string {
    return `Ok(${String(this.val)})`;
  }
}

// This allows Ok to be callable - possible because of the es5 compilation target
export const Ok = OkImpl as typeof OkImpl & (<T>(val: T) => Ok<T>);
export type Ok<T> = OkImpl<T>;
