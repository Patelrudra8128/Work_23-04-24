const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');
const feesController = require('../controllers/feesController');
const OneToOneController = require('../controllers/oneToOne');

routes.post('/addUser',userController.addUser);
routes.get('/viewUser',userController.viewUser);
routes.get('/viewUserById',userController.viewUserById);
routes.delete('/deleteuser',userController.deleteuser);

routes.post('/addFees',feesController.addFees);
routes.get('/viewFees',feesController.viewFees);

routes.get('/OneToOne',OneToOneController.OneToOne);

module.exports = routes;