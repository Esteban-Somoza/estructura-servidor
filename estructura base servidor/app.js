const path = require('path');
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;


server.listen(port,() => console.log(`Abiendo servidor en http://localhost:${port}`));

let public = path.resolve(__dirname, './public')
server.use(express.static(public))

server.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html')));
// server.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')));
// server.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));

