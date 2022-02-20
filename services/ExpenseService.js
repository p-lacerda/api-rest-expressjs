const Expense = require('../models/ExpenseModel');

const findAll = async () => Expense.findAll();

const findByDate = async (descricao, data) => Expense.findByDate(descricao, data);

const findById = async (id) => Expense.findById(id);

const createExpense = async (descricao, valor, data) => {
  const expenses = await Expense.createExpense(descricao, valor, data);

  return expenses;
};

const updateExpense = async (descricao, valor, id) => {
  const expenses = await Expense.updateExpense(descricao, valor, id);

  return expenses;
};

const deleteExpense = async (id) => {
  const expenses = await Expense.deleteExpense(id);

  return expenses;
};

module.exports = {
  findAll,
  createExpense,
  findById,
  deleteExpense,
  updateExpense,
  findByDate,
};
