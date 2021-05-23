const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: `🚀 API for the APS class project. https://github.com/RaulAquino207/store-stock-aps` });
});

module.exports = routes;