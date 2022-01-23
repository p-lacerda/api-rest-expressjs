const connection = require('./connection');

const getAll = async () => {
  const [receitas] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;'
  );
  return receitas;
};

module.exports = {
  getAll
};