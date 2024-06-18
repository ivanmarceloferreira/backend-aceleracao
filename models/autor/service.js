import { where } from "sequelize";
import Autor from "./autor.js";

async function findAll() {
    console.log('retornando pelo service');
    return await Autor.findAll();
}

async function findById(id) {
    return await Autor.findAll({
        where: {
           id: id 
        }
    });
}

export default {
    findAll,
    findById
}