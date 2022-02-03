const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true
        },
        productType: {
            type: String,
            required: true
        },
        stock: {
            type: Number
        },
        price: {
            type: Number,
            required: true
        }
    }
);

const Products = model('Products', productSchema)

module.exports = Products;