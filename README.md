# Hono API CRUD Basics
Basics Hono API routes for CRUD (GET, POST, PUT, DELETE)

> [!NOTE]  
> The configuration for this Hono App has been setup to be deployed in Cloudflare Workers

## Available routes
### GET /api/books
- Retrieves a list of all books

### GET /api/books/:id
- Retrieves a book by its id

### POST /api/books
- Adds a new book

### PUT /api/books
- Updates a book

### DELETE /api/books/id
- Deletes a book by its id

## Running the project
- Run ``npm install`` to install all of the projects' dependencies
- Run ``npm run`` to start a local development server (http://localhost:8787) (for mine)