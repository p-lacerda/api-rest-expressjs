const connection = require('./connection');

const findAll = async () => {
  const [incomes] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;',
  );
  return incomes;
};

const findByDate = async (descricao, data) => {
  const query = 'SELECT * '
  + 'FROM financeiro_db.receitas '
  + 'WHERE descricao = ? AND MONTH(DATE(data)) = ?';
  const dataMonth = (`0${data.getMonth() + 1}`).slice(-2);
  const params = [descricao, dataMonth];
  const [incomes] = await connection.execute(query, params);
  return incomes;
};

const createIncome = async (descricao, valor, data) => {
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

  const [incomesById] = await connection.execute(query, params);

  return incomesById;
};

const updateIncome = async (descricao, valor, id) => {
  const query = `UPDATE financeiro_db.receitas
  SET descricao = ?, valor = ?
  WHERE id = ?;`;

  const params = [descricao, valor, id];

  await connection.execute(query, params);

  return {
    id,
    valor,
    descricao,
  };
};

const deleteIncome = async (id) => {
  const query = 'DELETE '
  + 'FROM financeiro_db.receitas '
  + 'WHERE id = ?';

  const params = [id];

  await connection.execute(query, params);

  return {
    message: 'Receita deletada com sucesso!',
  };
};

module.exports = {
  findAll,
  findByDate,
  findById,
  createIncome,
  deleteIncome,
  updateIncome,
};
