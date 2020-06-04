const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
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

const Area = mongoose.model("Area", areaSchema);
module.exports = Area;