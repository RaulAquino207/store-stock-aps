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

        const { employee_name, email, section_id } = req.body;

        function generateToken() {
            return Math.random().toString(36).slice(-7);
        }

        var initial_name = employee_name.split(' ')[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        var token_login = generateToken();

        db.query(`INSERT INTO tbEmployee(employee_name, email, token_login, section_id, store_id) VALUES('${employee_name}', '${email}', '${initial_name + token_login}', ${section_id}, ${id});`, function (err, result) {
            if (err) throw err;
            res.json({message : 'Employee registered'});
          });
    },

    alter(req ,res){
        const { id } = req.params;
        const { employee_name, email, section_id } = req.body;
        db.query(`UPDATE store_stock_aps.tbemployee SET employee_name = '${employee_name}', email = '${email}', section_id = '${section_id}' WHERE (employee_id = '${id}');`, function (err, result) {
            if (err) throw err;
            res.json({result});
          });
    },

    delete(req, res){
        const { id } = req.params;
        db.query(`DELETE FROM store_stock_aps.tbemployee WHERE (employee_id = '${id}');`, async function (err, result) {
            if (err) throw err;
            res.json({result});
        })
    },

    index(req, res) {

        const token = req.headers.authorization.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        db.query(`SELECT * FROM store_stock_aps.tbemployee WHERE store_id = ${id};`, function (err, result) {
          if (err) throw err;
          res.json({result});
        });
    },

    login(req,res) {
        try {
            const { token_login } = req.body;
            if(!token_login){
                return res.status(400).json({message : 'Please provide an token_login'})
            }
            db.query(`SELECT * FROM store_stock_aps.tbemployee WHERE token_login = '${token_login}';`, async function (err, result) {
                if (err) throw err;
                if (result.length == 0){
                    res.status(401).json({message : 'Token Login is incorrect'});
                } else {
                    const id = result[0].store_id;

                    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                    });

                    console.log("The token is: ", token);

                    res.status(200).json({ token, id });
                }
            });

        } catch (error) {
            console.log(error)
        }
    }
}