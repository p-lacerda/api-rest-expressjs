const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('./mysql').pool;
const PORT = '3000';

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.status(200).send();
})

app.post('/receitas', (req, res) => {
  const { descricao, valor, data } = req.body;

  if (!descricao || !valor || !data) {
    return res.status(400).send('Está faltando alguma das informações')
  };

  res.status(201).json();
})

app.listen(PORT, () => {
  console.log('Aplicação está online')
})