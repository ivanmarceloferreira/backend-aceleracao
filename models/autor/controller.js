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
    return service.findById(id);
}

function save(autor) {
    return service.save(autor);
}

function update(autor, id) {
    return service.update(autor, id);
}

function deleteById(id) {
    return service.deleteById(id);
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById
};