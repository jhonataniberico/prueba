'use strict'
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    app = express(),
    http = require('http').Server(app);

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors())
    .use(morgan('dev'));

// Routes
const r_invoice = require('./app/route/invoice.route');

app.use('/invoice', r_invoice);


http.listen(process.env.PORT || 4000, () => { });