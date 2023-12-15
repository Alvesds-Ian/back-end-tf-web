import dotenv from "dotenv";
import express from "express";
import documentoRouter from "./documento.js";
import membroRouter from "./membro.js";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(membroRouter);
app.use(documentoRouter);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    message: "Equipe: Cristian, Ian, Pedro G, Pedro H, Santiago, Samuel J",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});



