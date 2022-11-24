
# Project Car Shop

O Car Shop é uma API com CRUD para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose.

## Instalação

Instale o Car Shop com npm

```bash
  git clone git@github.com:Jayromberg/project-car-shop.git
  cd project-car-shop
  npm install
  npm run dev
```

- ✨ Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
- ✨ A versão do `node` utilizada é a 16.


<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

  **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > :information_source: Use o comando `docker exec -it car_shop bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install` 
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  - **⚠ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
  - **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

</details>

## Documentação da API

#### Registra o carro

```
  POST /cars
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo é opcional e se não passado, vai ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |


- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### Retorna um carro

```
  GET /cars/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`   | _String_ contendo id do veículo |


#### Retorna todos os carros

```
  GET /cars
```

#### Atualiza o cadastro de um carro

```
  PUT /cars/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo é opcional e se não passado, vai ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |


- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### Registra a moto

```
  POST /motorcycle
```

| Atributos | Descrição |
| :-------: | :-------- |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo é opcional e se não passado, vai ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

#### Retorna uma moto

```
  GET /motorcycle/${id}
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`   | _String_ contendo id do veículo |

#### Retorna todas as motos

```
  GET /motorcycle
```

#### Atualiza o cadastro de uma moto

```
  PUT /motorcycles/${id}
```

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo é opcional e se não passado, vai ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Aprendizados

- Modelagem de dados com MomgoDB através do Mongoose;
- Criação de tabelas usando models do Mongoose;
- Construção de uma API REST com endpoints para consumir os models criados;
- Construção de um CRUD com TypeScript, utilizando ODM;
- Implementar testes unitários com Mocha, Chai e Sinon.
- Implementar testes de integração com Sinon-chai.


## 🛠️ Ferramentas & Metodologias Utilizadas

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MongoDB](https://www.mongodb.com/home);
- [Mongoose(ODM)](https://mongoosejs.com/);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [Mocha](https://mochajs.org/);
- [Chai](https://www.chaijs.com/);
- [Sinon.js](https://sinonjs.org/);

---
⌨️ desenvolvido por [Jayromberg Lima Santos](https://www.linkedin.com/in/jayromberg-lima-santos) 😄
