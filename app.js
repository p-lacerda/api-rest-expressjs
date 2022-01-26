const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const errorMiddleware = require('./middlewares/error');
const Receita = require('./controllers/Receita');

const app = express();

app.use(bodyParser.json());

app.get('/receitas', rescue(Receita.getAll));
app.get('/receitas/:id', rescue(Receita.findByID));
app.post('/receitas', rescue(Receita.createReceita));
app.delete('/receitas/:id', rescue(Receita.deleteReceita));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
