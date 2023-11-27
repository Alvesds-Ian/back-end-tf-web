//index.js
import dotenv from "dotenv";
import express from "express";
import { selectMembros } from "./bd.js";

dotenv.config();

const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Ian", 
  });
});

app.get("/membros", async (req, res) => {
  try {
    const membros = await selectMembros();
    res.json(membros);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }

  console.log("Rota GET/membros solicitada");
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});