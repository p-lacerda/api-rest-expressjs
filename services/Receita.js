const Receita = require('../models/Receita');

const getAll = async () => Receita.getAll();

const findByID = async (id) => Receita.findByID(id);

const create = async (descricao, valor, data) => {

  if (!descricao || !valor ) 
    return {
      error: {
        code: 'doesntExists',
        message: "Value or Description doesn't exists",
      }
  }

  const existingReceita = await Receita.findByName(descricao, data);
  console.log(existingReceita);

  if (existingReceita) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Receita already exists',
      },
    };
  }

  return Receita.createReceita(descricao, valor, data);
}

module.exports = {
  create,
  getAll,
  findByID
};


