import express from "express"
import {
    getAdmin,
    postAdmin,
    putAdmin,
    deleteAdminController
} from "../controllers/adminControllers.js"

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router();

router.get("/admin", authenticateToken, getAdmin);
router.post("/admin", authenticateToken, postAdmin);
router.put("/admin/:id", authenticateToken, putAdmin);
router.delete("/admin/:id", authenticateToken, deleteAdminController)

export default router;