const Receita = require('../models/Receita');

const getAll = async (_req, res) => {
    const receitas = await Receita.getAll();
  
    res.status(200).json(receitas);
}


  module.exports = {
    getAll
}