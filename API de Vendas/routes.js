const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/test', controller.test);

module.exports = routes;