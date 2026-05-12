import express from "express";
import {
    getStagingEntries,
    postStagingEntry,
    putStagingEntry,
    deleteStagingController
} from "../controllers/stagingTableControllers.js";

import {authenticateToken} from "../authMiddleWare/authMiddleWare.js"

const router = express.Router();

router.get("/staging",authenticateToken, getStagingEntries);
router.post("/staging",authenticateToken, postStagingEntry);
router.put("/staging/:id",authenticateToken, putStagingEntry);
router.delete("/staging/:id",authenticateToken, deleteStagingController);

export default router;