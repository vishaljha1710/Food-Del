const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    categoryName: {
        type: String,
        default: "",
        required:true
    },
    name: {
        type: String,
        default: "",
        required: true
    },
    img: {
        type: String,
        default: "",
        required: true
    },
    options: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: "",
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);

