const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    orderQty: {
        type: Number
    },
    customerName: {
        type: String
    },
    customerAddress: {
        type: String
    },
    customerPhone: {
        type: String
    },
    transactionDate: {
        type: Date
    }
});

module.exports = mongoose.model('Order', Order);