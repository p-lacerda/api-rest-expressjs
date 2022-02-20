const connection = require('./connection');

const findAll = async () => {
  const [expenses] = await connection.execute(
    'SELECT * FROM financeiro_db.despesas;',
  );
  return expenses;
};

const findByDate = async (descricao, data) => {
  const query = 'SELECT * '
  + 'FROM financeiro_db.despesas '
  + 'WHERE descricao = ? AND MONTH(DATE(data)) = ?';
  const dataMonth = (`0${data.getMonth() + 1}`).slice(-2);
  const params = [descricao, dataMonth];
  const [expenses] = await connection.execute(query, params);
  return expenses;
};

const createExpense = async (descricao, valor, data) => {
  await connection.execute(
    'INSERT INTO financeiro_db.despesas (descricao, valor, data) VALUES (?, ?, ?)',
    [descricao, valor, data],
  );

  return {
    message: 'Despesa criada com sucesso!',
  };
};

const findById = async (id) => {
  const query = 'SELECT * '
  + 'FROM financeiro_db.despesas '
  + 'WHERE id = ?';

  const params = [id];

  const [expensesById] = await connection.execute(query, params);

  return expensesById;
};

const updateExpense = async (descricao, valor, id) => {
  const query = `UPDATE financeiro_db.despesas
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

const deleteExpense = async (id) => {
  const query = 'DELETE '
  + 'FROM financeiro_db.receitas '
  + 'WHERE id = ?';

  const params = [id];

  await connection.execute(query, params);

  return {
    message: 'Despesa deletada com sucesso!',
  };
};

module.exports = {
  findAll,
  findByDate,
  findById,
  createExpense,
  deleteExpense,
  updateExpense,
};
