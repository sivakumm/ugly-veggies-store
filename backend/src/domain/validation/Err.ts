import { BaseResult } from "./Result.ts";

export class ErrImpl<E> implements BaseResult<never, E> {
  /** An empty Err */
  static readonly EMPTY = new ErrImpl<void>(undefined);

  readonly ok!: false;
  readonly err!: true;
  readonly val!: E;

  private readonly _stack!: string;

  [Symbol.iterator](): Iterator<never, never, never> {
    return {
      next(): IteratorResult<never, never> {
        return { done: true, value: undefined! };
      },
    };
  }

  private constructor(val: E) {
    if (!(this instanceof ErrImpl)) {
      return new ErrImpl(val);
    }

    this.ok = false;
    this.err = true;
    this.val = val;

    const stackLines = new Error().stack!.split("\n").slice(2);
    if (stackLines && stackLines.length > 0 && stackLines[0].includes("ErrImpl")) {
      stackLines.shift();
    }

    this._stack = stackLines.join("\n");
  }

  static wrap<U>(val: U): ErrImpl<U> {
    return new ErrImpl(val);
  }

  unwrapOr<T2>(val: T2): T2 {
    return val;
  }

  unwrap(): never {
    throw new Error(`Tried to unwrap Error: ${String(this.val)}\n${this._stack}`);
  }

  map(_mapper: unknown): Err<E> {
    return this;
  }

  andThen(_op: unknown): Err<E> {
    return this;
  }

  mapErr<E2>(mapper: (err: E) => E2): Err<E2> {
    return new Err(mapper(this.val));
  }

  toString(): string {
    return `Err(${String(this.val)})`;
  }

  get stack(): string | undefined {
    return `${this}\n${this._stack}`;
  }
}

// This allows Err to be callable - possible because of the es5 compilation target
export const Err = ErrImpl as typeof ErrImpl & (<E>(err: E) => Err<E>);
export type Err<E> = ErrImpl<E>;
