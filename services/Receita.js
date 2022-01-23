const Receita = require('../models/Receita');

const getAll = async () => {
  const receitas = await Receita.getAll();

  return receitas;
}

module.exports = {
  getAll,
  findById,
  createAuthor,
}