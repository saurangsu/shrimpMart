const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const orderRoutes = express.Router();
const PORT = 4000;

let Order = require('./order.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/order', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

orderRoutes.route('/').get(function(req, res) {
    Order.find(function(err, orders) {
        if (err) {
            console.log(err);
        } else {
            res.json(orders);
        }
    });
});

orderRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Order.findById(id, function(err, order) {
        res.json(order);
    });
});

orderRoutes.route('/update/:id').post(function(req, res) {
    Order.findById(req.params.id, function(err, order) {
        if (!order)
            res.status(404).send("data is not found");
        else
            order.orderQty = req.body.orderQty;
            order.customerName = req.body.customerName;
            order.customerAddress = req.body.customerAddress;
            order.customerPhone = req.body.customerPhone;
            order.transactionId = req.body.transactionId;
            order.transactionDate = req.body.transactionDate;

            order.save().then(order => {
                res.json('Order updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

orderRoutes.route('/add').post(function(req, res) {
    let order = new Order(req.body);
    order.save()
        .then(order => {
            res.status(200).json({'order': 'order added successfully'});
        })
        .catch(err => {
            res.status(400).send('new order addition failed');
        });
});

app.use('/orders', orderRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

