import { BaseResult } from "./Result.ts";

export class OkImpl<T> implements BaseResult<T, never> {
  static readonly EMPTY = new OkImpl<void>(undefined);

  readonly success!: true;
  readonly value!: T;

  /**
   * Helper function if you know you have an Ok<T> and T is iterable
   */
  [Symbol.iterator](): Iterator<T extends Iterable<infer U> ? U : never> {
    const obj = Object(this.value) as Iterable<never>;

    return Symbol.iterator in obj ? obj[Symbol.iterator]() : {
      next(): IteratorResult<never, never> {
        return { done: true, value: undefined! };
      },
    };
  }

  private constructor(val: T) {
    if (!(this instanceof OkImpl)) {
      return new OkImpl(val);
    }

    this.success = true;
    this.value = val;
  }

  static wrap<U>(val: U): OkImpl<U> {
    return new OkImpl(val);
  }

  unwrapOr(_val: unknown): T {
    return this.value;
  }

  unwrap(): T {
    return this.value;
  }
}

// This allows Ok to be callable - possible because of the es5 compilation target
export const Ok = OkImpl as typeof OkImpl & (<T>(val: T) => Ok<T>);
export type Ok<T> = OkImpl<T>;
