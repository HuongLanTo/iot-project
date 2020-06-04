const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    created_by: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    status: {
        type: Number
    },
    approve: {
        type: Number,
    },
    temperature_status: {
        type: Number,
        default: true
    },
    humidity_status: {
        type: Number,
        default: true
    },
    dust_status: {
        type: Number,
        default: true
    },
    co_status: {
        type: Number,
        default: true
    },
    pressure_status: {
        type: Number,
        default: true
    },
    nh3_status: {
        type: Number,
        default: true
    },
    co2_status: {
        type: Number,
        default: true
    },
    smoke_status: {
        type: Number,
        default: true
    },
    location: {
        type: mongoose.Schema.ObjectId,
        ref: "Location"
    },
    ip: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Node = mongoose.model("Node", nodeSchema);
module.exports = Node;