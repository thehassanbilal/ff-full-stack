
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    price: { type: Number, required: true},
    image: {type: String, required: true},
    nutritionImage: {type: String, required: true},
    desc: { type: String, required: true},
    company: { type: String, required : true},
    rating: { type: Number, required: true},
    supplementCategory: { type: String, required: true},
    flavour: [{ type: String, required: true}],
    weight: [{ type: String, required: true}],
    // creator: { type: String, required: true},
});

module.exports =  mongoose.model('Product', productSchema);