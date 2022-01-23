const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;'
  );
  return authors;
};

module.exports = {
  getAll
};