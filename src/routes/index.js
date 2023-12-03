import express from "express";
import petsRoutes from "./petsRoutes.js";

const routes=(app)=>{
    app.route("/").get((req, res)=>res.status(200).send("Início 4patas"));

    app.use(express.json(), petsRoutes);

};

export default routes;