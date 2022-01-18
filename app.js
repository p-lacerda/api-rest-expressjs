const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('./mysql').pool;
const PORT = '3000';

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.status(200).send();
})

app.listen(PORT, () => {
  console.log('Aplicação está online')
})