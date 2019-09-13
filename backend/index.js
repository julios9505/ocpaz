require('dotenv').config();
require('./server/config/config');
require('./server/models/db');
require('./server/config/passportConfig');
require('./database');

const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    passport = require('passport');

const rtsIndex = require('./server/routes/index.router');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static('./dist/wop-good-neww'));
app.use('/api', rtsIndex);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/wop-good-neww/server/index.js'));
});
app.use('/api/usuarios',require('./server usuario/routes/usuario.routes'));
app.use('/api/employees', require('./server alumno/routes/employee.routes'));
app.use('/api/mobiliarios',require('./server mobiliario/routes/mobiliario.routes'));
app.use('/api/libros',require('./server libros/routes/libro.routes'));
app.use('/api/intendencias',require('./server intendencias/routes/intendencia.routes'));
app.use('/api/lecturas', require('./server lectura/routes/lectura.routes'));
app.use('/api/employees', require('./server alumno/routes/employee.routes'));


app.listen(process.env.PORT, () => {
    console.log(`Server started in ${process.env.PORT}`)
});

