// Import packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Other imports
import { notFound } from "./src/middlewares/notFound.js";
import { handleError } from "./src/middlewares/handleError.js";
import booksRoute from "./src/resources/books/books.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT_NUMBR || 3005;

const corsOptions = {
  origin: "http://localhost:5173", // 4 vite app
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/api/v1/books", booksRoute);

// Misc.
app.use(notFound);
app.use(handleError);

// Bottom code
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
