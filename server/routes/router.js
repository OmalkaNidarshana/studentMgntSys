const express = require('express');
const route = express.Router();

const services = require('../services/render');
const conroller = require('../controller/controller');

route.get('/',services.homeRoutes);

route.get('/add-user',services.add_user);

route.get('/update-user',services.update_user);

//API
route.post('/api/users',conroller.create);
route.get('/api/users',conroller.find);
route.put('/api/users/:id',conroller.update);
route.delete('/api/users/:id',conroller.delete);

module.exports = route;