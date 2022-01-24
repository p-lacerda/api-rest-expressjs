const connection = require('./connection');

const getAll = async () => {
  const [receitas] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;'
  );
  return receitas;
};

const createReceita = async (descricao, valor, data) => {
  const receitas = await connection.execute(
    'INSERT INTO financeiro_db.receitas (descricao, valor, data) VALUES (?, ?, ?)',
    [descricao, valor, data]
  );

  return receitas;
};

const findByName = async (descricao, valor) => {

  let query = 'SELECT * ' +
  'FROM financeiro_db.receitas ' +
  'WHERE descricao = ? AND valor = ?';

  const params = [descricao, valor];

  // Executamos a consulta e retornamos o resultado
  const receitas = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (receitas.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return receitas[0];
};

module.exports = {
  getAll,
  createReceita,
  findByName
};
