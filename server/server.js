const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, response) => {
  response.json("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





