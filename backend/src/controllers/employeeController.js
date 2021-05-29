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

        console.log("🚀 ~ file: employeeController.js ~ line 16 ~ store ~ user", id)
        const { employee_name, email, section_id } = req.body;

        function generateToken() {
            return Math.random().toString(36).slice(-7);
        }

        var initial_name = employee_name.split(' ')[0].toLowerCase()
        var token_login = generateToken()

        db.query(`INSERT INTO tbEmployee(employee_name, email, token_login, section_id, store_id) VALUES('${employee_name}', '${email}', '${initial_name + token_login}', ${section_id}, ${id});`, function (err, result) {
            if (err) throw err;
            res.json({message : 'Employee registered'});
          });
    },

    index(req, res) {
        db.query("SELECT * FROM store_stock_aps.tbemployee;", function (err, result) {
          if (err) throw err;
          res.json({result});
        });
    }
}