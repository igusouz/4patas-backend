import express from "express";
import petsController from "../controllers/petsController.js";

const routes = express.Router();

routes.get("/pets", petsController.listarPets);
routes.get("/pets/:id", petsController.listarPetsPorId);
routes.post("/pets", petsController.adicionarPets);
routes.put("/pets/:id", petsController.atualizarPets);
routes.delete("/pets/:id", petsController.removerPets);

export default routes;