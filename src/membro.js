/*
Endpoints para a tabela Membro
*/

import { selectMembro, selectMembros, insertMembro, deleteMembro, updateMembro } from "../bd/bd.js";

app.get("/membros", async (req, res) => {
    console.log("Rota GET/membros solicitada");
    try {
      const membros = await selectMembros();
      res.json(membros);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
    });
  
  app.get("/membro/:email", async (req, res) => {
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
  
  app.delete("/membro/:email", async (req, res) => { 
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
  