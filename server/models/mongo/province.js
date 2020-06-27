const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinceSchema = new Schema({
    name: {
        type: String
    },
    slug: {
        type: String,
    },
    type: {
        type: String,
    },
    name_with_type: {
        type: String,
    },
    code: {
        type: Number
    },
})

const Province = mongoose.model("Province", provinceSchema);
module.exports = Province;