import express from "express";
import {
  getAuthors,
  postAuthor,
  putAuthor,
  deleteAuthorController
} from "../controllers/authorControllers.js";

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router();

router.get("/authors", authenticateToken, getAuthors);
router.post("/authors", authenticateToken, postAuthor);
router.put("/authors/:id", authenticateToken, putAuthor);
router.delete("/authors/:id", authenticateToken, deleteAuthorController);

export default router;