import {
    getAllStagingEntries,
    createStagingEntry,
    updateStagingEntry,
    deleteStagingEntry
} from "../repositories/stagingTableRepository.js";

function serializeBigInt(data) {
    return JSON.parse(
        JSON.stringify(data, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        )
    );
}

export async function listStagingEntries() {
    const entries = await getAllStagingEntries();
    return serializeBigInt(entries);
}

export async function createNewStagingEntry(data) {
    const { requester_id, target_id, status } = data;
    
    // Validação básica de campos obrigatórios
    if (!requester_id || !target_id || !status) {
        throw new Error("Fields requester_id, target_id and status cannot be empty");
    }

    const entry = await createStagingEntry(data);
    return serializeBigInt(entry);
}

export async function editStagingEntry(id, data) {
    if (!id) throw new Error("ID is required for update");

    const updatedEntry = await updateStagingEntry(id, data);
    return serializeBigInt(updatedEntry);
}

export async function removeStagingEntry(id) {
    const deleted = await deleteStagingEntry(id);
    return serializeBigInt(deleted);
}