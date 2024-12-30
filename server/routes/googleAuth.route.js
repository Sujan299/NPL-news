import express from 'express';
import {googleLogin, getLogins} from '../controllers/googleAuth.controller.js';

const router = express.Router();

router.get("/google", googleLogin);
router.post("/google", getLogins);

export default router;