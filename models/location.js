const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    province: {
        type: mongoose.Schema.ObjectId,
        ref: "Province"
    },
    district: {
        type: mongoose.Schema.ObjectId,
        ref: "District"
    },
    sub_district: {
        type: mongoose.Schema.ObjectId,
        ref: "SubDistrict"
    },
    detail_location: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
})

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;