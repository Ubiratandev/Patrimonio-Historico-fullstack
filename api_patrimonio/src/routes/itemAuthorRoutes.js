import express from "express";
import {
    getItemAuthor,
    postItemAuthor,
    putItemAuthor,
    deleteItemAuthorController
} from "../controllers/itemAuthorControllers.js"

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"


const router = express.Router()

router.get("/item-author", authenticateToken, getItemAuthor);
router.post("/item-author", authenticateToken, postItemAuthor);
router.put("/item-author/:id", authenticateToken, putItemAuthor);
router.delete("/item-author/:id", authenticateToken, deleteItemAuthorController)
export default router;