import { Book } from "../src/types/book.ts";

export const books = new Map<string, Book>();

books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
