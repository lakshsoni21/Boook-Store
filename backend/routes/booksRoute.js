import express from "express";
import jwtAuth from "../middleware/jwtAuth.js";

import Create from "../controllers/Books/CreateBook.js";
import GetBookId from "../controllers/Books/GetBookId.js";
import UpdateBook from "../controllers/Books/UpdateBook.js";
import DeleteBook from "../controllers/Books/DeleteBook.js";

const router = express.Router();

router.post("/", jwtAuth , Create);
router.get("/:id", GetBookId);
router.put("/:id", UpdateBook);
router.delete("/:id", DeleteBook);

export default router;
