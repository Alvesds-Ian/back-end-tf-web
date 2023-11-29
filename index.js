import dotenv from "dotenv";
import express from "express";
import { selectMembro, selectMembros, insertMembro, deleteMembro, updateMembro } from "./bd.js";

dotenv.config();

const app = express(); 
const port = 3000; 

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    equipe: "Cristian, Ian, Pedro G, Pedro H, Santiago, Samuel J", 
  });
});

app.get("/membros", async (req, res) => {
  console.log("Rota GET/membros solicitada");
  try {
    const membros = await selectMembros();
    res.json(membros);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
  });

app.get("/documento/:email", async (req, res) => {
    console.log("Rota GET /membro solicitada");
    try {
      const membro = await selectMembro(req.params.email);
      if (membro.length > 0) res.json(membro);
      else res.status(404).json({ message: "Membro não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

app.post("/membro", async (req, res) => {
  console.log("Rota POST /membro solicitada");
  try {
    await insertMembro(req.body);
    res.status(201).json({ message: "Membro inserido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.delete("/documento/:email", async (req, res) => { 
  console.log("Rota DELETE /membro solicitada");
  try {
    const membro = await selectMembro(req.params.email);
    if (membro.length > 0) {
      await deleteMembro(req.params.email);
      res.status(200).json({ message: "Membro excluido com sucesso!!" });
    } else res.status(404).json({ message: "Membro não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.put("/membro", async (req, res) => { //updateMembro não tá funcionando
  console.log("Rota PUT /membro solicitada");
  const newEmail = req.body.newEmail; // Adicione essa linha para obter o novo email do corpo da requisição
  try {
    const membro = await selectMembro(req.body.email);
    if (membro.length > 0) {
      await updateMembro(req.body, newEmail); // Atualize para passar o novo email como segundo parâmetro
      res.status(200).json({ message: "Membro atualizado com sucesso!" });
    } else {
      res.status(404).json({ message: "Membro não encontrado!" });
    }
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

/*
Endpoints para a tabela Documento
*/

import { selectDocumentos, selectDocumento, insertDocumento, deleteDocumento, updateDocumento } from "./bd_doc.js";

app.get("/documentos", async (req, res) => {
  console.log("Rota GET/documentos solicitada");
  try {
    const documentos = await selectDocumentos();
    res.json(documentos);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
  });

app.get("/documento/:id", async (req, res) => {  //selectDocumento e deleteDocumento não funcionam (Membro não encontrado)
    console.log("Rota GET /documento solicitada");
    try {
      const documento = await selectDocumento(req.params.id);
      if (documento.length > 0) res.json(documento);
      else res.status(404).json({ message: "Documento não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

app.post("/documento", async (req, res) => {
  console.log("Rota POST /documento solicitada");
  try {
    await insertDocumento(req.body);
    res.status(201).json({ message: "Documento adicionado com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.delete("/documento/:id", async (req, res) => { //selectDocumento e deleteDocumento não funcionam (Membro não encontrado)
  console.log("Rota DELETE /documento solicitada");
  try {
    const documento = await selectDocumento(req.params.id);
    if (documento.length > 0) {
      await deleteDocumento(req.params.id);
      res.status(200).json({ message: "Documento excluido com sucesso!!" });
    } else res.status(404).json({ message: "Documento não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.put("/documento", async (req, res) => {
  console.log("Rota PUT /documento solicitada");
  try {
    const documento = await selectDocumento(req.body.id);
    if (documento.length > 0) {
      await updateDocumento(req.body);
      res.status(200).json({ message: "Documento atualizado com sucesso!" });
    } else res.status(404).json({ message: "Documento não encontrado!" });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

