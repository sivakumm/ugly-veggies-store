import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import withBooksRoutes from "./rest/booksRouter.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello world!";
});

withBooksRoutes(router);

export default router;
