require('dot-env').load();

const config = require('./config');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const express = require('express');
const publicDir = require('path').join(__dirname, '/img');  

const app = new express();
app.use(routes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(publicDir));


const server = app.listen(config.port);
const host = server.address().address;
const port = server.address().port;

console.log(`The server is running at http://${host}: ${port}`);

