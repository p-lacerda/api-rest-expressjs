const connection = require('./connection');

const getAll = async () => {
  const [receitas] = await connection.execute(
    'SELECT * FROM financeiro_db.receitas;'
  );
  return receitas;
};

const findByName = async (descricao, data) => {
  let query = 'SELECT * ' +
  'FROM financeiro_db.receitas ' +
  'WHERE descricao = ? AND MONTH(DATE(data)) = ?';

  const params = [descricao, data];

  // Executamos a consulta e retornamos o resultado
  const receitas = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (receitas[0].length === 0) return null;

  // Caso contrário, retornamos a receita encontrado
  // console.log(receitas[0])
  return receitas[0];
};

const findByID = async (id) => {

  let query = 'SELECT * ' +
  'FROM financeiro_db.receitas ' +
  'WHERE id = ?';

  const params = [id];

  const receitaById = await connection.execute(query, params);

  if (receitaById[0].length === 0) return null;

  return receitaById[0];
} 

const createReceita = async (descricao, valor, data) => {
  await connection.execute(
    'INSERT INTO financeiro_db.receitas (descricao, valor, data) VALUES (?, ?, ?)',
    [descricao, valor, data]
  );

  const receitaEncontrada = findByName(descricao, valor);

  return receitaEncontrada;
};

module.exports = {
  getAll,
  createReceita,
  findByName,
  findByID
};
