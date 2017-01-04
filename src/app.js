const express = require('express');
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic('public', { maxAge: '1d' }));

module.exports = app;
