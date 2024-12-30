import express from 'express'
import {create_category, get_a_category, get_all_categories} from '../controllers/categories.controller.js';

const router = express.Router();

router.post("/create_category", create_category);
router.get("/category/:id", get_a_category)
router.get("/categories", get_all_categories);

export default router;