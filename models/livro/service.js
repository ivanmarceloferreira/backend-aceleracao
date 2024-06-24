import { where } from "sequelize";
import Livro from "./livro.js";
import Autor from "../autor/autor.js";

async function findAll() {
  return await Livro.findAll({
    include: {
      model: Autor,
      as: "autor",
    },
  });
}

async function findById(id) {
  const instance = await Livro.findByPk(id);
  return instance;
}

async function save(livro) {
  return await Livro.create({
    nome: livro.nome,
    isbn: livro.isbn,
  });
}

async function update(livro, id) {
  const instance = await Livro.findByPk(id);
  if (!instance) {
    throw new Error("Livro não encontrado");
  }

  return await instance.update({
    nome: livro.nome,
    isbn: livro.isbn,
    autorId: livro.autorId,
  });
}

async function deleteById(id) {
  return await Livro.destroy({
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
