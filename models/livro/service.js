import { where } from "sequelize";
import Book from "./book.js";
import Author from "../autor/author.js";

async function findAll() {
  return await Book.findAll({ include: Author });
}

async function findById(id) {
  const instance = await Book.findByPk(id);
  return instance;
}

async function save(book) {
  return await Book.create({
    name: book.name,
    isbn: book.isbn,
    authorId: book.authorId,
  });
}

async function update(book, id) {
  const instance = await Book.findByPk(id);
  if (!instance) {
    throw new Error("Livro não encontrado");
  }

  return await instance.update({
    nome: book.name,
    isbn: book.isbn,
    authorId: book.authorId,
  });
}

async function deleteById(id) {
  return await Book.destroy({
    where: {
      id: id,
    },
  });
}

export default {
  findAll,
  findById,
  save,
  update,
  deleteById,
};
