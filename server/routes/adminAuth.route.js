import express from 'express';
import {get_a_author, login, logout} from '../controllers/adminAuth.controller.js';
import {create_admin} from '../controllers/createAdmin.controller.js';
import {adminAuthenticate} from '../middlewares/adminAuthenticate.middleware.js';
import {authorizeAdmin} from '../middlewares/roleAdminAuth.middleware.js';

const router = express.Router();

router.post("/login", login);

router.get("/dashboard", adminAuthenticate, authorizeAdmin, (req, res)=>{
    res.status(200).send("Login successfull !");
});
router.get("/create_post", adminAuthenticate, authorizeAdmin , (req, res)=>{
    res.status(200).send("post successfully !");
});
router.get("/settings", adminAuthenticate, authorizeAdmin, (req, res)=>{
    res.status(200).send("Welcome super admin !");
});
router.post("/create_admin",adminAuthenticate,authorizeAdmin,create_admin);

router.post("/logout", logout);

router.get("/author/:id", get_a_author);

export default router;