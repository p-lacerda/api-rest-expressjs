const express = require('express');
const Income = require('./controllers/IncomeController');
const Expense = require('./controllers/ExpenseController');

const APP_PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/receitas', Income.findAll);
app.get('/receitas/:id', Income.findById);
app.put('/receitas/:id', Income.updateIncome);
app.post('/receitas', Income.createIncome);
app.delete('/receitas/:id', Income.deleteIncome);

// Despesas

app.get('/despesas/', Expense.findAll);
app.get('/despesas/:id', Expense.findById);
app.put('/despesas/:id', Expense.updateExpense);
app.post('/despesas/', Expense.createExpense);
app.delete('/despesas/:id', Expense.deleteExpense);

app.listen((APP_PORT), () => {
  console.log('Aplicação aberta na porta', APP_PORT);
});
