const { Schema } = require('mongoose');

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productType: {
            type: String,
            required: true
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number,
            required: true
        }
    }
);

module.exports = productSchema;