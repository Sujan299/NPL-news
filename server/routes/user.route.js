import express from "express";
import {signup, login, get_all_users, get_a_user, validate_comment} from '../controllers/user.controller.js'
const router = express.Router();


// get a user
router.get('/user/:id', get_a_user);

// get all users
router.get("/", get_all_users);

router.post("/validate_comment", validate_comment);

router.post("/signup", signup);
router.post("/login", login);

export default router;



