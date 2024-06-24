import service from "./service.js";

async function findAll() {
    const livros = await service.findAll();

    // exemplo de fetch eager
    livros.map(l => {
        console.log('autor do livro', l.autor.nome);
    })

    return livros;
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