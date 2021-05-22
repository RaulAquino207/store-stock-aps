const port = 3030;

const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: 'src/.env' });


const server = express();

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

console.log(process.env.DATABASE_PASSWORD)

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("🚀 ~ MYSQL Connected...")
    }
});

server.use(express.json());

server.get('/', (req, res) => {
    return res.json({ message: `🚀 API for the APS class project. https://github.com/RaulAquino207/store-stock-aps` });
});

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 2 ~ port", port);
});