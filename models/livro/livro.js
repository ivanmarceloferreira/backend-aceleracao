import { DataTypes } from "sequelize";
import db from "../../db.js";

const Livro = db.define('livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    isbn: {
        type: DataTypes.STRING
    }
}, 
{
    freezeTableName: true,
});

export default Livro;