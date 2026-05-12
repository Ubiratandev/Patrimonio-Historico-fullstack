import {
    listStagingEntries,
    createNewStagingEntry,
    editStagingEntry,
    removeStagingEntry
} from "../services/stagingTableService.js";

export async function getStagingEntries(req, res) {
    try {
        const entries = await listStagingEntries();
        res.json({
            message: "get success",
            length: entries.length,
            data: entries
        });
    } catch (error) {
        res.status(500).json({ error: "error to get staging entries" });
    }
}

export async function postStagingEntry(req, res) {
    try {
        const entry = await createNewStagingEntry(req.body);
        res.status(201).json({ entry });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function putStagingEntry(req, res) {
    try {
        const { id } = req.params;
        const updated = await editStagingEntry(id, req.body);
        res.status(200).json({ updated });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function deleteStagingController(req, res) {
    try {
        const { id } = req.params;
        const deleted = await removeStagingEntry(id);
        res.json({
            message: "Staging entry deleted with success",
            deleted_entry: deleted
        });
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: "Staging entry not found" });
        }
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}