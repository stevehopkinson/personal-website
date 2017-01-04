const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const app = express();

app.use(compression());

app.use(serveStatic('public', { maxAge: '31d' }));

module.exports = app;
