const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config({ path: 'src/.env' });

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});

module.exports = {
    store(req, res) {
        const { store_name, store_owner, email, password, password_confirm } = req.body;
        db.query(`SELECT * FROM store_stock_aps.tbstore WHERE email = '${email}';`, async function (err, result) {
            if (err) throw err;
            if (result.length > 0){
                return res.json({message : 'That email is already in use'});
            }
            else if (password !== password_confirm){
                return res.json({message : 'Password do not match'});
            }

            let hashedPassword = await bcrypt.hash(password, 8);
            console.log(hashedPassword);

            db.query(`INSERT INTO tbStore(store_name, store_owner, email, password) VALUES('${store_name}', '${store_owner}', '${email}', '${hashedPassword}');`, function (err, result) {
                if (err) throw err;
                return res.json({message : 'User registered'});
              });

          });
          
    },

    login(req, res) {
        try {
            const { email, password } = req.body;
            if(!email || !password){
                return res.status(400).json({message : 'Please provide an email and passaword'})
            }
            db.query(`SELECT * FROM store_stock_aps.tbstore WHERE email = '${email}';`, async function (err, result) {
                if (err) throw err;
                if (!result || !(await bcrypt.compare(password, result[0].password))){
                    res.status(401).json({message : 'Email or Password is incorrect'})
                }
    
            });

        } catch (error) {
            console.log(error)
        }
        
    }
}