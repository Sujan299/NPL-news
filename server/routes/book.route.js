import express from "express";
import { get_a_book, get_all_books } from "../controllers/book.controller.js";

const router = express.Router();


router.get("/book/:id", get_a_book)
router.get("/", get_all_books);

export default router;