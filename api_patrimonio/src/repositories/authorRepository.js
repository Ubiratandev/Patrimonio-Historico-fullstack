import { prisma } from "../database/prisma.js";

export async function getAllAuthors() {
  return prisma.authors.findMany();
}

export async function createAuthor(name, about) {
  return prisma.authors.create({
    data: {
      name,
      about
    }
  });
}

export async function updateAuthor(id, data) {
  return prisma.authors.update({
    where: { id: BigInt(id) },
    data
  });
}

export async function deleteAuthor(id) {
  return prisma.authors.delete({
    where: { id: BigInt(id) }
  });
}