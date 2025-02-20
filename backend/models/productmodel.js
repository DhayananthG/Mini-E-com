const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : String,
    price: String,
    description : String,
    ratings: String,
    images : [{
        image : String
    }],
    category : String,
    seller : String,
    stock : String,
    numberofReviews: String,
    createdAt : Date
})

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;