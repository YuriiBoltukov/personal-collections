const express = require('express');
const bodyParser = require("body-parser");
const {collectionsRouter} = require("./routes/callections.route");
const {errorHandlerMd} = require("./middlewares/errorHandler.md");
const PORT = process.env.PORT || 1000;
const app = express();

const userRouter = express.Router();
const registrationRouter = express.Router();
const loginRouter = express.Router();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(async (req, res, next) => {
  try {
    await next();
  } catch (err) {
    console.log('serserw');
    next(err);
  }
});

app.use(bodyParser.json());
app.use('/collections', collectionsRouter);
app.use('/user', userRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);

app.use(errorHandlerMd);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});