const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');
const feesController = require('../controllers/feesController');
const OneToOneController = require('../controllers/oneToOne');
const courseController = require('../controllers/courseController');
const rawQueries = require('../controllers/rewQueries');

routes.post('/addUser',userController.addUser);
routes.get('/viewUser',userController.viewUser);
routes.get('/viewUserById',userController.viewUserById);
routes.delete('/deleteuser',userController.deleteuser);

routes.post('/addFees',feesController.addFees);
routes.get('/viewFees',feesController.viewFees);

routes.get('/OneToOne',OneToOneController.OneToOne);
routes.get('/OneToMany',OneToOneController.OneToMany);

routes.post('/addCourse',courseController.addCourse);
routes.get('/viewCourse',courseController.viewCourse);

routes.get('/select',rawQueries.select);

module.exports = routes;