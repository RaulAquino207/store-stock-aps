const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({ path: 'src/.env' });

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

module.exports = {
    store(req, res) {
        const { id } = req.params;
        const { section_name } = req.body;
        db.query(`INSERT INTO tbSection(section_name, store_id) VALUES('${section_name}', ${id});`, function (err, result) {
            if (err) throw err;
            return res.json({message : 'Section registered'});
          });
    },

    alter(req ,res){
        const { id } = req.params;
        const { section_name } = req.body;
        db.query(`UPDATE store_stock_aps.tbsection SET section_name = '${section_name}' WHERE (section_id = '${id}');`, function (err, result) {
            if (err) throw err;
            res.json({result});
          });
    },

    delete(req, res){
        const { id } = req.params;
        db.query(`DELETE FROM store_stock_aps.tbsection WHERE (section_id = '${id}');`, async function (err, result) {
            if (err) throw err;
            res.json({result});
        })
    },

    index(req, res) {
        const token = req.headers.authorization.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        
        db.query(`SELECT * FROM store_stock_aps.tbsection WHERE store_id = ${id};`, function (err, result) {
          if (err) throw err;
          res.json({result});
        });
    }

}