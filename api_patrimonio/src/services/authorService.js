import {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from "../repositories/authorRepository.js";

// helper pra evitar repetir código
function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listAuthors() {
  const authors = await getAllAuthors();
  return serializeBigInt(authors);
}

export async function createNewAuthor(name, about) {
  if (!name) {
    throw new Error("Nome é obrigatório");
  }

  const author = await createAuthor(name, about);
  return serializeBigInt(author);
}

export async function editAuthor(id, data) {
  const updated = await updateAuthor(id, data);
  return serializeBigInt(updated);
}

export async function removeAuthor(id) {
  const deleted = await deleteAuthor(id);
  return serializeBigInt(deleted);
}