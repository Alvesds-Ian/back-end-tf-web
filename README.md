# back-end-teste
# Documentação dos Endpoints do Projeto

## Tabela Membros

### Cadastrar Novo Membro

**Descrição:** Insere um novo membro do grêmio no banco de dados.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `POST`

**Body:**
```json
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}

### Listar todos os membros

**Descrição:** Lista todos os membros do grêmio presentes no banco de dados.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `GET`

### Listar um único membro

**Descrição:** Lista um membro do grêmio específico com base num email informado.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `GET`

### Excluir Membro

**Descrição:** Exclui um membro do grêmio do banco de dados, com base num email informado.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `DELETE`

### Atualizar Membro

**Descrição:** Insere um novo membro do grêmio no banco de dados.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `POST`

**Body:**
```json
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}

