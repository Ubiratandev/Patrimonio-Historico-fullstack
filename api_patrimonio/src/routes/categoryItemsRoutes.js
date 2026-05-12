import express from "express";
import {
  getCategoryItems,
  postCategoryItems,
  putCategoryItems,
  deleteCategoryItemsController
} from "../controllers/categoryItemsControllers.js";

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router();

router.get("/category-admin", authenticateToken, getCategoryItems);
router.post("/category-admin", authenticateToken, postCategoryItems );
router.put("/category-admin/:id", authenticateToken, putCategoryItems);
router.delete("/category-admin/:id", authenticateToken,  deleteCategoryItemsController);

export default router;