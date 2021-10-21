export abstract class DomainObject<I, T, O> {
  public readonly input: I;

  constructor(input: I) {
    this.input = Object.freeze(input);
  }

  public equals(other: DomainObject<I, T, O>): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    if (other.input === null || other.input === undefined) {
      return false;
    }
    // TODO: check if this is a reasonable way to perform an equality check in JS/TS
    return JSON.stringify(this.input) === JSON.stringify(other.input);
  }

  protected abstract getPrimitiveValue(): T;
  protected abstract toJSON(): O;
}
