const express = require('express');
const bodyParser = require('body-parser');

const Receita = require('./models/Receita');

const app = express();

app.use(bodyParser.json());

app.get('/receitas', async (_req, res) => {
  const receitas = await Receita.getAll();

  res.status(200).json(receitas);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});