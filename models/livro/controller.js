import service from "./service.js";

function findAll() {
    return service.findAll();
}

function findById(id) {
    return service.findById(id);
}

function save(livro) {
    return service.save(livro);
}

function update(livro, id) {
    return service.update(livro, id);
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