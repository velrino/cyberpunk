const express = require('express');
const routes = require("./src/infrastructure/routes");
const typeorm = require("typeorm");
const Helpers = require("./src/infrastructure/helpers");

typeorm.createConnection({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "cart",
  synchronize: true,
  logging: false,
  entities: Helpers.entities()
}).then(async connection => {

  var bodyParser = require('body-parser')

  var app = express();
  app.use(bodyParser.json());

  routes.forEach(route => {
    app[route.method](route.path, (request, response, next) => {
      route.action(request, response)
        .then(() => next)
        .catch(err => next(err));
    });
  });

  app.listen(3000, function () {
    console.log('Port 3000!');
  });

}).catch(error => console.log("TypeORM connection error: ", error));