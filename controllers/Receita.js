const Receita = require('../services/Receita');

const getAll = async (_req, res) => {
    const receitas = await Receita.getAll();
  
    res.status(200).json(receitas);
}

const createReceita = async (req, res, next) => {
  const { descricao, valor } = req.body;
  const data = new Date();

  if (!descricao || !valor ) return res.status(400).json({ message: "Not contains"})

  const receita = await Receita.create(descricao, valor, data);

  if (receita.error) return next(receita.error);

  res.status(200).json(receita);
}

  module.exports = {
    getAll,
    createReceita
}