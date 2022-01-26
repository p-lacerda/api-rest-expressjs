const express = require('express');
const Receita = require('./controllers/ReceitaController');

const app = express();

app.use(express.json());

app.get('/receitas', Receita.searchAll);
app.get('/receitas/:id', Receita.findById);
app.post('/receitas', Receita.createReceita);

app.listen((3000), () => {
  console.log('Porta 3000 aberta');
});
