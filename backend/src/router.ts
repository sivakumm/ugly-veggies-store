import { Router } from "../dependencies.ts";
import { withBooksRoutes } from "./rest/booksRouter.ts";

const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello world!";
});

withBooksRoutes(router);

export default router;
