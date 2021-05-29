const express = require('express');
const routes = express.Router();
const storeController = require('./controllers/storeController');
const employeeController = require('./controllers/employeeController');
const sectionController = require('./controllers/sectionController');
const productController = require('./controllers/productController');

routes.get('/', (req, res) => {
    return res.json({ message: `🚀 API for the APS class project. https://github.com/RaulAquino207/store-stock-aps` });
});

routes.post('/store', storeController.store);
routes.post('/login', storeController.login);

routes.post('/products/:id', productController.store);
routes.get('/products', productController.index);

routes.post('/section/:id', sectionController.store);
routes.get('/section', sectionController.index);

routes.post('/employee/login', employeeController.login);
routes.post('/employee/:id', employeeController.store);
routes.get('/employee', employeeController.index);

module.exports = routes;