import express from "express";
import autorRoutes from "./models/autor/routes.js";
import livroRoutes from "./models/livro/routes.js";

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Hello World!");
});

routes.use(autorRoutes);
routes.use(livroRoutes);

export { routes as default };