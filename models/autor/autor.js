import { DataTypes } from "sequelize";
import db from "../../db.js";

const Autor = db.define('autores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
}, 
{
    freezeTableName: true,
});

export default Autor;