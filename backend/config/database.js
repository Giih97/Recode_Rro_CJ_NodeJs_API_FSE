  
const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fstackeletro'
  });
}
module.exports = () => {
  return connMySQL;
}