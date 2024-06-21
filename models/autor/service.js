import { where } from "sequelize";
import Autor from "./autor.js";

async function findAll() {
  console.log("retornando pelo service");
  return await Autor.findAll();
}

async function findById(id) {
  return await Autor.findAll({
    where: {
      id: id,
    },
  });
}

async function save(autor) {
  return await Autor.create({
    nome: autor.nome,
  });
}

async function update(autor, id) {
  return await Autor.update(
    {
      nome: autor.nome,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

async function deleteById(id) {
  return await Autor.destroy({
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
