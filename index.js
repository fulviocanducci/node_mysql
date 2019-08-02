const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection(config.mysql);

const goThrow = error => {
    if (error) throw error;   
}

/*
[['Cezario Canducci Dias'],['Maria Aparecida Dias Cintra']].map((data) => {
    connection.query('INSERT INTO peoples(name) values(?)',data, (error, results, fields) => {
        goThrow(error);
        console.log(results);
    });
});*/

//connection.query('UPDATE peoples SET name=? WHERE Id=?',['Maria Eduardo Câstro Silva',5], function(){});

connection.query('SELECT * FROM peoples', (error, results, fields)=> {
    goThrow(error);
    console.log(results);
});
connection.end();