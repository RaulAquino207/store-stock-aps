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
        const { id } = req.params;
        const { product_name, section_id } = req.body;
        db.query(`INSERT INTO tbProduct(product_name, section_id, store_id) VALUES('${product_name}', ${section_id}, ${id});`, function (err, result) {
            if (err) throw err;
            return res.json({message : 'Product registered'});
          });
    },

    index(req, res) {
        db.query("SELECT * FROM store_stock_aps.tbproduct;", function (err, result) {
          if (err) throw err;
          return res.json({result});
        });
    }
}