import { NextFunction, Response, Request, Router } from 'express';
import bodyParser from 'body-parser';
import collectionsRouter from './routes/collections.route';
import userRouter from './routes/user.route';
import notFoundHandlerMd from './middlewares/notFoundPageHandler.md';
import errorHandlerMd from './middlewares/errorHandler.md';
import express from 'express';

const PORT = process.env.PORT || 1000;
const app = express();

const registrationRouter = Router();
const loginRouter = Router();

app.use(function (req: Request, res: Response, next: NextFunction) {
  // throw new Error('BROKEN')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(bodyParser.json());

app.use('/collections', collectionsRouter);
app.use('/user', userRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);

app.use(notFoundHandlerMd);
app.use(errorHandlerMd);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
