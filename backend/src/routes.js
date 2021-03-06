const express = require('express');
const routes = express.Router();
const storeController = require('./controllers/storeController');
const employeeController = require('./controllers/employeeController');
const sectionController = require('./controllers/sectionController');
const productController = require('./controllers/productController');

routes.get('/', (req, res) => {
    return res.json({ message: `🚀 API for the APS class project. https://github.com/RaulAquino207/store-stock-aps` });
});

routes.post('/store/login', storeController.login);
routes.post('/store', storeController.store);

routes.post('/products/:id', productController.store);
routes.get('/products', productController.index);
routes.patch('/products/:id', productController.alter);
routes.delete('/products/:id', productController.delete);

routes.post('/section/:id', sectionController.store);
routes.get('/section', sectionController.index);
routes.patch('/section/:id', sectionController.alter);
routes.delete('/section/:id', sectionController.delete);

routes.post('/employee/login', employeeController.login);
routes.post('/employee/:id', employeeController.store);
routes.get('/employee', employeeController.index);
routes.patch('/employee/:id', employeeController.alter);
routes.delete('/employee/:id', employeeController.delete);

module.exports = routes;