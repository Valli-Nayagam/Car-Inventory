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
    const Description = req.body.description
    const Colour = req.body.color
    const Price = req.body.price
    const sqlInsert = "INSERT INTO InventoryManagement (carName,Description,Colour,Price) VALUES (?,?,?,?);"
    db.query(sqlInsert, [carName, Description, Colour, Price], (err, results) => {
        console.log(results)
    })
});
app.post("/api/profile", (req, res) => {
    console.log(req.body);
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const phoneNo = req.body.phoneNo
    const sqlInsert = "INSERT INTO Profile (FirstName,LastName,Email,PhoneNumber) VALUES (?,?,?,?);"
    db.query(sqlInsert, [firstName, lastName, email, phoneNo], (err, results) => {
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
app.put("/api/update", (req, res) => {
    const carName = req.body.carName
    const description = req.body.description
    const color = req.body.color
    const Price = req.body.price
    const oldCarName = req.body.oldCarName
    const sqlUpdate = "UPDATE InventoryManagement SET carName = ?, Description = ?, Colour = ?, Price = ? WHERE carName = ?;"
    db.query(sqlUpdate, [carName, description, color, Price, oldCarName], (err, results) => {
        if (err) console.log(err);
    })
})

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO InventoryManagement (carName,Description,Colour,Price) VALUES (?,?,?,?);"
    db.query(sqlInsert, (err, results) => {
        res.send('server');
    })
})
const PORT = 3001;
app.listen(Process.env.PORT || PORT, () => {
    console.log('server');
})