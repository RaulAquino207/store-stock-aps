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

        function randID() {
            let randomNum = Math.random() * (99999 - 10000) + 10000;
            return Math.floor(randomNum);
          }

        var store_id = randID();

        db.query(`SELECT * FROM store_stock_aps.tbstore WHERE store_id = '${store_id}';`, async function (err, result) {
            if(result.length > 0){
                store_id = randID();
            }
        });

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

            db.query(`INSERT INTO tbStore(store_id, store_name, store_owner, email, password) VALUES('${store_id}', '${store_name}', '${store_owner}', '${email}', '${hashedPassword}');`, function (err, result) {
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

                if (result.length == 0 || !(await bcrypt.compare(password, result[0].password))){
                    res.status(401).json({message : 'Email or Password is incorrect'})
                } else {
                    const id = result[0].store_id;
                    
                    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                    });

                    console.log("The token is: ", token);

                    const cookieOptions = {
                        expires: new Date(
                            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
                        ),
                        httpOnly: true
                    }

                    res.cookie('jwt', token, cookieOptions);
                }
            });

        } catch (error) {
            console.log(error)
        }
    }
}