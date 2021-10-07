import { ProductsRepository } from "../../../application/ports/persistance/ProductsRepository.ts";
import { Product } from "../../../domain/models/product/Product.ts";
import { ProductId } from "../../../domain/models/product/ProductId.ts";
import { join } from "../../../../dependencies.ts";

export class InMemoryProductsRepository implements ProductsRepository {
  private readonly productById = new Map<ProductId, Product>();

  constructor() {
    this.createDummyData();
  }

  createDummyData() {
    const filepath = "./data/products.json";
    const filename = join(Deno.cwd(), filepath);

    // TODO: move file reading logic out of this function and into an adapter
    // -> should be generic and independent if from file or from database
    const raw = Deno.readFileSync(filename);

    const decoder = new TextDecoder("utf-8");
    const jsonString = decoder.decode(raw);

    const rawProducts = JSON.parse(jsonString);
    for (const raw of rawProducts) {
      const input = {
        id: raw.id,
        name: raw.name,
        imageUrl: raw.imageUrl,
        price: raw.price,
      };
      // TODO: this is not really safe -> assumes that the dummy/mockdata is valid
      const product = Product.create(input).unwrap();
      this.productById.set(product._id, product);
    }
  }

  findAll(): Promise<Product[]> {
    const products = Array.from(this.productById.values());
    return new Promise((resolve, _reject) => resolve(products));
  }
}
