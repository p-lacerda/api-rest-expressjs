const connection = require('./connection');

const searchAll = async () => {
  const [receita] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;',
  );
  return receita;
};

const findByDate = async (descricao, data) => {
  const query = 'SELECT * '
  + 'FROM financeiro_db.receitas '
  + 'WHERE descricao = ? AND MONTH(DATE(data)) = ?';
  const dataMonth = (`0${data.getMonth() + 1}`).slice(-2);
  const params = [descricao, dataMonth];
  const [receitas] = await connection.execute(query, params);
  return receitas;
};

const createReceita = async (descricao, valor, data) => {
  await connection.execute(
    'INSERT INTO financeiro_db.receitas (descricao, valor, data) VALUES (?, ?, ?)',
    [descricao, valor, data],
  );

  return {
    message: 'Receita criada com sucesso!',
  };
};

const findById = async (id) => {
  const query = 'SELECT * '
  + 'FROM financeiro_db.receitas '
  + 'WHERE id = ?';

  const params = [id];

  const [receitaById] = await connection.execute(query, params);

  return receitaById;
};

module.exports = {
  searchAll,
  findByDate,
  createReceita,
  findById,
};
