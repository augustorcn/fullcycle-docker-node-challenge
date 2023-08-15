const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.query(`INSERT INTO peoples (name) VALUES ('Augusto'), ('Joãozinho'), ('Mariazinha');`);

app.get('/', (req, res) => {

    const title = `<h1>Full Cycle Rocks!</h1>`;
    res.send(title)
})

app.listen(port, () => {
    console.log(`API runing on port ${port}`)
})