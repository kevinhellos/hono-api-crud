import { Hono } from "hono";
import { books } from "./data/books";

const app = new Hono();

// GET
app.get("/", (c) => {
  // return c.text("Hello Hono!");
  return c.json({
    message: "Hello World from Hono"
  })
});


/**
 * 
 * API Routes
 */
// GET all books
app.get("/api/books", (c) => {
  return c.json(books);
});

// GET a book by id
// GET with a dynamic param
app.get("/api/books/:id", (c) => {
  const bookId = c.req.param("id");
  const book = books.find((book) => book.id === parseInt(bookId));

  return c.json(book);
});

// ADD a new book
// POST
app.post("/api/books", async (c) => {
  try {
    const { title, author } = await c.req.json();
    const newBook = { id: books.length + 1, title, author };

    books.push(newBook);
    return c.json(newBook);
  }
  catch (error: any) {
    return c.json("Error: failed to add new book", 422);
  }
});

// UPDATE a book by id
// PUT
app.put("/api/books/:id", async (c) => {
  try {
    const bookId = c.req.param("id");
    const book = books.find((book) => book.id === parseInt(bookId));

    if (!book) return c.json("Error: book not found", 404);

    const { title, author } = await c.req.json();

    // Only update fields should they exist in req body
    if (title !== undefined) book.title = title;
    if (author !== undefined) book.author = author;

    return c.json(book);
  } 
  catch (error: any) {
    return c.json("Error: failed to update book", 422);
  }
});

// DELETE a book by id
// DELETE
app.delete("/api/books/:id", (c) => {
  const bookId = c.req.param("id");
  const bookIndex = books.findIndex((book) => book.id === parseInt(bookId));

  // Handles a case if a book isn't found
  if (bookIndex === -1) return c.json("Error: book not found", 404);

  books.splice(bookIndex, 1);
  return c.json({ message: `Book id ${bookId} deleted` }, 200);
});

// 404
app.notFound((c) => {
  return c.text("Error 404 | Route not found", 404);
});

export default app;