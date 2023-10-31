# School API

A School API oferece acesso a recursos para armazenar, recuperar, atualizar e excluir informações sobre alunos em uma instituição educacional. Você poderá interagir com detalhes de alunos, como nome, idade, notas semestrais, nome do professor e número da sala.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Endpoints](#endpoints)
- [Testes](#testes)
- [Licença](#licença)

## Requisitos

- [Node.js](https://nodejs.org/) v18 (ou posterior)
- Dependências:
  - [Nodemon](https://www.npmjs.com/package/nodemon) - ^3.0.1
  - [Prisma](https://www.npmjs.com/package/prisma) - ^5.5.1
  - [Sucrase](https://www.npmjs.com/package/sucrase) - ^3.34.0
  - [@prisma/client](https://www.npmjs.com/package/@prisma/client) - ^5.5.2
  - [Cors](https://www.npmjs.com/package/cors) - ^2.8.5
  - [Express](https://www.npmjs.com/package/express) - ^4.18.2
  - [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - ^5.0.0

## Instalação

Siga as etapas abaixo para configurar e instalar a API em seu ambiente local:

1. Clone o repositório e acesse o diretório:

```bash
git clone git@github.com:brunohnsouza/student-scheduling-api.git
cd student-scheduling-api
```

2. Instale as dependências do projeto usando o `Node Package Manager (NPM)`:

```bash
npm install
```

3. Inicie o servidor em modo de desenvolvimento usando Nodemon (isso recarrega automaticamente o servidor quando você faz alterações no código):

```bash
npm run dev
```

A API estará acessível em `http://localhost:3333`.

## Configuração

A configuração do banco de dados depende do ambiente em que você está executando a API.

### Ambiente local (SQLite)

1. Substitua o `datasource` no arquivo `schema.prisma` pelo seguinte:

   ```prisma
   datasource db {
       provider = "sqlite"
       url      = "file:./dev.db"
   }
   ```

2. Exclua o diretório `migrations` e o arquivo `dev.db`

3. Execute o seguinte comando:

   ```bash
   npx prisma migrate dev
   ```

4. Escreva o nome da sua nova migration como, por exemplo, `create-table-student`

5. Teste com o seguinte comando:
   ```bash
   npx prisma studio
   ```

### Ambiente de produção

Você pode escolher entre vários bancos de dados, como PostgreSQL, MySQL, MongoDB e outros. Siga estas etapas:

1. Exclua o diretório `migrations` e o arquivo `dev.db`

2. Crie um arquivo `.env` na raiz do projeto

3. Adicione a variável de ambiente `DATABASE_URL` com a conexão do banco de dados em produção

4. Execute o seguinte comando:

   ```bash
   npx prisma migrate dev
   ```

5. Escreva o nome da sua nova migration como, por exemplo, `create-table-student` e confirme

6. Teste com o seguinte comando:
   ```bash
   npx prisma studio
   ```

Para mais informações, consulte a [documentação do Prisma](https://www.prisma.io/docs/concepts).

## Endpoints

Principais endpoints da API, com informações sobre seus métodos HTTP, descrição, parâmetros, exemplos de solicitações e exemplos de respostas.

| Endpoint     | Método | Descrição             | Parâmetros | Exemplo de Solicitação | Exemplo de Resposta   |
| ------------ | ------ | --------------------- | ---------- | ---------------------- | --------------------- |
| /students    | GET    | Obtém todos os alunos | -          | GET /students          | Status 200 OK, [JSON] |
| /students:id | GET    | Obtém um aluno por ID | id         | GET /students:id       | Status 200 OK, [JSON] |
| /student     | POST   | Cria um novo aluno    | JSON       | POST /api/recurso      | Status 201 Created    |
| /students:id | PUT    | Atualiza um aluno     | id         | PUT /students:id       | Status 200 OK         |
| /students:id | DELETE | Exclui um aluno       | id         | DELETE /students:id    | Status 200 OK, [JSON] |

## Testes

Teste no Swagger: [Documentação Interativa no Swagger](https://school-api-rbyx.onrender.com/api-docs)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
