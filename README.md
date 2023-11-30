# back-end-teste
# Autores
- Cristian Afonso 
- Eurico Santiago Climaco Rodrigues 
- Ian Alves 
- Pedro Gabriel
- Pedro Henrique 
- Samuel Juneo 

# Modelo Conceitual
<img src="/bd/Gremio-BD.png">

# Documentação dos Endpoints do Projeto

## Tabela Membro

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
```

### Listar todos os membros

**Descrição:** Lista todos os membros do grêmio presentes no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membros`

**Tipo da Requisição:** `GET`

### Listar um único membro

**Descrição:** Lista um membro do grêmio específico com base num email informado.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membro/email`

**Tipo da Requisição:** `GET`

### Excluir Membro

**Descrição:** Exclui um membro do grêmio do banco de dados, com base num email informado.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membro/email`

**Tipo da Requisição:** `DELETE`

### Atualizar Membro

**Descrição:** Atualiza informações de um membro do grêmio já existente no banco de dados.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `PUT`

**Body:**
```json
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}
```

## Tabela Documento

### Cadastrar Novo Documento

**Descrição:** Insere um novo documento no banco de dados.

**Endpoint:** `sua-url.vercel.app/user`

**Tipo da Requisição:** `POST`

**Body:**
```json
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}
```

### Listar todos os documentos

**Descrição:** Lista todos os documentos presentes no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/documentos`

**Tipo da Requisição:** `GET`

### Listar um único documento

**Descrição:** Lista um documento específico com base em seu id.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/documento/id`

**Tipo da Requisição:** `GET`

### Excluir Documento

**Descrição:** Exclui um documento, com base num id informado.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/documento/id`

**Tipo da Requisição:** `DELETE`

### Atualizar Documento

**Descrição:** Atualiza informações de um documento já existente no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/`

**Tipo da Requisição:** `PUT`

**Body:**
```json
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}
```


