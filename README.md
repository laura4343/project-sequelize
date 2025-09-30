
# Projeto com Sequelize
## Atividade de programação assíncrona

### Objetivo 💡

* O objetivo desse projeto é montar uma aplicação web com CRUD completo com o Sequelize, ORM que pode ser usado com MySQL para facilitar queries e instruções no banco de dados.

### Tecnologias ⚙️

```
Front-end: Handlebars

Back-end: Node, Express, Nodemon, Sequelize

Banco de dados: MySQL, na nuvem Aiven

```

### Estrutura do código 💻


```
project-sequelize/
├── index.js
├── package.json
├── package-lock.json
├── public/
│   └── css/
│       └── styles.css
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── home.handlebars
│   ├── adduser.handlebars
│   ├── userview.handlebars
│   └── useredit.handlebars
├── db/
│   └── conn.js
└── models/
    ├── User.js
    └── Address.js
├── README.md
```

### Explicações

`└── models/`
* *Models:* essa pasta contempla as tabelas/entidade registradas no banco de dados. Com a ajuda do ORM `sequelize`, é possível definir com facilidade as exigências e validações dos campos. As tabelas existentes são `User` e `Address`.

`└── db/`
* *Db:* o arquivo `conn.js` (único da pasta), é responsável por efeutar a conexão com o banco de dados na nuvem. Além de export que contém uma instanciação da conexão com o banco, com todas as credenciais, há uma função que utiliza o método `authenticate` do `sequelize`, para que seja possível testar a conexão.

`└── views/`
* *Views:* dento da pasta `views`, estão localizadas as páginas que veremos ao iniciar o projeto. O arquivo `main.handlebars` funciona como uma espécie de contêiner ou arquivo pai, pois é nele que serão renderizados todos os outros layouts das demais funcionalidades. Temos o `adduser.handlebars`, `home.handlebars`, `useredit.handlebars` e `userview.handlebars`, todos esses formam um CRUD completo da aplicação.

`└── public/`
* *Public:* atualmente, nessa pasta há somente o arquivo de estilização global de CSS. São estilizações em comum para todas as páginas. As estilizações específicas de cada uma estão contidas dentro de seus próprios arquivos `.handlebars`. Resumidamente, a pasta public, futuramente, pode vir a ter mais módulos que a aplicação compartilha.

`└── index.js`

* *Index.js:* esse é o arquivo principal da aplicação. Contém a inicialização da conexão com o database, além de efetuar chamadas aos `models` que por sua vez, têm acesso aos métodos do ORM para interações com o banco. Também há a presença de tratamentos de erro e pequenas validações (que podem ser regras de negócio), como validar se um usuário a ser inserido possui no mínimo 2 caracteres no nome.


___

## Instruções para inicializar 👌

* Para rodar o projeto, deve-se iniciar o arquivo principal (`index.js`). Entretanto, há duas opções de comando:

    `npm start` -> comando que tem o valor `node index.js` atribuído, então faz exatamente a mesma coisa que o comando a abaixo. A vantagem é que ele pode ser personalizável. Um exemplo é se caso eu quisesse iniciar o index.js com uma flag.

    `node index.js` -> comando default que inicia o projeto.



* Observação: Não é preciso reiniciar o projeto toda vez, como o projeto utiliza o `nodemon`, que reinicia o código automaticamente quando há mudanças no mesmo.
