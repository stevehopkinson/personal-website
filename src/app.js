const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const exphbs = require('express-handlebars');
const app = express();

app.use(compression());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

app.use(serveStatic('public', { maxAge: '31d' }));

module.exports = app;
