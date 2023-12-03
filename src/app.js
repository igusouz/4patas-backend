import express from "express";
import connectDataBase from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from "cors";

const conexao = await connectDataBase();

    conexao.on("error", (erro) => {
        console.log("Erro de conexão com o banco", erro);
    });
    conexao.on("open", () => {
        console.log("Conexão estabelicida com o DB.")
    })

    const app = express();
    app.use(express.json());

    app.use(cors({origin: "*"}));
    routes(app);

export default app;