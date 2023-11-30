import dotenv from "dotenv";
import express from "express";
import documentoRouter from "./documento.js";
import membroRouter from "./membro.js";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    message: "Equipe: Cristian, Ian, Pedro G, Pedro H, Santiago, Samuel J",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

// Rotas para membros
app.use("/membros", membroRouter);

// Rotas para documentos
app.use("/documentos", documentoRouter);

app.use(express.json());
