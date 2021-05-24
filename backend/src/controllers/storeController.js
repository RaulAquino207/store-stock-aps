const mysql = require('mysql');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

module.exports = {
    store (req, res) {
        const { store_name, store_owner, email, password } = req.body;

        return res.json({store_name, store_owner, email, password})
    }
}