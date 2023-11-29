/*
Endpoints para a tabela Documento
*/
import { selectDocumentos, selectDocumento, insertDocumento, deleteDocumento, updateDocumento } from "../bd/bd.js";

app.get("/documentos", async (req, res) => {
    console.log("Rota GET/documentos solicitada");
    try {
      const documentos = await selectDocumentos();
      res.json(documentos);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
    });
  
  app.get("/documento/:id", async (req, res) => {  //selectDocumento aparece erro "Query values must be an array"
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