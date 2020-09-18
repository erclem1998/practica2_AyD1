'use strict';
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
const app = express();
//const http = require('http').Server(app);
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '107.22.143.33',
    user: 'root',
    password: 'root',
    database: 'analisis1',
    port: 3306
});
connection.connect();

const ver_tareas = require('./endpoints/suma')(app);


app.listen(3000, () => console.log('escuchando en puerto 3000'));