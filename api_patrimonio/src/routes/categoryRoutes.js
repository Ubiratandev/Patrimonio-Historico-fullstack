import express from "express";

import {
    getCategories,
    postCategories,
    putCategories,
    deleteCategoryController
}
from "../controllers/categoriesControllers.js"

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router();

router.get("/categories", getCategories);
router.post("/categories", authenticateToken, postCategories);
router.put("/categories/:id", authenticateToken, putCategories);
router.delete("/categories/:id", authenticateToken, deleteCategoryController)

export default router;

