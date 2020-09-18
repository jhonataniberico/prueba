
'use strict'

const sql = require('./db');

const Invoice = function (invoice) {
    this.invoice_number = invoice.invoice_number;
    this.total = invoice.total;
    this.currency = invoice.currency;
    this.invoice_date = invoice.invoice_date;
    this.due_date = invoice.due_date;
    this.vendor_name = invoice.vendor_name;
    this.remittance_address = invoice.remittance_address;
}

Invoice.create = (newInvoice, result) => {
    sql.query('INSERT INTO facturas SET ?', newInvoice, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created invoice: ", { id: res.insertId, ...newInvoice });
        result(null, { id: res.insertId, ...newInvoice });
    });
};

Invoice.getAll = result => {
    sql.query('SELECT * FROM facturas', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('invoices: ', res);
        result(null, res);
    });
};

Invoice.updateStatusbyId = (id, result) => {
    sql.query("UPDATE facturas SET estado = 'APROBADA' where id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log(res[0]);
        result(null, { id: id, status: 'APROBADA' });
    });
};

module.exports = Invoice;