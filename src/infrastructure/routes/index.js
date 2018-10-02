import express from 'express';
import bodyParser from 'body-parser';
import routes from './cart/index';

const app = express();
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, (request, response) => {
    route.action(request, response);
  });
});

app.listen(3000, () => {
  console.log('Port 3000!');
});
