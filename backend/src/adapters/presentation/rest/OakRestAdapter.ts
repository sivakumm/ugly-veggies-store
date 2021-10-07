import { Application, cors } from "../../../../dependencies.ts";
import { ProductController } from "./endpoints/products/ProductsController.ts";

export class OakRestAdapter {
  constructor(
    private readonly application: Application,
    private readonly productController: ProductController,
  ) {
    // THIS IS UNSAFE AND SHOULDN'T BE DONE IN PRODUCTION
    this.application.use(cors());

    // set the individual controllers
    this.application.use(this.productController.getRoutes());
  }

  async start(): Promise<void> {
    await this.application.listen({ port: 8000 });
  }
}
