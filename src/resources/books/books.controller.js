import { nanoid } from "nanoid";
import { pool } from "../../db/connect.js";
import { createCustomError } from "../../errors/customError.js";
import { tryCatchWrapper } from "../../middlewares/tryCatchWrapper.js";

/**
 * @returns: book object
 */
async function getBook(id) {
  let sql = "SELECT * FROM books WHERE id = ?";
  const [rows] = await pool.query(sql, [id]);
  return rows[0];
}

/**
 * @number :  #1
 * @description: Create a book
 * @route POST /books
 */
export const createBook = tryCatchWrapper(async function (req, res, next) {
  const { title, content } = req.body;

  if (!title || !content) {
    return next(createCustomError("All fields are required", 400));
  } else {
    let sql = "INSERT INTO `books`(`id`, `title`, `content`) VALUES (?, ?, ?)";
    await pool.query(sql, [nanoid(), title, content]);
    return res.status(201).json({ message: "New book has been created" });
  }
});

/**
 * @todo : #2.
 * @description: Get all books
 * @route : GET /books
 */
export const getAllBooks = tryCatchWrapper(async function (req, res, next) {
  let sql = "SELECT * FROM books";
  const [rows] = await pool.query(sql);
  if (!rows.length) {
    return res.status(204).json({
      message: "Empty store",
    });
  } else {
    return res.status(200).json({
      message: "Data found",
      books: rows,
    });
  }
});

/**
 * @todo : #3.
 * @description: Get single book
 * @route : GET /books/:id
 */
export const getOneBook = tryCatchWrapper(async function (req, res, next) {
  const { id } = req.params;

  const book = await getBook(id);
  if (!book) {
    return next(createCustomError("Book Not Found", 404));
  } else {
    return res.status(200).json(book);
  }
});

/**
 * @todo : #4.
 * @description: Update single book
 * @route : PATCH/PUT /books/:id
 */
export const updateOneBook = tryCatchWrapper(async function (req, res, next) {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id || !title || !content) {
    return next(createCustomError("All fields are required", 400));
  } else {
    const book = await getBook(id);
    if (!book) {
      return next(createCustomError("Book is not found", 404));
    } else {
      let sql = "UPDATE books SET title = ?, content = ? WHERE id = ?";
      await pool.query(sql, [title, content, id]);
      return res.status(201).json({
        message: "Book has been Updated!",
      });
    }
  }
});

/**
 * @todo : #5.
 * @description: delete single book
 * @route : DELETE /books/:id
 */

export const deleteOneBook = tryCatchWrapper(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(createCustomError("ID is required please!", 400));
  } else {
    const book = await getBook(id);
    if (!book) {
      return next(createCustomError("Book not found", 404));
    } else {
      let sql = "DELETE FROM books WHERE id = ?";
      await pool.query(sql, [id]);
      return res.status(200).json({
        message: `Book with <<${id}>> has been removed`,
      });
    }
  }
});
