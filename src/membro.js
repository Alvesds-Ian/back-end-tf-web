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

router.get("/membro/:id", async (req, res) => {
    console.log("Rota GET /membro solicitada");
    try {
      const membro = await selectMembro(req.params.id);
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

router.delete("/membro/:id", async (req, res) => {
  console.log("Rota DELETE /membro solicitada");
  try {
    const membro = await selectMembro(req.params.id);
    if (membro.length > 0) {
      await deleteMembro(req.params.id);
      res.status(200).json({ message: "Membro excluído com sucesso!" });
    } else res.status(404).json({ message: "Membro não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.put("/membro", async (req, res) => {
  console.log("Rota PUT /membro solicitada");
  const newid = req.body.newid;
  try {
    const membro = await selectMembro(req.body.id);
    if (membro.length > 0) {
      await updateMembro(req.body, newid);
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
