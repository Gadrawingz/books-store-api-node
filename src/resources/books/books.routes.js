import express from "express";
import {
  createBook,
  getOneBook,
  getAllBooks,
  updateOneBook,
  deleteOneBook,
} from "./books.controller.js";

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getOneBook).patch(updateOneBook);
router.route("/:id").delete(deleteOneBook);

export default router;
