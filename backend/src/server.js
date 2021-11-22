const port = 3333;

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({ path: 'src/.env' });

const server = express();

server.use(cors());
server.use(express.urlencoded( {extended:false} ));
server.use(express.json());
server.use(cookieParser());
server.use(routes);

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("🚀 ~ MYSQL Connected... ❤❤❤");
    }
});

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 2 ~ port", port);

});