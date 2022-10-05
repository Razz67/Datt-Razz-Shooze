// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    instock: {
        type: Boolean,
        required: true
    },
    
    image: {
        type: String,
        required: true
    }
});



// create a Model from our Schema
const Product = mongoose.model('Product', productSchema)

// export our Model
module.exports = Product;