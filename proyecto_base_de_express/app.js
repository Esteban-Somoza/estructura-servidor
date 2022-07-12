// Módulos
const express = require('express');
const app = express();
const {resolve} = require('path');}

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set ('views', resolve(__dirname, 'views'));
app.set ('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use (require('./src/routes/mainRouter.js'))


app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})
