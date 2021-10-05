import { Router } from "../dependencies.ts";
import { withBooksRoutes } from "./rest/booksRouter.ts";
import { withProductsRoutes } from "./rest/productsRouter.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello world!";
});

withBooksRoutes(router);
withProductsRoutes(router);

export default router;
