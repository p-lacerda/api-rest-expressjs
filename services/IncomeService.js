const Income = require('../models/IncomeModel');

const findAll = async () => Income.findAll();

const findByDate = async (descricao, data) => Income.findByDate(descricao, data);

const findById = async (id) => Income.findById(id);

const createIncome = async (descricao, valor, data) => {
  const incomes = await Income.createIncome(descricao, valor, data);

  return incomes;
};

const updateIncome = async (descricao, valor, id) => {
  const incomes = await Income.updateIncome(descricao, valor, id);

  return incomes;
};

const deleteIncome = async (id) => {
  const incomes = await Income.deleteIncome(id);

  return incomes;
};

module.exports = {
  findAll,
  createIncome,
  deleteIncome,
  updateIncome,
  findByDate,
  findById,
};
