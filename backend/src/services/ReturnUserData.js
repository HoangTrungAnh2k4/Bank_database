const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'bank'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Đã kết nối đến MySQL');
});

app.get('/customer/:id', (req, res) => {
    const customerId = req.params.id;
    let customerData = {};

    db.query('SELECT * FROM customers WHERE id = ?', [customerId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Customer not found' });

        customerData.customer = result[0];

        db.query('SELECT * FROM accounts WHERE customerId = ?', [customerId], (err, accounts) => {
            if (err) return res.status(500).json({ error: err.message });

            customerData.accounts = accounts;
            res.json(customerData);
        });
    });
});

app.listen(3000, () => {
    console.log('Server chạy tại http://localhost:3000');
});
