const express = require('express');
const bodyParser = require('body-parser');
const Receita = require('./controllers/Receita');

const app = express();

app.use(bodyParser.json());

app.get('/receitas', Receita.getAll);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});