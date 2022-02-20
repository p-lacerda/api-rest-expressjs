const express = require('express');
const Income = require('./controllers/IncomeController');
const Expense = require('./controllers/ExpenseController');

const app = express();

app.use(express.json());

app.get('/receitas', Income.findAll);
app.get('/receitas/:id', Income.findById);
app.put('/receitas/:id', Income.updateIncome);
app.post('/receitas', Income.createIncome);
app.delete('/receitas/:id', Income.deleteIncome);

// Despesas

app.get('/despesas/', Expense.searchAll);
app.get('/despesas/:id', Expense.findById);
app.get('/despesas/', Expense.createExpense);
app.get('/despesas/:id', Expense.deleteExpense);

app.listen((3000), () => {
  console.log('Porta 3000 aberta');
});
