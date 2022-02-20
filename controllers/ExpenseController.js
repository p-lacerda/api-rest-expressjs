const Expense = require('../services/ExpenseService');

const findAll = async (_req, res) => {
  const expenses = await Expense.findAll();
  res.status(201).json(expenses);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const expenses = await Expense.findById(id);

  res.status(201).json(expenses);
};

const createExpense = async (req, res) => {
  const { descricao, valor } = req.body;
  const data = new Date();

  if (!descricao || !valor) {
    return res.status(400).json({ message: 'Descricao ou Valor does not exists' });
  }

  const expensesExists = await Expense.findByDate(descricao, data);
  if (expensesExists.length !== 0) {
    return res.status(400).json({ message: 'Already exists' });
  }

  const expenses = await Expense.createExpense(descricao, valor, data);

  return res.status(201).json(expenses);
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor } = req.body;

  const expenses = await Expense.updateExpense(descricao, valor, id);

  res.status(203).json(expenses);
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const expenses = await Expense.deleteExpense(id);

  res.status(201).json(expenses);
};

module.exports = {
  findAll,
  createExpense,
  findById,
  deleteExpense,
  updateExpense,
};
