import { Application, Router } from "../dependencies.ts";
import { InMemoryProductsRepository } from "./adapters/persistance/in-memory/InMemoryProductRepository.ts";
import { ProductController } from "./adapters/presentation/rest/endpoints/products/ProductsController.ts";
import { OakRestAdapter } from "./adapters/presentation/rest/OakRestAdapter.ts";
import { ViewAllProductsUseCase } from "./application/use-cases/view-all-products.ts";

// TODO: this is a bit annyoing -> would be nice if we could define defaults
const productsRepository = new InMemoryProductsRepository();
const viewAllProductsUseCase = new ViewAllProductsUseCase(productsRepository);
const router = new Router();
const productController = new ProductController(router, viewAllProductsUseCase);
const application = new Application();
const server = new OakRestAdapter(
  application,
  productController,
);
server.start();
