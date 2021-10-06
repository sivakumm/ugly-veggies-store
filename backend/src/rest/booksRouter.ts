import { Router } from "../../dependencies.ts";
import { books } from "../../data/mockdata.ts";

const SUB_ROUTE = "/books";

export const withBooksRoutes = (router: Router) => {
  router.get(SUB_ROUTE, (context) => {
    context.response.body = Array.from(books.values());
  });

  router.get(`${SUB_ROUTE}/:id`, (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });
};
