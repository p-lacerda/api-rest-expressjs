const Income = require('../services/IncomeService');

const findAll = async (_req, res) => {
  const incomes = await Income.findAll();
  res.status(201).json(incomes);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const incomes = await Income.findById(id);

  res.status(201).json(incomes);
};

const createIncome = async (req, res) => {
  const { descricao, valor } = req.body;
  const data = new Date();

  if (!descricao || !valor) {
    return res.status(400).json({ message: 'Descricao ou Valor doesnt exists' });
  }

  const incomesExists = await Income.findByDate(descricao, data);
  if (incomesExists.length !== 0) {
    return res.status(400).json({ message: 'Already exists' });
  }

  const incomes = await Income.createIncome(descricao, valor, data);

  return res.status(201).json(incomes);
};

const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor } = req.body;

  const incomes = await Income.updateIncome(descricao, valor, id);

  res.status(203).json(incomes);
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;
  const incomes = await Income.deleteIncome(id);

  res.status(201).json(incomes);
};

module.exports = {
  findAll,
  createIncome,
  findById,
  deleteIncome,
  updateIncome,
};
