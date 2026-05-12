import {
  listAuthors,
  createNewAuthor,
  editAuthor,
  removeAuthor
} from "../services/authorService.js";

export async function getAuthors(req, res) {
  try {
    const authors = await listAuthors();

    res.json({
      message: "Conexão funcionando ✅",
      authorsCount: authors.length,
      data: authors
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar autores" });
  }
}

export async function postAuthor(req, res) {
  try {
    const { name, about } = req.body;

    const author = await createNewAuthor(name, about);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function putAuthor(req, res) {
  try {
    const { id } = req.params;
    const { name, about } = req.body;

    const updated = await editAuthor(id, { name, about });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar" });
  }
}

export async function deleteAuthorController(req, res) {
  try {
    const { id } = req.params;

    const deleted = await removeAuthor(id);

    res.json({
      message: "Author deleted successfully",
      deletedAuthor: deleted
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(400).json({ error: "Erro ao deletar" });
  }
}