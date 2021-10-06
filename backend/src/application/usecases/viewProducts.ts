import { join } from "../../../dependencies.ts";
import { Product } from "../../domain/product/Product.ts";

let products: Product[] = [];

export function viewProducts(): Product[] {
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
