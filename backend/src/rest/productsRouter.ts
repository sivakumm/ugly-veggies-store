import { Router } from "../../dependencies.ts";
import { viewProducts } from "../application/usecases/viewProducts.ts";

const SUB_ROUTE = "/products";

export const withProductsRoutes = (router: Router) => {
  router.get(SUB_ROUTE, (context) => {
    // TODO: should return Product[] where Product
    const products = viewProducts();
    // TODO: add mapper from application representation to REST representation
    context.response.body = JSON.stringify(products);
  });
};
