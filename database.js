const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root', 
    password : '19900723s', 
    database : 'sys' 
}).promise();
module.exports = dbConnection;