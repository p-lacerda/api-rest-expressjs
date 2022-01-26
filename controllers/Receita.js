const Receita = require('../services/Receita');

const findByID = async (req, res) => {
  const { id } = req.params;
  const receitaPorId = await Receita.findByID(id);

  res.status(201).json(receitaPorId);
};

const getAll = async (_req, res) => {
    const receitas = await Receita.getAll();
  
    res.status(200).json(receitas);
}

const createReceita = async (req, res, next) => {
  const { descricao, valor } = req.body;
  const data = new Date();
  
  const receita = await Receita.create(descricao, valor, data);

  if (receita.error) return next(receita.error);

  res.status(200).json(receita);
}

const deleteReceita = async (req, res) => {
  const { id } = req.params;
  const receita = Receita.deleteReceita(id);

  res.status(200).json(receita);
}

const updateReceita = async (req, res) => {
  const { descricao, valor, id } = req.body;

  const data = new Date();
  Receita.updateReceita(descricao, valor, data, id);
}

  module.exports = {
    getAll,
    createReceita,
    findByID,
    deleteReceita,
    updateReceita
}