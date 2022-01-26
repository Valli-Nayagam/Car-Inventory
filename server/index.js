const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "carInventory"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT*FROM InventoryManagement";
    db.query(sqlSelect, (err, results) => {
        res.send(results)
    })
})
app.post("/api/insert", (req, res) => {
    const carName = req.body.carName
    const Description = req.body.Description
    const Colour = req.body.Colour
    const Price = req.body.Price

    const sqlInsert = "INSERT INTO InventoryManagement (carName,Description,Colour,Price) VALUES (?,?,?,?)"
    db.query(sqlInsert, (carName, Description, Colour, Price), (err, results) => {
        console.log(results)
    })
});
app.delete("/api/delete/:carName", (req, res) => {
    const name = req.params.carName
    const sqlDelete = "DELETE FROM InventoryManagement WHERE carName = ?"
    db.query(sqlDelete, name, (err, results) => {
        if (err) console.log(err);
    })
})

// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO InventoryManagement VALUE('TATA Indica Vista', 'This is one of the brand looking cars of tata withmanual and auto transmission torque convertor', 'Grey', 1800000);"
//     db.query(sqlInsert, (err, results) => {
//         res.send('server');
//     })
// })

app.listen(3001, () => {
    console.log('server');
})