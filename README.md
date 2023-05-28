# Agenda - Projeto FullStack / BACK
### *O Objetivo foi desenvolver um serviço de back-end responsável por simular uma agenda, podendo adicionar/remover contatos utilizando TypeORM.*

#### [Diagrama](https://drive.google.com/file/d/15vOe7nMFv4YZt0Z_-N8UGTGQouOi6TyG/view?usp=sharing)
#### [Documentação](https://github.com/stevalves/m6sp2-back/blob/main/DOC.md)

## **Tecnologias e bibliotecas**:
* Node
* Express
* TypeScript
* bcryptjs
* dotenv
* jsonwebtoken
* pg
* typeorm
* zod
* ts-node

###

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Conectar ao banco de dados

Instalada as dependências, crie e se conecte a um banco de dados através do env.

```.env
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
SECRET_KEY=VERYSECRETKEY
```

Enfim rode as migrações.

```bash
yarn typeorm migration:run -d src/data-source.ts
```

## Rodar o servidor

Feita a conexão com o banco de dados, inicie o servidor utilizando o comando abaixo.

```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```
