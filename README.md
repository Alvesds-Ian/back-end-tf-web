# Modelo de back-end do Site do Grêmio Estudantil
Respositório contendo modelagem do Banco de Dados e documentação dos endpoints do site.
# Autores
- Cristian Afonso Dias 
- Eurico Santiago Climaco Rodrigues 
- Ian Alves de Souza
- Pedro Gabriel Rodrigues Amaral
- Pedro Henrique Mendes de Castro
- Samuel Júneo de Andrade Costa

# Modelagem do BD

<a href='img src="/bd/CONCEITUAL.png'>Modelo Conceitual</a>

<a href='img src="/bd/logico.png'>Modelo Lógico</a>

<a href='/bd/DDL.sql'>Modelo Físico</a>

# Ferramentas Utilizadas na Disponibilização do BD
O Banco de Dados foi criado e disponibilizado para a API utilizando a plataforma <a href='https://neon.tech/'>Neon Tech</a> 

# Documentação dos Endpoints do Projeto

## Tabela Membro

### Cadastrar Novo Membro

**Descrição:** Insere um novo membro do grêmio no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membro`

**Tipo da Requisição:** `POST`

**Body:**
```json
{
  "nome": "Nome do membro",
  "senha": "***",
  "email": "email@email.com",
  "cargo": "cargo do membro",
  "funcao": "funcao",
  "imagem": "foto.png"
}
```

### Listar todos os membros

**Descrição:** Lista todos os membros do grêmio presentes no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membros`

**Tipo da Requisição:** `GET`

### Listar um único membro

**Descrição:** Lista um membro do grêmio específico com base num id informado.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membro/id`

**Tipo da Requisição:** `GET`

### Excluir Membro

**Descrição:** Exclui um membro do grêmio do banco de dados, com base num id informado.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/membro/id`

**Tipo da Requisição:** `DELETE`

### Atualizar Membro

**Descrição:** Atualiza informações de um membro do grêmio já existente no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/id`

**Tipo da Requisição:** `PUT`

**Body:**
```json
{
  "id": "1",
  "nome": "Nome do membro",
  "senha": "***",
  "email": "email@email.com",
  "cargo": "cargo do membro",
  "funcao": "funcao",
  "imagem": "foto.png"
}
```

## Tabela Documento

### Cadastrar Novo Documento

**Descrição:** Insere um novo documento no banco de dados.

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/documento`

**Tipo da Requisição:** `POST`

**Body:**
```json
{
  "titulo": "Titulo do documento",
  "descricao": "descrição do documento",
  "endereco": "link do documento",
  "datadoc": "YYYY-MM-DD"
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

**Endpoint:** `https://back-end-tf-web-lovat.vercel.app/documento`

**Tipo da Requisição:** `PUT`

**Body:**
```json
{
  "id": 1,
  "titulo": "Titulo do documento",
  "descricao": "descrição do documento",
  "endereco": "link do documento",
  "datadoc": "YYYY-MM-DD"
}
```
**[GET] /membro**

Descrição: Retorna todos os membros.

Observações: É necessário token de acesso via header (x-access-token)

**[GET] /membro/{id}**

Descrição: Retorna um único membro.

Observações: É necessário token de acesso via header (x-access-token)

**[POST] /membro**

Descrição: Cadastra um membro.

Body:
```json
{
  "nome": "Nome do membro",
  "senha": "***",
  "email": "email@email.com",
  "cargo": "cargo do membro",
  "funcao": "funcao",
  "imagem": "foto.png"
}
```

**[PUT] /membro/{id}**

Descrição: Atualiza dados de um membro.

Observações: É necessário token de acesso via header (x-access-token)

Body:
```json
{
  "id": "1",
  "nome": "Nome do membro",
  "senha": "***",
  "email": "email@email.com",
  "cargo": "cargo do membro",
  "funcao": "funcao",
  "imagem": "foto.png"
}
```
**[DELETE] /membro/{id}**

Descrição: Exclui um único membro.

Observações: É necessário token de acesso via header (x-access-token)

**[POST] /login**

Descrição: Autentica usuário e gera token de acesso.

Observações: É necessário que o usuário esteja cadastrado.

Body:
```json
{
  "senha": "***",
  "email": "email@email.com"
}
```

