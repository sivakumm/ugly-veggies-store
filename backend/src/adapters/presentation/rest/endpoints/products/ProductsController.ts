import { Middleware, Router } from "../../../../../../dependencies.ts";
import { ViewAllProducts } from "../../../../../domain/use-cases/view-all-products.ts";

interface Routes {
  getRoutes: Middleware;
}

export class ProductController implements Routes {
  private readonly SUB_PATH = "/api/products";

  constructor(
    private readonly router: Router,
    private readonly viewAllProductsUseCase: ViewAllProducts,
  ) {
    this.setViewAllProducts();
  }

  private setViewAllProducts() {
    this.router.get(this.SUB_PATH, async ({ response }) => {
      const products = await this.viewAllProductsUseCase.execute();

      // TODO: transform products to a outgoing JSON DTO
      // return this.findAllUsersPresenter.response(products);
      response.body = JSON.stringify(products);
    });
  }

  getRoutes() {
    return this.router.routes();
  }
}
