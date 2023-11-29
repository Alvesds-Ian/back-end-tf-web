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

async function selectMembro(email) {
    const client = await connect();
    const query = "SELECT * FROM membro WHERE email = $1";
    const membro = [email];
    const res = await client.query(query, membro);
    return res.rows;
  }

async function insertMembro(data) {
  const client = await connect();
  const query = "INSERT INTO membro (nome,senha,email,cargo,funcao) VALUES ($1,$2,$3,$4,$5) ";
  const membro = [data.nome, data.senha, data.email, data.cargo, data.funcao];
  await client.query(query, membro);
}

async function deleteMembro(email) { 
  const client = await connect();
  const query = "DELETE FROM membro WHERE email = $1";
  await client.query(query, [email]);
}

async function updateMembro(data, emailToUpdate) { //updateMembro não tá funcionando
  const client = await connect();
  const query =
    "UPDATE membro SET nome = $1, email = $2, senha = $3, cargo = $4, funcao = $5 WHERE email = $6";
  const membro = [data.nome, data.email, data.senha, data.cargo, data.funcao, emailToUpdate];
  await client.query(query, membro);
}


export { selectMembros, selectMembro, insertMembro, deleteMembro, updateMembro };