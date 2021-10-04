import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { books } from "../../data/mockdata.ts";

const SUB_ROUTE = "/books";

const withBooksRoutes = (router: Router) => {
  router.get(SUB_ROUTE, (context) => {
    context.response.body = Array.from(books.values());
  });

  router.get(`${SUB_ROUTE}/:id`, (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });
};

export default withBooksRoutes;
