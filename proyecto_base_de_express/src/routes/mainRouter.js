// Acá nos falta express y el router
const {Router} = require ('express')
const routes = Router ();


// Aća nos falta traer el controller
const {home, detalle} = require ('../controllers/mainController.js');

// Acá definimos las rutas
routes.get ('/', home);
routes.get ('/detalle', detalle);

// Acá exportamos el resultado
module.exports = routes;