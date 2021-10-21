import { Middleware, Router } from "../../../../../../dependencies.ts";
import { ResponseHandler } from "../../../../../application/ports/response/response-handler.ts";
import { ProductJsonOutput } from "../../../../../domain/models/product/Product.ts";
import { ViewAllProducts } from "../../../../../domain/use-cases/view-all-products.ts";

interface Routes {
  getRoutes: Middleware;
}

export class ProductController implements Routes {
  private readonly SUB_PATH = "/api/products";

  constructor(
    private readonly router: Router,
    private readonly viewAllProductsUseCase: ViewAllProducts,
    private readonly findAllUsersPresenter: ResponseHandler<
      ProductJsonOutput[]
    >,
  ) {
    this.setViewAllProducts();
  }

  private setViewAllProducts() {
    this.router.get(this.SUB_PATH, async ({ response }) => {
      const products = await this.viewAllProductsUseCase.execute();

      // TODO: Question - Should this be done here?
      // transform products (raw internal view) to products DTO
      const jsonBody = products.map((product) => product.toJSON());

      // get the response model
      const { body, statusCode } = this.findAllUsersPresenter.response(
        jsonBody,
      );
      response.body = body;
      response.status = statusCode;
    });
  }

  getRoutes() {
    return this.router.routes();
  }
}
