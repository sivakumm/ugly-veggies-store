import { BaseResult } from "./Result.ts";

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

  private constructor(val: T) {
    if (!(this instanceof OkImpl)) {
      return new OkImpl(val);
    }

    this.ok = true;
    this.err = false;
    this.val = val;
  }

  static wrap<U>(val: U): OkImpl<U> {
    return new OkImpl(val);
  }

  unwrapOr(_val: unknown): T {
    return this.val;
  }

  unwrap(): T {
    return this.val;
  }
}

// This allows Ok to be callable - possible because of the es5 compilation target
export const Ok = OkImpl as typeof OkImpl & (<T>(val: T) => Ok<T>);
export type Ok<T> = OkImpl<T>;
