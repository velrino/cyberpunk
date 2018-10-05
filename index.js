import express from 'express';
import routes from './src/infrastructure/routes/cart';

const PORT = process.env.PORT || 3000;

const app = express();

routes.forEach((route) => {
  app[route.method](route.path, (request, response) => {
    route.factory.create({ params: { request }, response });
  });
});

app.listen(PORT, () => {
  const runningMessage = 'Run API in port ';
  /* eslint-disable-next-line no-console */
  console.log(runningMessage.concat(PORT));
});
