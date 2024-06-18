import express from "express";
import controller from "./controller.js";

const routes = express.Router();

routes.get('/autores', async (req, res) => {
    const autores = await controller.findAll();
    res.status(200).json(autores);
});

routes.post('/autores', (req, res) => {
    const autor = req.body; // pegando o conteúdo da requisição (body)
    maxId++; // incrementa o max id
    autor['id'] = maxId; // adicionando a propriedade id com o valor máximo

    autores.push(autor); // adicionando a nova variável ao array de dados

    res.json(autor); // enviando o cadastro para o client
});

routes.get('/autores/:id', async (req, res) => {
    const id = Number(req.params.id);
    const encontrado = await controller.findById(id);

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(400).json("Autor não cadastrado.");
    }

});

routes.delete('/autores/:id', (req, res) => {
    const id = Number(req.params.id);
    autores = autores.filter((item) => item.id != id);

    res.status(204).send();
});

routes.get('/autores/nome/:nome', (req, res) => {
    const nome = req.params.nome;

    const encontrado = autores.filter((item) => item.name.includes(nome));

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(400).json("Autor não cadastrado.");
    }
});

routes.post('/autores/filter-by-name', (req, res) => {
    const nome = req.body.nome;
    console.log('nome que veio na requisicao > ', nome);

    const encontrado = autores.filter((item) => item.name.includes(nome));

    if (encontrado.length > 0) {
        res.status(200).json(encontrado);
    } else {
        res.status(400).json("Autor não cadastrado.");
    }
});

export { routes as default };