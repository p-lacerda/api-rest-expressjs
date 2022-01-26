const Receita = require('../models/ReceitaModel');

const searchAll = async () => Receita.searchAll();

const findByDate = async (descricao, data) => Receita.findByDate(descricao, data);

const findById = async (id) => Receita.findById(id);

const createReceita = async (descricao, valor, data) => {
  const receita = await Receita.createReceita(descricao, valor, data);

  return receita;
};

module.exports = {
  searchAll,
  createReceita,
  findByDate,
  findById,
};
