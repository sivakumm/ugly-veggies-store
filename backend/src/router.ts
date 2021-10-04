import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { books } from "../data/mockdata.ts";

export const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello world!";
});

router.get("/books", (context) => {
  context.response.body = Array.from(books.values());
});

router.get("/books/:id", (context) => {
  if (context.params && context.params.id && books.has(context.params.id)) {
    context.response.body = books.get(context.params.id);
  }
});
