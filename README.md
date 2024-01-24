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

# Documentação completa dos endpoints do projeto

URL API: <a href='https://back-end-tf-web-lovat.vercel.app'>https://back-end-tf-web-lovat.vercel.app</a>
## Tabela Membro

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
## Tabela Documento
**[GET] /documento**

Descrição: Retorna todos os documentos.

Observações: É necessário token de acesso via header (x-access-token)

**[GET] /documento/{id}**

Descrição: Retorna um único documento.

Observações: É necessário token de acesso via header (x-access-token)

**[POST] /documento**

Descrição: Cadastra um documento.

Body:
```json
{
  "titulo": "Titulo do documento",
  "descricao": "descrição do documento",
  "endereco": "link do documento",
  "datadoc": "YYYY-MM-DD"
}
```

**[PUT] /documento/{id}**

Descrição: Atualiza dados de um documento.

Observações: É necessário token de acesso via header (x-access-token)

Body:
```json
{
  "id": 1,
  "titulo": "Titulo do documento",
  "descricao": "descrição do documento",
  "endereco": "link do documento",
  "datadoc": "YYYY-MM-DD"
}
```
**[DELETE] /documento/{id}**

Descrição: Exclui um único documento.

Observações: É necessário token de acesso via header (x-access-token)




