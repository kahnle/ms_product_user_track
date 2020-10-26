import express from 'express';
import Logger from './libs/Logger';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { corsUrl, environment, cookieSessionName, cookieSessionKey } from './config';
import { NotFoundError, ApiError, InternalError } from './libs/ApiError';
import { AppRouter } from './AppRouter';
import './providers/Database';
import './controllers/v1/ProductController';
import { LogMiddleware, UserIdMiddleware } from './middlewares';
import { LogServiceApi } from './libs/Http/LogApiService';

process.on('uncaughtException', (e) => {
  Logger.error({
    message: `uncaughtException`,
    extra: e,
  });
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  Logger.error({
    message: `unhandledRejection`,
    extra: e,
  });
  process.exit(1);
});

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));
app.use(
  cookieSession({
    name: cookieSessionName || '',
    keys: [cookieSessionKey || ''],
    maxAge: 24 * 60 * 60 * 1000,
  }),
);
app.use(UserIdMiddleware);
if (process.env.NODE_ENV !== 'test') {
  app.use(LogMiddleware(new LogServiceApi()));
}
app.use(AppRouter.getInstance());

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: any, res: any, next: any) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development') {
      Logger.error(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
});

export default app;
