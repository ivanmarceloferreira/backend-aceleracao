import { DataTypes } from "sequelize";
import db from "../../db.js";
import Autor from "../autor/autor.js";

const Livro = db.define(
  "livros",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Livro.belongsTo(Autor, {
  foreignKey: "autorId",
  as: 'autor'
});

export default Livro;
