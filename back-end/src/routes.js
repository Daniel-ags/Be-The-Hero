// Imports needed

const express = require('express');
const routes = express.Router();


// Imported Controllers

const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


// Ongs route

routes.get('/ongs', OngsController.list);
routes.post('/ongs', OngsController.create);


// Incidents route

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.list);
routes.delete('/incidents/:id', IncidentsController.delete);


// Profile route

routes.get('/profile', ProfileController.listSpecific);


// Session Route

routes.post('/sessions', SessionController.create)


module.exports = routes;