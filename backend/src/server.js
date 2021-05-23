const port = 3030;

const express = require('express');
const routes = require('./routes');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: 'src/.env' });

const server = express();

server.use(express.json());
server.use(routes);

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

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 2 ~ port", port);
});