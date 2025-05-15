const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      // substitua pelo seu usuário
  password: '1234',    // substitua pela sua senha
  database: 'weblmteste', // substitua pelo nome do seu banco
  port: 3307
});

module.exports = pool;
