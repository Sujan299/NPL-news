import express from 'express'
import {create_comment, get_all_comments} from '../controllers/comment.controller.js';

const router = express.Router();

router.post("/", create_comment);
router.get("/:id", get_all_comments);

export default router;