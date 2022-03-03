
// Sistema Rotas Express + EJS //

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require("path");
const rotas = require('./server/rotas');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public/', express.static(path.join(__dirname, '/', 'public')));
app.use(express.json());

app.use(cookieSession({
    name: 'session',
    keys: ['miller', 'miller'],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use('/', rotas);

app.listen(1818, function(){
  console.log("Porta => 1818");
})