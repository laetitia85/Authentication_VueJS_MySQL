const mysql = require ("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "myAuthentification"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected")
});

module.exports = connection;