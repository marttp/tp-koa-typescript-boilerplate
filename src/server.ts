import Koa from 'koa';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import Router from './app/routes';
import { mainConfig } from './configs';

const app = new Koa();

app.use(helmet());

app.use(
  cors({
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use(
  bodyParser({
    jsonLimit: '10mb',
  })
);

app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url);
  // Pass the request to the next middleware function
  await next();
});

app.use(Router);
app.listen(mainConfig.port);

console.log(`Server running on port ${mainConfig.port}`);
