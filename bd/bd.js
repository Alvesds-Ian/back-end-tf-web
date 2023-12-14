import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectMembros() {
  const client = await connect();
  const res = await client.query("SELECT * FROM membro");
  return res.rows;
}

async function selectMembro(id) {
    const client = await connect();
    const query = "SELECT * FROM membro WHERE id = $1";
    const membro = [id];
    const res = await client.query(query, membro);
    return res.rows;
  }

async function insertMembro(data) {
  const client = await connect();
  const query = "INSERT INTO membro (nome,senha,email,cargo,funcao,imagem) VALUES ($1,$2,$3,$4,$5,$6)";
  const membro = [data.nome, data.senha, data.email, data.cargo, data.funcao, data.imagem];
  await client.query(query, membro);
}

async function deleteMembro(id) { 
  const client = await connect();
  const query = "DELETE FROM membro WHERE id = $1";
  await client.query(query, [id]);
}

async function updateMembro(data) {
  const client = await connect();
  const query =
    "UPDATE membro SET nome = $1, email = $2, senha = $3, cargo=$4, funcao=$5, imagem=$6 WHERE id = $7";
  const membro = [data.nome, data.email, data.senha, data.cargo, data.funcao, data.imagem, data.id];
  await client.query(query, membro);
}

/*
Funções para a tabela Documento
*/

async function selectDocumentos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM documento");
  return res.rows;
}

async function selectDocumento(id) { //selectDocumento e deleteDocumento não funcionam (Membro não encontrado)
    const client = await connect();
    const query = "SELECT * FROM documento WHERE id = $1";
    const documento = id;
    const res = await client.query(query, documento);
    return res.rows;
  }

async function insertDocumento(data) {
  const client = await connect();
  const query = "INSERT INTO documento (titulo,endereco,descricao,datadoc) VALUES ($1,$2,$3,$4) ";
  const documento = [data.titulo, data.endereco, data.descricao, data.datadoc];
  await client.query(query,documento);
}

async function deleteDocumento(id) { //selectDocumento e deleteDocumento não funcionam (Membro não encontrado)
  const client = await connect();
  const query = "DELETE FROM documento WHERE id = $1";
  await client.query(query, [id]);
}

async function updateDocumento(data) {
  const client = await connect();
  const query =
    "UPDATE documento SET titulo = $1, endereco = $2, descricao=3, datadoc = $4 WHERE id = $4";
  const documento = [data.titulo, data.endereco, data.descricao, data.datadoc, data.id];
  await client.query(query,documento);
}


export { selectMembros, selectMembro, insertMembro, deleteMembro, updateMembro, selectDocumento, selectDocumentos, insertDocumento, deleteDocumento, updateDocumento };