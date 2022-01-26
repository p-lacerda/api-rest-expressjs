const Receita = require('../services/ReceitaService');

const searchAll = async (_req, res) => {
  const receita = await Receita.searchAll();
  res.status(201).json(receita);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const receita = await Receita.findById(id);

  res.status(201).json(receita);
};

const createReceita = async (req, res) => {
  const { descricao, valor } = req.body;
  const data = new Date();

  if (!descricao || !valor) {
    return res.status(400).json({ message: 'Descricao ou Valor doesnt exists' });
  }

  const receitaExists = await Receita.findByDate(descricao, data);
  if (receitaExists.length !== 0) {
    return res.status(400).json({ message: 'Already exists' });
  }

  const receita = await Receita.createReceita(descricao, valor, data);

  return res.status(201).json(receita);
};

module.exports = {
  searchAll,
  createReceita,
  findById,
};
