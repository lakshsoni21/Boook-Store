import express from "express";

import jwtAuth from "../middleware/jwtAuth.js";
import SignUp from "../controllers/Users/SignUp.js";
import Login from "../controllers/Users/Login.js";
import GetBooks from "../controllers/Users/GetBooks.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post('/login', Login);
router.get('/books/', jwtAuth, GetBooks);

export default router;
