# back-end-teste
# Documentação dos Endpoints do Projeto

## Membros do Grêmio

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
