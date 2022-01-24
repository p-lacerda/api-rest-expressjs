const Receita = require('../models/Receita');

const getAll = async () => Receita.getAll();

const create = async (descricao, valor, data) => {  
  const existingReceita = await Receita.findByName(descricao, valor);
  console.log(existingReceita, 'services');

  if (existingReceita) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Value or Description',
      },
    };
  }

  return Receita.createReceita(descricao, valor, data);
}

module.exports = {
  create,
  getAll
};


