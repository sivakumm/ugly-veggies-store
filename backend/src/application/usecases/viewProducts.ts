import { join } from "../../../dependencies.ts";
import { ProductInput } from "../../types/product.ts";

// TODO: remove once correct type/class exists
type TemporaryProductType = ProductInput;
let products: TemporaryProductType[] = [];

export function viewProducts(): TemporaryProductType[] {
  if (!products || products.length === 0) {
    const filepath = "./data/products.json";
    const filename = join(Deno.cwd(), filepath);

    // TODO: move file reading logic out of this function and into an adapter
    // -> should be generic and independent if from file or from database
    const raw = Deno.readFileSync(filename);

    const decoder = new TextDecoder("utf-8");
    const jsonString = decoder.decode(raw);

    products = JSON.parse(jsonString);
  }
  return products;
}
