'use strict'

const M_invoice = require('../model/invoice.model');
const Invoice = require('../model/invoice.model');

const controller = {};


controller.create = async (req, res) => {
    try {
        const data = req.body;

        // Validaciones
        if (!data ||
            !data.invoice_number ||
            !data.total ||
            !data.currency ||
            !data.invoice_date ||
            !data.due_date ||
            !data.vendor_name ||
            !data.remittance_address) {
            throw { status: 400, message: 'Acción no permitida' };
        }

        const invoice = new Invoice({
            invoice_number: data.invoice_number,
            total: data.total,
            currency: data.currency,
            invoice_date: data.invoice_date,
            due_date: data.due_date,
            vendor_name: data.vendor_name,
            remittance_address: data.remittance_address
        });

        Invoice.create(invoice, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the invoice."
                });
            else res.send(data);
        });

    } catch (err) {
        res.status(err.status || 500).send(err);
    }
}

controller.findAll = (req, res) => {
    Invoice.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

controller.updateStatus = (req, res) => {
    Invoice.updateStatusbyId(req.params.invoiceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Invoice with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Invoice with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

module.exports = controller;