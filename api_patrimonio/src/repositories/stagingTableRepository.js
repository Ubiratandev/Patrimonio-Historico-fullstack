import { prisma } from "../database/prisma.js";

export async function getAllStagingEntries() {
    return prisma.staging_table.findMany();
}

export async function createStagingEntry(data) {
    const { requester_id, target_id, new_data, status, reviwer_id, rejection_reason } = data;
    return prisma.staging_table.create({
        data: {
            requester_id: BigInt(requester_id),
            target_id: BigInt(target_id),
            new_data,
            status,
            reviwer_id: reviwer_id ? BigInt(reviwer_id) : null,
            rejection_reason
        }
    });
}

export async function updateStagingEntry(id, data) {
    const { requester_id, target_id, new_data, status, reviwer_id, rejection_reason } = data;
    return prisma.staging_table.update({
        where: { id: BigInt(id) },
        data: {
            requester_id: requester_id ? BigInt(requester_id) : undefined,
            target_id: target_id ? BigInt(target_id) : undefined,
            new_data,
            status,
            reviwer_id: reviwer_id ? BigInt(reviwer_id) : undefined,
            rejection_reason
        }
    });
}

export async function deleteStagingEntry(id) {
    return prisma.staging_table.delete({
        where: { id: BigInt(id) },
    });
}