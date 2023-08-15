const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
let connection = mysql.createConnection(config);
connection.query(`INSERT INTO peoples (name) VALUES ('Augusto'), ('Joãozinho'), ('Mariazinha');`);
connection.end();

app.get('/', (req, res) => {
    let output = `<h1>Full Cycle Rocks!</h1>`;

    connection = mysql.createConnection(config);
    connection.query(`SELECT * FROM peoples`, (err, results) => {
        output += `<ul>`;
        results.map((result) => {
            output += `<li>${result.name}</li>`;
        });
        output += `</ul>`;
        connection.end();
        res.send(output);
    });
})

app.listen(port, () => {
    console.log(`API runing at port ${port}`);
});