import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectDocumentos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM documento");
  return res.rows;
}

async function selectDocumento(id) {
    const client = await connect();
    const query = "SELECT * FROM documento WHERE id = $1";
    const documento = [id];
    const res = await client.query(query, documento);
    return res.rows;
  }

async function insertDocumento(data) {
  const client = await connect();
  const query = "INSERT INTO documento (titulo,conteudo,datadoc) VALUES ($1,$2,$3) ";
  const documento = [data.titulo, data.conteudo, data.datadoc];
  await client.query(query, documento);
}

async function deleteDocumento(id) { 
  const client = await connect();
  const query = "DELETE FROM documento WHERE id = $1";
  await client.query(query, [id]);
}

async function updateDocumento(data) {
  const client = await connect();
  const query =
    "UPDATE documento SET titulo = $1, conteudo = $2, datadoc = $3 WHERE id = $4";
  const documento = [data.titulo, data.conteudo, data.datadoc, data.id];
  await client.query(query, documento);
}


export { selectDocumento, selectDocumentos, insertDocumento, deleteDocumento, updateDocumento };