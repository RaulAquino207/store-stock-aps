const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: 'src/.env' });

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

module.exports = {
    store(req, res) {
        const { section_name } = req.body;

        db.query(`INSERT INTO tbSection(section_name) VALUES('${section_name}');`, function (err, result) {
            if (err) throw err;
            res.json({result})
          });
    },

    index(req, res) {
        db.query("SELECT * FROM store_stock_aps.tbsection;", function (err, result) {
          if (err) throw err;
          res.json({result})
        });
    }

}