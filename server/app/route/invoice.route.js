'use strict'

const express = require('express'),
    controller = require('../controller/invoice.controller'),
    api = express.Router();

api.post('/', controller.create);

api.get('/', controller.findAll);

api.put('/:invoiceId', controller.updateStatus);

module.exports = api;