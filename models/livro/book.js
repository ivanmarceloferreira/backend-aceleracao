import { DataTypes } from "sequelize";
import db from "../../db.js";
import Author from "../autor/author.js";

const Book = db.define("book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  isbn: {
    type: DataTypes.STRING,
  },
});

Book.belongsTo(Author, {
  foreignKey: "authorId",
});

export default Book;
