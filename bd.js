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

export { selectMembros, selectMembro, insertMembro };