/*
Endpoints para a tabela Membro
*/
import { Router } from "express";

import { selectMembro, selectMembros, insertMembro, deleteMembro, updateMembro } from "../bd/bd.js";

const router = Router();

router.get("/membros", async (req, res) => {
    console.log("Rota GET/membros solicitada");
    try {
      const membros = await selectMembros();
      res.json(membros);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

router.get("/membro/:email", async (req, res) => {
    console.log("Rota GET /membro solicitada");
    try {
      const membro = await selectMembro(req.params.email);
      if (membro.length > 0) res.json(membro);
      else res.status(404).json({ message: "Membro não encontrado!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
});

router.post("/membro", async (req, res) => {
  console.log("Rota POST /membro solicitada");
  try {
    await insertMembro(req.body);
    res.status(201).json({ message: "Membro inserido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.delete("/membro/:email", async (req, res) => {
  console.log("Rota DELETE /membro solicitada");
  try {
    const membro = await selectMembro(req.params.email);
    if (membro.length > 0) {
      await deleteMembro(req.params.email);
      res.status(200).json({ message: "Membro excluído com sucesso!" });
    } else res.status(404).json({ message: "Membro não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.put("/membro", async (req, res) => {
  console.log("Rota PUT /membro solicitada");
  const newEmail = req.body.newEmail;
  try {
    const membro = await selectMembro(req.body.email);
    if (membro.length > 0) {
      await updateMembro(req.body, newEmail);
      res.status(200).json({ message: "Membro atualizado com sucesso!" });
    } else {
      res.status(404).json({ message: "Membro não encontrado!" });
    }
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

export default router;
