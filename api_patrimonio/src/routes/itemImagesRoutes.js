import express from "express";
import {
    getItemImage,
    postItemImage,
    putItemImage,
    deleteItemImageController
} from "../controllers/itemImagesControllers.js"

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router()

router.get("/item-image", authenticateToken, getItemImage);
router.post("/item-image",authenticateToken, postItemImage);
router.put("/item-image/:id",authenticateToken, putItemImage);
router.delete("/item-image/:id",authenticateToken, deleteItemImageController)
export default router;