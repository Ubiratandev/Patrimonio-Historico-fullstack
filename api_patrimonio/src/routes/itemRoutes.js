import express from "express";
import {
    getItem,
    postItem,
    putItem,
    deleteItemController
} from "../controllers/itemControllers.js"

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"


const router = express.Router()

router.get("/item",authenticateToken, getItem);
router.post("/item",authenticateToken, postItem);
router.put("/item/:id",authenticateToken, putItem);
router.delete("/item/:id",authenticateToken, deleteItemController)
export default router;