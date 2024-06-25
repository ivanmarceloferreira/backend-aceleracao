import { where } from "sequelize";
import Author from "./author.js";

async function findAll() {
  console.log("retornando pelo service");
  return await Author.findAll();
}

async function findById(id) {
  return await Author.findAll({
    where: {
      id: id,
    },
  });
}

async function save(author) {
  return await Author.create({
    name: author.name,
  });
}

async function update(author, id) {
  return await Author.update(
    {
      nome: author.name,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

async function deleteById(id) {
  return await Author.destroy({
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
