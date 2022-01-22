const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "carInventory"
});

app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO InventoryManagement VALUE('TATA Indica Vista', 'This is one of the brand looking cars of tata withmanual and auto transmission torque convertor', 'Grey', 1800000);"
    db.query(sqlInsert, (err, results) => {
        res.send('server');
    })
})

app.listen(3001, () => {
    console.log('server');
})