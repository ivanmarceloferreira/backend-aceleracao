import service from "./service.js";

let maxId = 4;
let autores = [
    { id: 1, name: "Machado de Assis" },
    { id: 2, name: "Monteiro Lobato" },
    { id: 3, name: "Dan Brown" },
    { id: 4, name: "Maurício de Sousa" }
]

function findAll() {
    return service.findAll();
}

function findById(id) {
    // return autores.filter(item => item.id == id);
    return service.findById(id);
}

export default {
    findAll,
    findById
};