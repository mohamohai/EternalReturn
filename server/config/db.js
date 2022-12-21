var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '12451245',
    database : 'mylee'
});

module.exports = db;