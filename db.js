const mysql = require("mysql");

function connect()
{
    const connection = mysql.createConnection({
        host : "172.18.4.135",
        database : "mydb1",
        user : "root",
        password : "root",
        port : "9909"
    });
    connection.connect();
    return connection;
}

module.exports = {
    connect : connect
}